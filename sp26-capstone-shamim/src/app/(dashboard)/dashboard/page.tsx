import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CardContent, CardHeader } from "@/components/ui/card";
import {
  DollarSign,
  Download,
  Package,
  ShoppingCart,
  TrendingDown,
  TrendingUp,
  TriangleAlert,
  User,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TabsDemo } from "@/components/tabs-demo";
import { ProductTable } from "@/components/product-table";
import { CalendarDemo } from "@/components/calender-tab";
import { Pagination } from "@/components/ui/pagination";
import { TableDemo } from "@/components/info-table";
function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-primary">
      {/* h,p */}
      <div className="flex items-center mb-5 justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-semi-bold text-2xl">Dashboard</h1>
          <p className="text-graytext">
            Welcome back, Alex.Here`swhat`shappening today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button className=" bg-primary inline-flex items-center h-10 justify-center text-sm text-black  icon-xs rounded-sm border-graytext">
            {/* sonner */}
            <Download />
            Export
          </Button>

          <Button className=" bg-black h-10 inline-flex items-center justify-center text-sm text-white  icon-xs rounded-sm border-graytext">
            {/* dialog */}
            <Package />
            Add Product
          </Button>
        </div>
      </div>
      <div className="mb-6">
        <Alert className=" bg-yellow-50 p-3 rounded-xl border-amber-200">
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle className="text-amber-800">Low stock warning</AlertTitle>
          <AlertDescription className="mb-2 flex flex-col items-start gap-2 text-amber-700">
            Analytics Dashboard Kit has only 15 licenses remaining.
            <button className="underline text-lg hover:no-underline text-amber-700">
              Review inventory →
            </button>
          </AlertDescription>
        </Alert>
      </div>
      {/* 4card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-9">
        <Card className="bg-Section rounded-lg border-2">
          <CardContent>
            {/* hed */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase">
                  Total Revenue
                </p>
                <h3 className="text-2xl mt-2">$ 38,720</h3>
              </div>
              <div className="h-12 w-12 rounded-lg bg-Secondary flex items-center justify-center">
                <DollarSign className="size-5 text-graytext" />
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
        <Card className="bg-Section rounded-lg border-2">
          <CardContent>
            {/* hed */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase">
                  Total Orders
                </p>
                <h3 className="text-2xl mt-2">$302</h3>
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
        <Card className="bg-Section rounded-lg border-2">
          <CardContent>
            {/* hed */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase">
                  Active Products
                </p>
                <h3 className="text-2xl mt-2">$24</h3>
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
        <Card className="bg-Section rounded-lg border-2">
          <CardContent>
            {/* hed */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase">
                  Total Customers
                </p>
                <h3 className="text-2xl mt-2">$6,841</h3>
              </div>
              <div className="h-12 w-12 rounded-lg bg-Secondary flex items-center justify-center">
                <User className="size-5 text-grayicon" />
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
      <TabsDemo />
      <div className="w-full pt-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <ProductTable />
            <div className="w-full pt-8">
              <TableDemo />
            </div>
          </div>

          {/* 
          <Card className="h-250 bg-Section">
            <CardHeader>
              <h2 className="text-xl">Calendar</h2>
              <p className="text-base">Schedule and upcoming events</p>
            </CardHeader>

            <CardContent className="flex justify-center">
              <CalendarDemo />
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
