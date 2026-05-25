"use client";

import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useThemeStore } from "@/features/theme/store";

interface ThemeToggleProps {
  mobile?: boolean;
}

export default function ThemeToggle({ mobile = false }: ThemeToggleProps) {
  const { isDark, nextLabel, toggleTheme } = useThemeStore();
  const Icon = isDark ? FaSun : FaMoon;

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.94 }}
      onClick={toggleTheme}
      aria-label={nextLabel}
      aria-pressed={isDark}
      title={nextLabel}
      className={
        mobile
          ? "inline-flex min-h-12 min-w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors duration-200 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          : "inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.04] text-foreground transition-colors duration-200 hover:bg-foreground/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      }
    >
      <Icon size={mobile ? 20 : 16} aria-hidden="true" />
    </motion.button>
  );
}
