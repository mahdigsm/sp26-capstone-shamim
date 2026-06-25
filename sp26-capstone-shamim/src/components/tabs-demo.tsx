// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import RevenueChart from "@/components/chart-bar-demo-axis";
// import { ChartBar } from "@/components/order-chart";
// export function TabsDemo() {
//   return (
//     <Tabs defaultValue="overview" className="w-full">
//       <TabsList className="">
//         <TabsTrigger value="Revenue">Revenue</TabsTrigger>
//         <TabsTrigger value="Orders">Orders</TabsTrigger>
//         <TabsTrigger value="By Category">By Category</TabsTrigger>
//       </TabsList>
//       <TabsContent value="overview" className="">
//         <Card className="bg-Section p-2 border-3 border-Secondary">
//           <CardHeader>
//             <CardTitle className="pt-6 text-xl">Revenue Overview</CardTitle>
//             <CardDescription className="text-xl">
//               Monthly revenue trend — Jan to Aug 2024
//             </CardDescription>
//             <RevenueChart />
//           </CardHeader>
//           <CardContent className="text-sm text-muted-foreground"></CardContent>
//         </Card>
//       </TabsContent>
//       <TabsContent value="analytics">
//         <Card className="bg-Section p-2 border-3 border-Secondary">
//           <CardHeader>
//             <CardTitle className="pt-6 text-xl">Order Volume</CardTitle>
//             <CardDescription className="text-xl">
//               Monthly order count — Jan to Aug 2024
//             </CardDescription>
//             <ChartBar />
//           </CardHeader>
//           <CardContent className="text-sm text-muted-foreground">
//             Page views are up 25% compared to last month.
//           </CardContent>
//         </Card>
//       </TabsContent>
//       <TabsContent value="By Category">
//         <Card>
//           <CardHeader>
//             <CardTitle>Reports</CardTitle>
//             <CardDescription>
//               Generate and download your detailed reports. Export data in
//               multiple formats for analysis.
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="text-sm text-muted-foreground">
//             You have 5 reports ready and available to export.
//           </CardContent>
//         </Card>
//       </TabsContent>
//       <TabsContent value="settings">
//         <Card>
//           <CardHeader>
//             <CardTitle>Settings</CardTitle>
//             <CardDescription>
//               Manage your account preferences and options. Customize your
//               experience to fit your needs.
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="text-sm text-muted-foreground">
//             Configure notifications, security, and themes.
//           </CardContent>
//         </Card>
//       </TabsContent>
//     </Tabs>
//   );
// }

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
    <Tabs defaultValue="overview" className="w-full">
      <TabsList
        className="
    grid
    grid-cols-3
    w-full md:w-fit
    h-auto
    bg-Section
    rounded-2xl
    p-1
  "
      >
        {" "}
        <TabsTrigger value="Revenue">Revenue</TabsTrigger>
        <TabsTrigger value="Orders">Orders</TabsTrigger>
        <TabsTrigger value="categories">By Category</TabsTrigger>
      </TabsList>
      <TabsContent value="Revenue">
        <Card className="bg-Section p-3 border border-Secondary pt-5">
          <CardHeader>
            <CardTitle className="text-xl">Revenue Overview</CardTitle>
            <CardDescription>
              Monthly revenue trend — Jan to Aug 2024
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <RevenueChart />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Orders">
        <Card className="bg-Section text-card-foreground flex flex-col gap-6 rounded-xl border border-border">
          <CardHeader>
            <CardTitle className="text-lg">Order Volume</CardTitle>
            <CardDescription className="text-base">
              Monthly order count — Jan to Aug 2024
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ChartBar />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="categories">
        <Card className="bg-Section pb-6 border border-Secondary pt-5">
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
            <CardDescription>Product category breakdown</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span>E-Books</span>
                <span>38%</span>
              </div>
              <Progress value={38} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Courses</span>
                <span>27%</span>
              </div>
              <Progress value={27} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Templates</span>
                <span>19%</span>
              </div>
              <Progress value={19} />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Software</span>
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
