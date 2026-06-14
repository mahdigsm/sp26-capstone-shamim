"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleGoogleLogin = () => {
    router.push("/dashboard");
  };
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex items-center justify-center bg-primary p-4">
      <div className=""></div>
      <Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </Card>
    </div>
    // </div>
  );
}

export default LoginPage;
