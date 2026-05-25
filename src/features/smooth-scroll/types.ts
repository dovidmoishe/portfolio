export interface SmoothScrollConfig {
  damping: number;
  stopThreshold: number;
}

export interface SmoothScrollSnapshot {
  isEnabled: boolean;
  isReady: boolean;
}

export interface SmoothScroller {
  destroy: () => void;
  scrollTo: (targetY: number) => void;
}
