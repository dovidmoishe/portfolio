"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { SmoothScroller, SmoothScrollSnapshot } from "./types";
import {
  createSmoothScroller,
  getElementTop,
  prefersReducedScrollMotion,
  scrollToElementNative,
} from "./service";

let scroller: SmoothScroller | null = null;
let snapshot: SmoothScrollSnapshot = {
  isEnabled: false,
  isReady: false,
};

const serverSnapshot: SmoothScrollSnapshot = {
  isEnabled: false,
  isReady: false,
};

const listeners = new Set<() => void>();

function emitSmoothScrollChange() {
  listeners.forEach((listener) => listener());
}

function setSnapshot(nextSnapshot: SmoothScrollSnapshot) {
  snapshot = nextSnapshot;
  emitSmoothScrollChange();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return snapshot;
}

function getServerSnapshot() {
  return serverSnapshot;
}

export function registerSmoothScroll() {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  if (prefersReducedScrollMotion()) {
    setSnapshot({ isEnabled: false, isReady: true });
    return () => undefined;
  }

  scroller?.destroy();
  scroller = createSmoothScroller();
  setSnapshot({ isEnabled: true, isReady: true });

  return () => {
    scroller?.destroy();
    scroller = null;
    setSnapshot({ isEnabled: false, isReady: false });
  };
}

export function scrollToElementById(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) {
    return;
  }

  const shouldReduceMotion = prefersReducedScrollMotion();

  if (!scroller || shouldReduceMotion) {
    scrollToElementNative(element, shouldReduceMotion ? "auto" : "smooth");
    return;
  }

  scroller.scrollTo(getElementTop(element));
}

export function useSmoothScrollStore() {
  const currentSnapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return {
    ...currentSnapshot,
    scrollToSection: scrollToElementById,
  };
}

export function useSmoothScrollController() {
  useEffect(() => {
    return registerSmoothScroll();
  }, []);
}
