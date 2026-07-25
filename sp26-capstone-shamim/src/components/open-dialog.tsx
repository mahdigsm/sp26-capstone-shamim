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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function OpenDialog() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="h-9 inline-flex bg-primary! hover:bg-Secondary! items-center justify-center text-sm text-black dark:bg-card-foreground! dark:text-white icon-xs rounded-sm"
          >
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg bg-Section size-120">
          <DialogHeader>
            <DialogTitle className="dark:text-black">
              Add New Product
            </DialogTitle>
            <DialogDescription>
              Fill in the details to create a new digital product listing.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1" className="dark:text-black">
                Product Name
              </Label>
              <Input
                id="name-1"
                name="name"
                defaultValue="e.g. Advanced CSS Animations Course"
                className="rounded-xs dark:text-popover"
              />
            </Field>
            <Field>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="dark:text-black">Category</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="course">Course</SelectItem>
                      <SelectItem value="ebook">E-book</SelectItem>
                      <SelectItem value="template">Template</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price" className="dark:text-black">
                    Price (USD)
                  </Label>

                  <Input
                    id="price"
                    type="number"
                    placeholder="49.00"
                    className="dark:text-black"
                  />
                </div>
              </div>
              <Label htmlFor="username-1" className="dark:text-black">
                Description
              </Label>

              <Input
                id="username-1"
                name="username"
                defaultValue="Brief product description..."
                className="rounded-xs dark:text-popover h-15"
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="dark:bg-white border-popover h-10 rounded-sm dark:text-olive-900"
              >
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="dark:bg-olive-900 h-10 rounded-sm dark:text-white"
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
