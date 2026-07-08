import React from 'react'
import   {DollarSign,
  Package,
  ShoppingCart,
  TrendingDown,
  TrendingUp,Users} from "lucide-react";
  import {
  Card,
  CardContent,
} from "@/components/ui/card"
export default function CardsText() {
  return (
    <div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-9">
        <Card className="bg-Section rounded-lg border-2 border-Secondary  hover:shadow-lg hover:-translate-y-1 duration-300">
          <CardContent>
            {/* hed */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase">
                  Total Revenue
                </p>
                <h3 className="text-2xl font-semibold mt-2">$ 38,720</h3>
              </div>
              <div className="h-12 w-12 rounded-lg bg-Secondary flex items-center justify-center">
                <DollarSign className="size-5 text-grayicon" />
              </div>
            </div>

            {/* foot */}
            <div className="mt-4 flex items-center gap-2">
              <TrendingUp className="size-4 text-green-600" />
              <span className="text-green-600 text-xs">+14.2%</span>
              <span className="text-xs text-gray-500">vs last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-Section rounded-lg border-2 border-Secondary hover:shadow-lg hover:-translate-y-1 duration-300 ">
          <CardContent>
            {/* hed */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase">
                  Total Orders
                </p>
                <h3 className="text-2xl font-semibold mt-2">$302</h3>
              </div>
              <div className="h-12 w-12 rounded-lg bg-Secondary flex items-center justify-center">
                <ShoppingCart className="size-5 text-grayicon" />
              </div>
            </div>

            {/* foot */}
            <div className="mt-4 flex items-center gap-2">
              <TrendingUp className="size-4 text-green-600" />
              <span className="text-green-600 text-xs">+8.7%</span>
              <span className="text-xs text-gray-500">vs last month</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-Section rounded-lg border-2 border-Secondary  hover:shadow-lg hover:-translate-y-1 duration-300">
          <CardContent>
            {/* hed */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase">
                  Active Products
                </p>
                <h3 className="text-2xl font-semibold mt-2">$24</h3>
              </div>
              <div className="h-12 w-12 rounded-lg bg-Secondary flex items-center justify-center">
                <Package className="size-5 text-grayicon" />
              </div>
            </div>
            {/* foot */}
            <div className="mt-4 flex items-center gap-2">
              <TrendingDown className="size-4 text-red-600" />
              <span className="text-red-600 text-xs">-2</span>
              <span className="text-xs text-gray-500">2 unpublishedh</span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-Section rounded-lg border-2 border-Secondary  hover:shadow-lg hover:-translate-y-1 duration-300">
          <CardContent>
            {/* hed */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase">
                  Total Customers
                </p>
                <h3 className="text-2xl mt-2 font-semibold">$6,841</h3>
              </div>
              <div className="h-12 w-12 rounded-lg bg-Secondary flex items-center justify-center">
                <Users className="size-5 text-grayicon" />
              </div>
            </div>
            {/* foot */}
            <div className="mt-4 flex items-center gap-2">
              <TrendingUp className="size-4 text-green-600" />
              <span className="text-green-600 text-xs">+5.1%</span>
              <span className="text-xs text-gray-500">vs last month</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
