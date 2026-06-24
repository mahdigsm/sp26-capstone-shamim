"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
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

export default function RevenueChart() {
  return (
    <div className="rounded-3xl p-6">
      <div className="mt-8 h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
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

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#171717"
              strokeWidth={3}
              dot={false}
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
