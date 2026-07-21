"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OpenDialog from "@/components/open-dialog";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Info } from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Textarea } from "./ui/textarea";

export default function Interactive() {
  return (
    <Card className="dark:bg-foreground bg-Section w-full h-auto border-Secondary rounded-xl dark:border-card-foreground border0">
      <CardHeader>
        <CardTitle>
          <h1 className="dark:text-input">Interactive Components</h1>
        </CardTitle>
        <CardDescription>
          <p className="mt-2 text-base dark:text-popover font-light">
            Dialog, Drawer, and Toast showcase
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 mt-2">
        <div className="flex flex-wrap gap-4">
          <OpenDialog />
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                className=" bg-primary h-9 inline-flex items-center justify-center text-sm text-black rounded-sm dark:bg-card-foreground dark:text-white hover:bg-Section duration-200 hover:shadow"
              >
                Open Drawer
              </Button>
            </DrawerTrigger>

            <DrawerContent className="m-0!">
              <div className="mx-auto w-full pl-3 h-auto bg-Section">
                <DrawerHeader className="px-0">
                  <DrawerTitle className="grid justify-items-start text-xl! pt-0!">
                    Order Details — #ORD-8821
                  </DrawerTitle>
                  <DrawerDescription className="text-base! grid justify-items-start">
                    Full order information and customer details
                  </DrawerDescription>
                </DrawerHeader>

                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-muted-foreground">Customer</p>
                      <p className="font-sans text-base">Sarah Mitchell</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Amount</p>
                      <p className="font-sans text-base">$89.00</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-sans text-base">Aug 14, 2024</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-muted-foreground">Product</p>
                      <p className="font-sans text-base">
                        UI Design Masterclass
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-sans text-base">Completed</p>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">Order ID</p>
                      <p className="font-sans text-base">#ORD-8821</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-popover pt-4">
                  <p className="mb-2 text-sm text-muted-foreground">
                    Internal Note
                  </p>

                  <Textarea placeholder="Add a note about this order..." />
                </div>

                <DrawerFooter className="px-0">
                  <Button className="bg-olive-900 transition-all duration-150 hover:opacity-90 hover:scale-[1.02] hover:bg-primary/90 border border-Secondary h-10! rounded-sm! hover:opacity-20!">
                    Save Note
                  </Button>

                  <DrawerClose asChild>
                    <Button
                      variant="outline"
                      className="border border-Secondary h-10! rounded-sm! hover:not-focus:bg-Section!"
                    >
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
          <Button
            className=" bg-primary h-9 inline-flex items-center justify-center text-sm text-black rounded-sm dark:bg-card-foreground dark:text-white hover:bg-Section duration-200 hover:shadow"
            variant="outline"
            onClick={() =>
              toast.success("Success", {
                description: "Changes saved successfully!",
                className:
                  "border! border-green-500! border-l-5! border-l-green-500 rounded-xl! bg-white! shadow-md! dark:bg-card!",
              })
            }
          >
            ✓ Success
          </Button>
          <Button
            className=" bg-primary h-9 inline-flex items-center justify-center text-sm text-black rounded-sm hover:bg-Section duration-200 hover:shadow dark:bg-card-foreground dark:text-white"
            variant="outline"
            onClick={() =>
              toast.warning("Warning", {
                description: "Your session expires in 10 minutes.",
                className:
                  "border border-yellow-300 border-l-5 border-l-yellow-300 rounded-xl bg-white shadow-md dark:bg-card! border-yellow-300! border-l-5! border-l-yellow-300!",
              })
            }
          >
            ⚠ Warning
          </Button>
          <Button
            className="bg-primary h-9 inline-flex items-center justify-center text-sm text-black rounded-sm hover:bg-Section duration-200 hover:shadow dark:bg-card-foreground dark:text-white"
            variant="outline"
            onClick={() =>
              toast.error(" Error", {
                description: "Failed to upload file. Try again.",
                className:
                  "border border-red-200 border-l-5 border-l-red-500 rounded-xl bg-white shadow-md dark:bg-card! border-red-500! border-l-5! border-l-red-500!",
              })
            }
          >
            ✗ Error
          </Button>
        </div>
        <Alert className="w-full rounded-2xl border  bg-Section px-4 py-4 flex items-start gap-3 dark:bg-card">
          <Info className="h-5 w-5 text-green-600 mt-0.5 dark:text-popover" />

          <div className="flex-1">
            <AlertTitle className="text-sm font-semibold text-black border-input dark:text-white">
              Tip
            </AlertTitle>

            <AlertDescription className="mt-1 text-sm text-muted-foreground leading-6 dark:text-popover">
              Click any "…" button in the product table to see contextual
              actions with toast feedback.
            </AlertDescription>
          </div>
        </Alert>
      </CardContent>
    </Card>
  );
}
