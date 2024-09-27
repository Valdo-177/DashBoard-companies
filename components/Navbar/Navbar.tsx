"use client"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { UserButton } from "@clerk/nextjs";  
import { Menu, Search } from "lucide-react";
import { SidebaRoute } from "../SidebaRoute";
import { ToggleTheme } from "../ToggleTheme";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenChange = (open:boolean) => {
        setIsOpen(open);
      };
  return (
    <nav className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
        
        <div className="blobk xl:hidden">
            <Sheet open={isOpen} onOpenChange={handleOpenChange}>
                <SheetTrigger className="flex items-center">
                    <Menu onClick={() => setIsOpen(true)}/>
                </SheetTrigger>
                <SheetContent side="left">
                    <SidebaRoute handleOpenChange={handleOpenChange}/>
                </SheetContent>
            </Sheet>
        </div>
        <div className="relative w-[300px] ">
            <Input placeholder="Search.." className="rounded-lg"/>
            <Search strokeWidth={1} className="absolute top-2 right-2"/>
        </div>
        <div className="flex gap-x-2 items-center">
            <ToggleTheme/>
            <UserButton/>
        </div>

    </nav>
  )
}