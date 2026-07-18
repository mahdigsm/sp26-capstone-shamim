"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Interactive from "@/components/Interactive";
import { TriangleAlert } from "lucide-react";
import { TabsDemo } from "@/components/tabs-demo";
import { ProductTable } from "@/components/product-table";
import { CalendarDemo } from "@/components/calender-tab";
import { TableDemo } from "@/components/info-table";
import TasksCard from "@/components/task-cart";
import NotificationsCard from "@/components/notif";
import { SonnerType } from "@/components/sonner-type";
import { DialogDemo } from "@/components/dialog-button";
import CardsText from "@/components/Cards-text";
import HelpFaq from "@/components/help-faq";
import { SonnerAlert } from "@/components/sonner-alert";
import { Card } from "@/components/ui/card";
import TestTheme from "@/components/dark-mode";
function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-primary dark:bg-background">
      {/* h,p */}
      <div className="flex items-center mb-5 justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-bold  text-2xl">Dashboard</h1>
          <p className="text-graytext text-sm mt-2">
            Welcome back, Alex.Here`swhat`shappening today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div>
            {" "}
            <SonnerType />
          </div>
          <DialogDemo />
        </div>
      </div>
      <div className="mb-6">
        <Alert className=" bg-yellow-50 p-3 rounded-xl border-amber-200 dark:bg-amber-950 dark:border-amber-800">
          <TriangleAlert className="h-4 w-4" />
          <AlertTitle className="text-amber-800">Low stock warning</AlertTitle>
          <AlertDescription className="mb-2 flex flex-col items-start gap-2 text-amber-700">
            Analytics Dashboard Kit has only 15 licenses remaining
            <SonnerAlert />
          </AlertDescription>
        </Alert>
      </div>
      {/* 4card */}
      <CardsText />
      <TabsDemo />
      <div className="w-full pt-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <ProductTable />
            <div className="w-full pt-8">
              <TableDemo />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-center bg-section">
              <CalendarDemo />
            </div>
            <TasksCard />
            <NotificationsCard />
          </div>
          <div className="xl:col-span-3">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <Interactive />
              <HelpFaq />
              {/* <TestTheme/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
