"use client"

import { toast } from "sonner"
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button"

export function SonnerType() {
  return (
 <Button
        variant="outline"
className="w-fit bg-primary inline-flex items-center h-10 justify-center text-sm text-black  icon-xs rounded-sm border-graytext"
        onClick={() => toast.success(
           "Success",  {
          description: "Report exported to CSV successfully",
           }
             )}
      >
        <Download/>
        Export
        
      </Button>
  )
}

