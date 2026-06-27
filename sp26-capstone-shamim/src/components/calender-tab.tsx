"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Card className="rounded-xl w-full bg-Section">
      <CardHeader className="items-center text-left">
        <CardTitle className="">Calendar</CardTitle>

        <CardDescription>Schedule and upcoming events</CardDescription>
      </CardHeader>

      <CardContent className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md"
        />
      </CardContent>
    </Card>
  );
}
