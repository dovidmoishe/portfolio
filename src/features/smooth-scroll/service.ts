import type { SmoothScrollConfig, SmoothScroller } from "./types";

const DEFAULT_CONFIG: SmoothScrollConfig = {
  damping: 0.14,
  stopThreshold: 0.35,
};

const ANCHOR_OFFSET = 96;
let cachedConfig: SmoothScrollConfig | null = null;

export function getSmoothScrollConfig(): SmoothScrollConfig {
  cachedConfig ??= DEFAULT_CONFIG;
  return cachedConfig;
}

export function prefersReducedScrollMotion() {
  if (typeof window === "undefined") {
    return true;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getElementTop(element: HTMLElement) {
  return element.getBoundingClientRect().top + window.scrollY - ANCHOR_OFFSET;
}

export function scrollToElementNative(
  element: HTMLElement,
  behavior: ScrollBehavior = "smooth",
) {
  element.scrollIntoView({ behavior, block: "start" });
}

export function createSmoothScroller(
  config = getSmoothScrollConfig(),
): SmoothScroller {
  let currentY = window.scrollY;
  let targetY = currentY;
  let frameId = 0;

  const getScrollLimit = () =>
    Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

  const clampTarget = (value: number) =>
    Math.min(Math.max(value, 0), getScrollLimit());

  const stop = () => {
    if (frameId) {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
    }
  };

  const tick = () => {
    currentY += (targetY - currentY) * config.damping;

    if (Math.abs(targetY - currentY) <= config.stopThreshold) {
      currentY = targetY;
      window.scrollTo(0, currentY);
      frameId = 0;
      return;
    }

    window.scrollTo(0, currentY);
    frameId = window.requestAnimationFrame(tick);
  };

  const start = () => {
    if (!frameId) {
      frameId = window.requestAnimationFrame(tick);
    }
  };

  const syncPosition = () => {
    if (!frameId) {
      currentY = window.scrollY;
      targetY = currentY;
    }
  };

  window.addEventListener("resize", syncPosition);

  return {
    destroy: () => {
      stop();
      window.removeEventListener("resize", syncPosition);
    },
    scrollTo: (target: number) => {
      currentY = window.scrollY;
      targetY = clampTarget(target);
      start();
    },
  };
}
