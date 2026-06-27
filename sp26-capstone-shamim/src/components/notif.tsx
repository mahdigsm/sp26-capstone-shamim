"use client";

import { CheckCircle2, Clock3, TriangleAlert, CircleX } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
const notifications = [
  {
    id: 1,
    icon: CheckCircle2,
    color: "text-green-500",
    title: "Order #8821 completed successfully",
    time: "2m ago",
  },
  {
    id: 2,
    icon: Clock3,
    color: "text-blue-500",
    title: "Order #8820 is being processed",
    time: "15m ago",
  },
  {
    id: 3,
    icon: TriangleAlert,
    color: "text-orange-500",
    title: "Low stock: Dashboard Kit (15 left)",
    time: "1h ago",
  },
  {
    id: 4,
    icon: CircleX,
    color: "text-red-500",
    title: "Refund requested for #8818",
    time: "3h ago",
  },
];

export default function NotificationsCard() {
  return (
    <Card className="rounded-xl bg-Section">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">
            Notifications
          </CardTitle>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Enable</span>

            <Switch defaultChecked />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        {notifications.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="flex gap-3">
              <Icon size={18} className={`${item.color} mt-1 shrink-0`} />

              <div>
                <p className="text-sm">{item.title}</p>

                <span className="text-xs text-muted-foreground">
                  {item.time}
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
