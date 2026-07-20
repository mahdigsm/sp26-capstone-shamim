"use client";

import { toast } from "sonner";

export function SonnerAlert() {
  return (
    <button
      type="button"
      onClick={() =>
        toast.info("Info", {
          description: "Navigating to inventory management…",
          className:
            "w-[360px] min-h-[88px] px-4 py-3 font-bold bg-Section! border-blue-500! border-0.5! border-l-6! dark:bg-foreground!",
          descriptionClassName: "text-sm text-gray-600 mt-1",
        })
      }
      className="mt-1 inline-flex items-center text-base font-medium text-amber-700 dark:text-yellow-500 underline underline-offset-4 transition hover:no-underline focus:outline-none"
    >
      Review inventory →
    </button>
  );
}
