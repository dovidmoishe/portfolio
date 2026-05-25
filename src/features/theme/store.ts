"use client";

import { useEffect, useSyncExternalStore } from "react";
import {
  applyThemeMode,
  createThemeSnapshot,
  getPreferredThemeMode,
  persistThemeMode,
} from "./service";
import type { ThemeMode, ThemeSnapshot } from "./types";

let cachedMode: ThemeMode = "light";
let cachedSnapshot: ThemeSnapshot = createThemeSnapshot(cachedMode);
const serverSnapshot: ThemeSnapshot = createThemeSnapshot("light");
let hasHydratedTheme = false;
const listeners = new Set<() => void>();

function emitThemeChange() {
  listeners.forEach((listener) => listener());
}

function setThemeMode(mode: ThemeMode) {
  cachedMode = mode;
  cachedSnapshot = createThemeSnapshot(mode);
  applyThemeMode(mode);
  persistThemeMode(mode);
  emitThemeChange();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): ThemeSnapshot {
  return cachedSnapshot;
}

function getServerSnapshot(): ThemeSnapshot {
  return serverSnapshot;
}

export function useThemeStore() {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    if (hasHydratedTheme) {
      return;
    }

    hasHydratedTheme = true;
    const preferredMode = getPreferredThemeMode();
    cachedMode = preferredMode;
    cachedSnapshot = createThemeSnapshot(preferredMode);
    applyThemeMode(preferredMode);
    emitThemeChange();
  }, []);

  return {
    ...snapshot,
    toggleTheme: () => setThemeMode(snapshot.isDark ? "light" : "dark"),
    setThemeMode,
  };
}
