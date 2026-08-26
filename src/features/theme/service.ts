import type { ThemeMode, ThemeSnapshot } from "./types";

const STORAGE_KEY = "portfolio-theme";
const DARK_CLASS = "dark";

export function getPreferredThemeMode(): ThemeMode {
  // Automatic theme detection is intentionally disabled. Manual theme changes
  // can still use applyThemeMode and persistThemeMode when re-enabled.
  return "light";
}

export function applyThemeMode(mode: ThemeMode) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.classList.toggle(DARK_CLASS, mode === "dark");
  document.documentElement.style.colorScheme = mode;
}

export function persistThemeMode(mode: ThemeMode) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, mode);
}

export function createThemeSnapshot(mode: ThemeMode): ThemeSnapshot {
  const isDark = mode === "dark";

  return {
    mode,
    label: isDark ? "Dark mode" : "Light mode",
    nextLabel: isDark ? "Switch to light mode" : "Switch to dark mode",
    isDark,
  };
}
