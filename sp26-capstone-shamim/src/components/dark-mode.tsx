"use client"

import { useTheme } from "next-themes"

export default function TestTheme() {
  const { setTheme } = useTheme()

  return (
    <button onClick={() => setTheme("dark")} className="text-black">
      Dark Mode
    </button>
  )
}