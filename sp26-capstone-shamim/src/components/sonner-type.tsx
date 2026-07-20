"use client";

import { toast } from "sonner";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SonnerType() {
  return (
    <Button
      variant="outline"
      className="w-fit dark:text-input dark:bg-foreground bg-primary inline-flex items-center h-8 justify-center text-sm text-black  icon-xs rounded-sm border-graytext"
      onClick={() =>
        toast.success("Success", {
          description: "Report exported to CSV successfully",
          className:
            "!border !border-green-500 !border-l-5 !border-l-green-500 !rounded-xl !bg-white !shadow-md dark:bg-blue-500 dark:bg-foreground!",
        })
      }
    >
      <Download />
      Export
    </Button>
  );
}
