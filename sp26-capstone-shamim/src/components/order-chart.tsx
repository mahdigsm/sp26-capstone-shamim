"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", mobile: 140 },
  { month: "February", mobile: 178 },
  { month: "March", mobile: 155 },
  { month: "April", mobile: 214 },
  { month: "May", mobile: 248 },
  { month: "June", mobile: 231 },
  { month: "July", mobile: 270 },
  { month: "Aug", mobile: 302 },
];

const chartConfig = {
  mobile: {
    label: "Mobile",
    color: "#c2410c",
  },
} satisfies ChartConfig;

export function ChartBar() {
  return (
    <ChartContainer config={chartConfig} className="w-full h-[320px]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <YAxis tickLine={false} axisLine={false} tickMargin={10} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />

        <ChartTooltip content={<ChartTooltipContent />} />

        <Bar
          barSize={50}
          dataKey="mobile"
          fill="#c2410c"
          radius={[6, 6, 0, 0]}
        ></Bar>
      </BarChart>
    </ChartContainer>
  );
}
