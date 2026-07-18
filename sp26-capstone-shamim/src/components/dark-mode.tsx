"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function TestTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 hover:bg-accent"
    >
      darkmode
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
