import React from 'react'
import {Card,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,}   from "@/components/ui/card";
import { AccordionDemo } from './accordion-basic';
export default function HelpFaq() {
  return (
     <Card className="bg-Section w-full h-110 border-Secondary border rounded-xl">
      <CardTitle>
        
      </CardTitle>
      <CardDescription>
          <AccordionDemo/>
        </CardDescription>
            </Card>
  )
}
