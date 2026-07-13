import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RevenueChart from "@/components/chart-bar-demo-axis";
import { ChartBar } from "@/components/order-chart";
import { Progress } from "@/components/ui/progress";

export function TabsDemo() {
  return (
    <Tabs defaultValue="Revenue" className="w-full">
      <TabsList
        className="
    grid
    grid-cols-3
    w-full md:w-fit
    h-auto
    bg-Section
    rounded-xl
    p-1
    mb-3
  ">
        <TabsTrigger value="Revenue">Revenue</TabsTrigger>
        <TabsTrigger value="Orders">Orders</TabsTrigger>
        <TabsTrigger value="categories">By Category </TabsTrigger>
      </TabsList>
      <TabsContent value="Revenue">
        <Card className="bg-Section p-7! border border-Secondary">
          <CardHeader>
            <CardTitle className="text-xl pt-2">Revenue Overview</CardTitle>
            <CardDescription className="text-xl mt-2">
              Monthly revenue trend — Jan to Aug 2024
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <RevenueChart />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Orders">
        <Card className="bg-Section text-card-foreground flex flex-col gap-6 rounded-xl p-7! border border-Secondary ">
          <CardHeader>
            <CardTitle className="text-xl">Order Volume</CardTitle>
            <CardDescription className="text-xl mt-2">
              Monthly order count — Jan to Aug 2024
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ChartBar />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="categories">
        <Card className="bg-Section pb-6 border border-Secondary p-7 px-4">
          <CardHeader>
            <CardTitle className="text-xl">Sales by Category</CardTitle>
            <CardDescription className="text-xl mt-2">Product category breakdown</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">E-Books</span>
                <span className="text-graytext">38%</span>
              </div>
              <Progress value={38} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Courses</span>
                <span className="text-graytext">27%</span>
              </div>
              <Progress value={27} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Templates</span>
                <span className="text-graytext">19%</span>
              </div>
              <Progress value={19} />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Software</span>
                <span className="text-graytext">16%</span>
              </div>
              <Progress value={16} />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
