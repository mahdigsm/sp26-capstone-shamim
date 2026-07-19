"use client";
import { useTheme } from "next-themes";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 19000 },
  { month: "Feb", revenue: 22000 },
  { month: "Mar", revenue: 20000 },
  { month: "Apr", revenue: 28000 },
  { month: "May", revenue: 31000 },
  { month: "Jun", revenue: 29000 },
  { month: "Jul", revenue: 35000 },
  { month: "Aug", revenue: 39500 },
];

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-2xl border border-[#e7ddd3] dark:border-secondary bg-[#f8f2eb] dark:bg-card-foreground px-4 py-3 shadow-md">
      <p className="mb-2 text-sm font-medium text-black dark:text-input">
        {label}
      </p>
      <p className="text-sm text-black dark:text-input">
        Revenue : ${payload[0].value.toLocaleString()}
      </p>
    </div>
  );
}

export default function RevenueChart() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="rounded-3xl p-4">
      <div className="mt-8 h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              stroke="rgba(120,113,108,0.15)"
              strokeDasharray="3 3"
              vertical={true}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#78716c", fontSize: 15 }}
            />

            <YAxis
              tickFormatter={(value) => `$${value / 1000}k`}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#78716c", fontSize: 15 }}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#d6ccc2", strokeWidth: 1 }}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke={resolvedTheme === "dark" ? "#ffffff" : "#171717"}
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 5,
                strokeWidth: 2,
                fill: resolvedTheme === "dark" ? "#ffffff" : "#171717",
                stroke: resolvedTheme === "dark" ? "#444" : "#ffffff",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
