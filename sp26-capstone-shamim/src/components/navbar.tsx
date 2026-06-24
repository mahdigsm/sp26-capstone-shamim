import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Moon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { Input } from "./ui/input";
function Navbar() {
  return (
    <header className="flex items-center md:justify-between px-6 py-5 border-b border-border bg-primary shrink-0 transition-colors duration-300">
      <div className="flex items-center gap-3 flex-1 max-w-sm">
        <div className="relative w-full ">
          <Search className="absolute size-5 left-3.5 top-2.5 text-graytext" />
          <Input
            placeholder="Search products, orders..."
            className="w-full px-3 pl-11 bg-input text-base! font-medium h-11 rounded-md"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Moon className="size-6 inline-flex items-center justify-center gap-2" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="size-6" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className=" flex gap-2 pt-2 md">
              <Avatar className="h-9 w-9 border border-border/50 shadow-sm">
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-lg font-medium">Alex Chen</p>
                <p className="text-base text-muted-foreground">Admin</p>
              </div>
            </div>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Navbar;
