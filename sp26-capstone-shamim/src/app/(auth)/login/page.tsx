"use client";

import { Eye, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary p-4 h-200">
      <div className="flex items-center justify-center gap-2 mb-8 text-2xl text-bold text-foreground tracking-tight">
        <div className="size-10 rounded-lg flex items-center justify-center bg-olive-900">
          <ShoppingBag className="text-primary" />
        </div>
        DigitalShelf
      </div>
      <div className="w-full max-w-130 shadow-sm max-h-140 overflow-hidden rounded-3xl border-2 border-Secondary bg-Section flex-1 flex items-center justify-center md:flex-row ">
        <div className="flex-1 p-4 md:p-12">
          <h1 className="text-2xl mt-4 font-semibold">Welcome back</h1>
          <p className="mt-2 text-popover">Sign in to your admin dashboard</p>

          <div className="mt-8 flex flex-col gap-4">
            <h1 className="font-bold">Email address</h1>

            <input
              className=" w-full rounded-xl border border-input
      bg-Section
      px-3 py-3 pr-11
      text-popover
      outline-none
      transition-all
      focus:border-ring
      focus:ring-4
      focus:ring-ring/30"
              placeholder="you@company.com"
            />

            <div className="flex items-center justify-between">
              <h1 className="font-bold"> Password</h1>

              <button className="text-sm transition-colors text-popover hover:text-black">
                Forget password?
              </button>
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="
      w-full rounded-xl border border-input
      bg-Section
      px-3 py-3 pr-11
      text-popover
      outline-none
      transition-all
      focus:border-ring
      focus:ring-4
      focus:ring-ring/30
    "
              />

              <button
                type="button"
                className="
      absolute right-3 top-1/2
      -translate-y-1/2
      text-muted-foreground
      hover:text-foreground
      transition-colors
    "
              >
                <Eye className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <input type="checkbox" className="size-4 bg-red-600" />{" "}
              <p>Remember me for 30 days</p>{" "}
            </div>
            <button
              className="rounded-xl bg-olive-900 px-4 py-3 text-white hover:opacity-90 hover:transition"
              onClick={() => router.push("/dashboard")}
            >
              Sign in
            </button>
            <div className="my-1">
              <div
                data-orientation="horizontal"
                role="none"
                data-slot="separator-root"
                className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
              ></div>

              <p className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  px-3 text-sm text-muted-foreground">
                or continue with
              </p>
            </div>

            <button
              className="bg-primary px-4 py-3 inline-flex items-center justify-center border gap-2 rounded-lg border-Secondary hover:bg-Section"
              onClick={() => router.push("/dashboard")}
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
              Countinue With Google
            </button>
          </div>
        </div>
      </div>
      <div className="text-sm mt-6 text-gray-500 hover:text-shadow-mist-950">
        By signing in, you agree to our{" "}
        <u className="hover:transition hover:text-olive-800">
          Terms of Service
        </u>{" "}
        and
        <u className="hover:transition hover:text-olive-800">
          {" "}
          Privacy Policy.
        </u>
      </div>
    </div>
  );
}
