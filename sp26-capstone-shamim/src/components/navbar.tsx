import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Moon, Search, Sun } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { Input } from "./ui/input";
function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center md:justify-between px-6 dark:bg-background bg-primary shrink-0 transition-colors duration-300 h-16">
      <div className="flex items-center gap-3 flex-1 max-w-sm">
        <div className="relative w-full ">
          <Search className="absolute size-5 left-3.5 top-2.5 text-graytext" />
          <Input
            placeholder="Search products, orders..."
            className="w-full px-3 pl-11 bg-input text-base! h-10 rounded-md dark:bg-background"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon-lg"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme == "dark" ? (
            <Sun className="size-4 text-graytext dark:text-white" />
          ) : (
            <Moon className="size-4 text-graytext dark:text-white" />
          )}
        </Button>

        <Button variant="ghost" size="icon-lg">
          <Bell className="size-4 text-graytext dark:text-white" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-auto rounded-xl px-2 py-1.5 hover:bg-Section dark:hover:bg-foreground"
            >
              <div className="flex items-center gap-2">
                <Avatar className="size-7 shadow-sm">
                  <AvatarFallback
                    className="bg-Secondary text-black dark:text-input
                  "
                  >
                    AC
                  </AvatarFallback>
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&auto=format"
                    alt="@shadcn"
                  />
                </Avatar>

                <div className="text-left leading-tight">
                  <p className="text-sm font-medium dark:text-input">
                    Alex Chen
                  </p>
                  <p className="text-sm text-muted-foreground">Admin</p>
                </div>

                <ChevronDown className="ml-1 size-4 text-muted-foreground" />
              </div>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            sideOffset={10}
            className="w-60 rounded-xl border border-border bg-primary p-2 shadow-md"
          >
            <DropdownMenuLabel className="px-2 py-1.5 text-sm font-medium data-inset:pl-8">
              <p className="font-medium text-base text-black">Alex Chen</p>
              <p className="text-xs font-normal text-muted-foreground">
                alex@digitalshelf.io
              </p>
            </DropdownMenuLabel>
            <DropdownMenuItem className="rounded-lg px-3 py-2">
              Profile
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem className="rounded-lg px-3 py-2 text-red-500">
              Signout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Navbar;
