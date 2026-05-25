export type ThemeMode = "light" | "dark";

export interface ThemeSnapshot {
  mode: ThemeMode;
  label: string;
  nextLabel: string;
  isDark: boolean;
}
