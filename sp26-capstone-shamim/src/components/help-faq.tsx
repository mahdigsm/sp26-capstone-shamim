import React from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { AccordionDemo } from "./accordion-basic";
export default function HelpFaq() {
  return (
    <Card className="bg-Section w-full h-auto border-Secondary rounded-xl dark:bg-foreground dark:border-card-foreground border">
      <CardTitle className="mx-6 mt-4 dark:text-input text-lg">
        Help & FAQ
      </CardTitle>
      <CardDescription className="mx-6 text-muted-foreground dark:text-popover text-lg">
        Common questions about managing your store
      </CardDescription>
      <AccordionDemo />
    </Card>
  );
}
