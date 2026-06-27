"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

const tasks = [
  {
    id: 1,
    title: "Review new product submissions",
    completed: true,
  },
  {
    id: 2,
    title: "Update pricing for Q3 bundles",
    completed: true,
  },
  {
    id: 3,
    title: "Respond to affiliate requests",
    completed: false,
  },
  {
    id: 4,
    title: "Export August sales report",
    completed: false,
  },
  {
    id: 5,
    title: "Review customer refund #8818",
    completed: false,
  },
];

export default function TasksCard() {
  const done = tasks.filter((t) => t.completed).length;

  return (
    <Card className="rounded-xl bg-Section">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold">Tasks</CardTitle>

          <span className="rounded bg-muted px-2 py-0.5 text-xs">
            {done}/{tasks.length}
          </span>
        </div>

        <Progress value={(done / tasks.length) * 100} className="h-2 mt-3" />
      </CardHeader>

      <CardContent className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Checkbox checked={task.completed} />

              <span
                className={`text-sm ${
                  task.completed ? "line-through text-muted-foreground" : ""
                }`}
              >
                {task.title}
              </span>
            </div>

            {task.completed && (
              <span className="text-green-500 text-xs">✓</span>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
