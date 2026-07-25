"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import RevenueChart from "@/components/chart-bar-demo-axis";
import { ChartBar } from "@/components/order-chart";
import { Progress } from "@/components/ui/progress";

export function TabsDemo() {
  return (
    <Tabs defaultValue="Revenue" className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <TabsList
          className="
            grid
            grid-cols-3
            w-fit
            bg-Section
            dark:bg-card-foreground
            rounded-xl
            p-1
          "
        >
          <TabsTrigger value="Revenue">Revenue</TabsTrigger>
          <TabsTrigger value="Orders">Orders</TabsTrigger>
          <TabsTrigger value="categories">By Category</TabsTrigger>
        </TabsList>

        <Select defaultValue="8m">
          <SelectTrigger className="w-[150px] bg-Secondary h-10! dark:bg-foreground border-graytext">
            <SelectValue />
          </SelectTrigger>

          <SelectContent className="bg-primary flex items-center justify-center">
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="3m">Last 3 months</SelectItem>
            <SelectItem value="8m">Last 8 months</SelectItem>
            <SelectItem value="1y">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Revenue */}
      <TabsContent value="Revenue">
        <Card className="bg-Section border border-Secondary dark:border-secondary dark:bg-card rounded-xl h-[480px]">
          <CardHeader>
            <CardTitle className="text-xl">Revenue Overview</CardTitle>

            <CardDescription className="text-base dark:text-chart-1">
              Monthly revenue trend — Jan to Aug 2024
            </CardDescription>
          </CardHeader>

          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>
      </TabsContent>

      {/* Orders */}
      <TabsContent value="Orders">
        <Card className="bg-Section dark:bg-card border border-Secondary dark:border-secondary rounded-xl h-[480px]">
          <CardHeader>
            <CardTitle className="text-xl">Order Volume</CardTitle>

            <CardDescription className="text-base dark:text-chart-1">
              Monthly order count — Jan to Aug 2024
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ChartBar />
          </CardContent>
        </Card>
      </TabsContent>

      {/* Categories */}
      <TabsContent value="categories">
        <Card className="bg-Section dark:bg-card border border-Secondary dark:border-secondary rounded-xl h-[380px]">
          <CardHeader>
            <CardTitle className="text-xl">Sales by Category</CardTitle>

            <CardDescription className="text-base dark:text-chart-1">
              Product category breakdown
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 h-auto">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">E-Books</span>
                <span>38%</span>
              </div>
              <Progress value={38} />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Courses</span>
                <span>27%</span>
              </div>
              <Progress value={27} />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Templates</span>
                <span>19%</span>
              </div>
              <Progress value={19} />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Software</span>
                <span>16%</span>
              </div>
              <Progress value={16} />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
