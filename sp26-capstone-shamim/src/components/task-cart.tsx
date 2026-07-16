"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SquareCheckBig } from "lucide-react";

export default function TasksCard() {
  const [tasks, setTasks] = useState([
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
      completed: true,
    },
    {
      id: 5,
      title: "Review customer refund #8818",
      completed: false,
    },
  ]);

  const completed = tasks.filter((task) => task.completed).length;
  const progress = (completed / tasks.length) * 100;

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  return (
    <Card className="rounded-2xl shadow-sm bg-Section">
      <CardHeader className="pb-5 flex flex-row items-center justify-between">
        <CardTitle className="pt-2 text-sm font-semibold">Tasks</CardTitle>

        <Badge
          variant="secondary"
          className="rounded-sm px-2 py-1 bg-Secondary"
        >
          {completed}/{tasks.length}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        <Progress value={progress} className="h-1.5" />

        <div className="space-y-5">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between">
              <div
                onClick={() => toggleTask(task.id)}
                className="flex items-center gap-3 cursor-pointer select-none"
              >
                <div
                  className={`size-4 rounded border flex items-center justify-center transition-all ${
                    task.completed
                      ? "bg-neutral-900 border-neutral-900"
                      : "bg-Section border-gray-300"
                  }`}
                >
                  {task.completed && (
                    <Check className="h-3.5 w-3.5 text-white" />
                  )}
                </div>

                <p
                  className={`text-sm transition-all ${
                    task.completed
                      ? "line-through text-muted-foreground"
                      : "text-foreground"
                  }`}
                >
                  {task.title}
                </p>
              </div>

              {task.completed && (
                <SquareCheckBig className="h-4 w-4 text-emerald-500" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
