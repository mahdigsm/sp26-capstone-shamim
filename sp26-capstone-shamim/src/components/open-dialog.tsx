import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function OpenDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="dark:bg-card-foreground dark:text-white bg-primary h-9 inline-flex items-center justify-center text-sm text-black rounded-sm hover:bg-Section duration-200 hover:shadow"
          >
            Open Dialog
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-sm bg-primary h-120 w-250">
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogDescription>
              Fill in the details to create a new digital product listing.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Product Name</Label>
              <Input
                id="name-1"
                name="name"
                defaultValue="e.g. Advanced CSS Animations Course"
              />
            </Field>
            <Field>
              <Label htmlFor="username-1">Description</Label>
              <Input
                id="username-1"
                name="username"
                defaultValue="Brief product description..."
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
