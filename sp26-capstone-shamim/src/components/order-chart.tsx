"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "next-themes";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", order: 140 },
  { month: "February", order: 178 },
  { month: "March", order: 155 },
  { month: "April", order: 214 },
  { month: "May", order: 248 },
  { month: "June", order: 231 },
  { month: "July", order: 270 },
  { month: "Aug", order: 302 },
];

const chartConfig = {
  order: {
    // label: "order",
  },
} satisfies ChartConfig;

export function ChartBar() {
  const { resolvedTheme } = useTheme();
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
        <ChartTooltip
          cursor={{
            fill: "#ffffff",
            fillOpacity: 0.12,
          }}
          content={<ChartTooltipContent />}
        />

        <Bar
          dataKey="order"
          fill="#f97316"
          radius={[6, 6, 0, 0]}
          barSize={50}
        />
      </BarChart>
    </ChartContainer>
  );
}
