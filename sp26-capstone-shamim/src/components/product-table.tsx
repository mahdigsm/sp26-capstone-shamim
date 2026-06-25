import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SelectDemo } from "@/components/select-button";
import { SelectDemo2 } from "@/components/select2-button";
import { CalendarDemo } from "@/components/calender-tab";
import { Checkbox } from "./ui/checkbox";
import { CheckboxDemo } from "@/components/check-box";
import { Ellipse, Ellipsis } from "lucide-react";
import { Button } from "./ui/button";
import { Pagination } from "./ui/pagination";
import { PaginationDemo } from "./pagination";

export function ProductTable() {
  return (
    <Card className="bg-Section pb-6">
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h2 className="text-xl font-semibold">Product Inventory</h2>
            <p>12 products · Page 1 of 3</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <Input
              placeholder="Search products..."
              className="sm:w-64 lg:w-72 bg-Secondary rounded-sm"
            />
            <SelectDemo />
            <SelectDemo2 />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="uppercase">Product</TableHead>
              <TableHead className="uppercase">Category</TableHead>
              <TableHead className="uppercase">Price</TableHead>
              <TableHead className="uppercase">Stock</TableHead>
              <TableHead className="uppercase">Status</TableHead>
              <TableHead className="uppercase">actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=48&h=48&fit=crop&auto=format"
                  alt=""
                />
                <div>
                  <p className="font-bold">UI Design Masterclass</p>
                  <p>PRD-001</p>
                </div>
              </TableCell>
              <TableCell>
                <span className="bg-Secondary rounded-sm px-2 py-1">
                  Course
                </span>
              </TableCell>
              <TableCell className="font-bold">$89.00</TableCell>
              <TableCell>Unlimited</TableCell>
              <TableCell>
                <span className="bg-green-100 px-2 py-1 rounded-3xl border border-green-200 text-green-800">
                  Active
                </span>
              </TableCell>
              <TableCell>
                <Ellipsis className="size-6 justify-center items-center" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=48&h=48&fit=crop&auto=format"
                  alt=""
                />
                <div>
                  <p className="font-bold">React Pro Template Pack</p>
                  <p>PRD-002</p>
                </div>
              </TableCell>
              <TableCell>
                <span className="bg-Secondary rounded-sm px-2 py-1">
                  Template
                </span>
              </TableCell>
              <TableCell className="font-bold">$49.00</TableCell>
              <TableCell>Unlimited</TableCell>
              <TableCell>
                <span className="bg-green-100 px-2 py-1 rounded-3xl border border-green-200 text-green-800">
                  Active
                </span>
              </TableCell>
              <TableCell>
                <Ellipsis className="size-6 justify-center items-center" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=48&h=48&fit=crop&auto=format"
                  alt=""
                />
                <div>
                  <p className="font-bold">Python for Data Science E-Book</p>
                  <p>PRD-003</p>
                </div>
              </TableCell>
              <TableCell>
                <span className="bg-Secondary rounded-sm px-2 py-1">
                  E-Book
                </span>
              </TableCell>
              <TableCell className="font-bold">$29.99</TableCell>
              <TableCell>Unlimited</TableCell>
              <TableCell>
                <span className="bg-green-100 px-2 py-1 rounded-3xl border border-green-200 text-green-800">
                  Active
                </span>
              </TableCell>
              <TableCell>
                <Ellipsis className="size-6 justify-center items-center" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=48&h=48&fit=crop&auto=format"
                  alt=""
                />{" "}
                <div>
                  <p className="font-bold">Analytics Dashboard Kit</p>
                  <p>PRD-004</p>
                </div>
              </TableCell>
              <TableCell>
                <span className="bg-Secondary rounded-sm px-2 py-1">
                  Template
                </span>
              </TableCell>
              <TableCell className="font-bold">$79.00</TableCell>
              <TableCell>15</TableCell>
              <TableCell>
                <span className="bg-yellow-100 px-2 py-1 rounded-3xl border border-yellow-200 text-amber-800">
                  Low Stock
                </span>
              </TableCell>
              <TableCell>
                <Ellipsis className="size-6 justify-center items-center" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="mt-4 flex items-center justify-between pb-8 pt-3">
          <span className="text-sm text-muted-foreground">
            Showing 1–4 of 12
          </span>
          <div className="flex justify-end">
            <PaginationDemo />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
