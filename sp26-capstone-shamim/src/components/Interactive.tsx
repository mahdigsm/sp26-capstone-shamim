"use client"
import React from 'react'
import {Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,}   from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OpenDialog from '@/components/open-dialog';
import {   Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription, } from '@/components/ui/drawer';
import {Info} from "lucide-react";
import { toast } from 'sonner';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function Interactive() {
  return (
    
        <Card className="bg-Section w-full h-110 border-Secondary border rounded-xl">
            <CardHeader>
                <CardTitle>
                    <h1>
                        Interactive Components
                    </h1>
                    </CardTitle>
                    <CardDescription>
                        <p className='mt-2 text-lg font-light'>
                        Dialog, Drawer, and Toast showcase
                    </p>
                    </CardDescription>
                    
                
            </CardHeader>
            <CardContent className="space-y-4 mt-2">
                 <div className="flex flex-wrap gap-3">
                    <OpenDialog/>
    <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline" className=' text-black rounded-sm hover:bg-Section duration-200 hover:shadow bg-primary'>Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-md p-6">
                <DrawerHeader className="px-0">
                  <DrawerTitle>Quick Actions</DrawerTitle>
                  <DrawerDescription>
                    Manage shortcuts and actions from here.
                  </DrawerDescription>
                </DrawerHeader>
              </div>
            </DrawerContent>
          </Drawer>
     <Button
     className=" bg-primary h-9 inline-flex items-center justify-center text-sm text-black rounded-sm hover:bg-Section duration-200 hover:shadow"
            variant="outline"
            onClick={() =>
              toast.success("Success", {
                description: "Changes saved successfully!",
                className:
            "!border !border-green-500 !border-l-5 !border-l-green-500 !rounded-xl !bg-white !shadow-md"
              })
            }
          >
            ✓ Success
          </Button>
          <Button
          className=" bg-primary h-9 inline-flex items-center justify-center text-sm text-black rounded-sm hover:bg-Section duration-200 hover:shadow"
        variant="outline"
        onClick={() =>
          toast.warning("Warning", {
                description: "Your session expires in 10 minutes.",
                className:
            "!border !border-yellow-300 !border-l-5 !border-l-yellow-300 !rounded-xl !bg-white !shadow-md"
              })
        }
      >
        ⚠ Warning
      </Button>
    <Button
    className=" bg-primary h-9 inline-flex items-center justify-center text-sm text-black rounded-sm hover:bg-Section duration-200 hover:shadow"
        variant="outline"
        onClick={() => toast.error(" Error", {
                description: "Failed to upload file. Try again.",
                className:
            "!border !border-red-200 !border-l-5 !border-l-red-500 !rounded-xl !bg-white !shadow-md",
              })}
      >
        ✗ Error
      </Button>
  </div>
      <Alert className="w-full rounded-2xl border  bg-Section px-4 py-4 flex items-start gap-3">
  <Info className="h-5 w-5 text-green-600 mt-0.5" />

  <div className="flex-1">
    <AlertTitle className="text-sm font-semibold text-black">
      Tip
    </AlertTitle>

    <AlertDescription className="mt-1 text-sm text-muted-foreground leading-6">
      Click any "…" button in the product table to see contextual actions with toast feedback.
    </AlertDescription>
  </div>
</Alert>
            </CardContent>

            </Card>
  )
}
