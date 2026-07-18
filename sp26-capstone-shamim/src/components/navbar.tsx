import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme == "dark" ? (
            <Sun className="size-5 text-graytext" />
          ) : (
            <Moon className="size-5 text-graytext" />
          )}
        </Button>

        <Button variant="ghost" size="icon">
          <Bell className="size-5 text-graytext" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-auto rounded-xl px-2 py-1.5 hover:bg-Section"
            >
              <div className="flex items-center gap-2">
                <Avatar className="h-9 w-9 shadow-sm">
                  <AvatarFallback
                    className="bg-Secondary text-black
                  "
                  >
                    AC
                  </AvatarFallback>
                </Avatar>

                <div className="text-left leading-tight">
                  <p className="text-base font-medium">Alex Chen</p>
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
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Navbar;
