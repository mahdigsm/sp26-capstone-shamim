"use client";

import { useMemo, useState } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { Search, MoreHorizontal, Funnel } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { SelectDemo } from "@/components/select-button";
import { SelectDemo2 } from "@/components/select2-button";
import { Checkbox } from "@/components/ui/checkbox";
const products = [
  {
    id: "PRD-001",
    name: "UI Design Masterclass",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=80",
    category: "Course",
    price: 89,
    stock: "Unlimited",
    status: "Active",
  },

  {
    id: "PRD-002",
    name: "React Pro Template Pack",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=80",
    category: "Template",
    price: 49,
    stock: "Unlimited",
    status: "Active",
  },

  {
    id: "PRD-003",
    name: "Python for Data Science",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=80",
    category: "E-Book",
    price: 29.99,
    stock: "Unlimited",
    status: "Active",
  },

  {
    id: "PRD-004",
    name: "Analytics Dashboard Kit",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80",
    category: "Template",
    price: 79,
    stock: "15",
    status: "Low Stock",
  },

  {
    id: "PRD-005",
    name: "Advanced TypeScript",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=80",
    category: "Course",
    price: 119,
    stock: "Unlimited",
    status: "Draft",
  },

  {
    id: "PRD-006",
    name: "DevOps Essentials",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=80",
    category: "E-Book",
    price: 24.99,
    stock: "Unlimited",
    status: "Inactive",
  },

  {
    id: "PRD-007",
    name: "Figma Component Library",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=80",
    category: "Template",
    price: 59,
    stock: "Unlimited",
    status: "Active",
  },

  {
    id: "PRD-008",
    name: "Node.js API Starter",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=80",
    category: "Template",
    price: 39,
    stock: "Unlimited",
    status: "Active",
  },

  {
    id: "PRD-009",
    name: "Business Analytics",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=80",
    category: "E-Book",
    price: 19.99,
    stock: "Unlimited",
    status: "Active",
  },

  {
    id: "PRD-010",
    name: "Mobile UX Design",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=80",
    category: "Course",
    price: 99,
    stock: "Unlimited",
    status: "Active",
  },

  {
    id: "PRD-011",
    name: "GraphQL Mastery",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=80",
    category: "Course",
    price: 89,
    stock: "Unlimited",
    status: "Draft",
  },

  {
    id: "PRD-012",
    name: "Tailwind CSS Cheat Sheet",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=80",
    category: "E-Book",
    price: 14.99,
    stock: "Unlimited",
    status: "Active",
  },
];
export function ProductTable() {
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [status, setStatus] = useState("All");
  const [selected, setSelected] = useState<string[]>([]);

  const perPage = 4;
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = category === "All" || product.category === category;

      const matchStatus = status === "All" || product.status === status;

      return matchSearch && matchCategory && matchStatus;
    });
  }, [search, category, status]);
  const totalPages = Math.ceil(filteredProducts.length / perPage);

  const currentProducts = filteredProducts.slice(
    (page - 1) * perPage,

    page * perPage,
  );
  const allSelected =
    currentProducts.length > 0 &&
    currentProducts.every((p) => selected.includes(p.id));

  const toggleAll = (checked: boolean) => {
    if (checked) {
      setSelected(currentProducts.map((p) => p.id));
    } else {
      setSelected([]);
    }
  };

  const toggleOne = (id: string, checked: boolean) => {
    if (checked) {
      setSelected((prev) => [...prev, id]);
    } else {
      setSelected((prev) => prev.filter((item) => item !== id));
    }
  };
  return (
    <Card className="bg-Section rounded-base dark:bg-background">
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-base font-semibold mt-3">Product Inventory</h2>

            <p className="text-muted-foreground">
              {filteredProducts.length} Products · Page {page} of {totalPages}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <Funnel className="absolute left-3 top-3 size-4 text-muted-foreground" />

              <Input
                placeholder="Search products..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);

                  setPage(1);
                }}
                className="pl-9 w-72 w-full md:w-64 bg-Secondary rounded"
              />
            </div>

            <SelectDemo />

            <SelectDemo2 />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10">
                    <Checkbox
                      checked={allSelected}
                      className="bg-Section border shadow-xl"
                      onCheckedChange={(checked) => toggleAll(!!checked)}
                    />
                  </TableHead>

                  <TableHead>Product</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentProducts.map((product) => (
                  <TableRow key={product.id} className="border-b">
                    <TableCell className="w-10">
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-12 w-12 rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                        />

                        <div>
                          <p className="font-semibold">{product.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {product.id}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>
                      <span className="rounded-md bg-secondary px-2 py-1 text-xs">
                        {product.category}
                      </span>
                    </TableCell>

                    <TableCell className="font-semibold">
                      ${product.price}
                    </TableCell>

                    <TableCell>{product.stock}</TableCell>

                    <TableCell>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium border
          ${
            product.status === "Active"
              ? "bg-green-100 border-green-200 text-green-700"
              : product.status === "Low Stock"
                ? "bg-yellow-100 border-yellow-200 text-yellow-700"
                : product.status === "Draft"
                  ? "bg-orange-100 border-orange-200 text-orange-700"
                  : "bg-gray-100 border-gray-300 text-gray-700"
          }`}
                      >
                        {product.status}
                      </span>
                    </TableCell>

                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between border-t pt-4">
              <p className="text-sm text-muted-foreground">
                Showing {(page - 1) * perPage + 1}–
                {Math.min(page * perPage, filteredProducts.length)} of{" "}
                {filteredProducts.length}
              </p>

              {selected.length > 0 && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">
                    {selected.length} selected
                  </span>

                  <Button
                    variant="link"
                    className="p-0 h-auto"
                    onClick={() => setSelected([])}
                  >
                    Clear
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 border-t pt-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>
              Showing {(page - 1) * perPage + 1}–
              {Math.min(page * perPage, filteredProducts.length)} of{" "}
              {filteredProducts.length}
            </span>

            <span className="font-medium text-foreground">2 selected</span>

            <button className="text-muted-foreground hover:text-foreground underline underline-offset-4">
              Clear
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage(1)}
              disabled={page === 1}
            >
              «
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              ‹
            </Button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                variant={page === i + 1 ? "default" : "outline"}
                size="icon"
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              ›
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage(totalPages)}
              disabled={page === totalPages}
            >
              »
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
