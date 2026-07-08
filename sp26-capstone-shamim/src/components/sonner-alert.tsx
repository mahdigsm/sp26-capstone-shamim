"use client";

import { toast } from "sonner";

export function SonnerAlert() {
  return (
    <button
      type="button"
      onClick={() =>
        toast.info("Info", {
          description: "Navigating to inventory management…", 
          className: "w-[360px] min-h-[88px] px-4 py-3 font-bold",
          descriptionClassName: "text-sm text-gray-600 mt-1",
        })
      }
      className="mt-1 inline-flex items-center text-lg font-medium text-amber-700 underline underline-offset-4 transition hover:no-underline focus:outline-none"
    >
      Review inventory →
    </button>
  );
}