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
     <Card className="bg-Section w-full h-auto border-Secondary border rounded-xl">
      <CardTitle className='mx-6 mt-4'>
          Help & FAQ 
      </CardTitle>
      <CardDescription className='mx-6 text-muted-foreground text-base'>
        Common questions about managing your store 
        </CardDescription>
          <AccordionDemo/>
            </Card>
  )
}
