"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Uses CSS variable borders and backgrounds to match the paper styling
    return (
      <div className="h-9 w-9 animate-pulse rounded-lg border border-border-custom bg-background/50" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative rounded-lg border border-border-custom bg-background p-2 text-foreground transition-all duration-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:hover:bg-neutral-900"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-amber-400 transition-all duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-indigo-600 transition-all duration-300" />
      )}
    </button>
  );
}