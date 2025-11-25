"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/siteConfig";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="font-bold tracking-wider"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold tracking-[5px] text-left">
                  SAM DRIVER
                </SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-col gap-4 mt-8"
                role="navigation"
                aria-label="Main navigation"
              >
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg py-3 px-4 rounded-md transition-colors hover:bg-secondary ${
                      pathname === item.href
                        ? "font-bold text-primary bg-secondary"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <h1 className="text-xl font-bold tracking-[5px]">SAM DRIVER</h1>
          <ThemeToggle />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            <Link href="/" className="group">
              <h1 className="text-2xl font-bold tracking-[5px] transition-colors hover:text-primary">
                SAM DRIVER
              </h1>
            </Link>
            <div className="flex items-center gap-8">
              <nav
                className="flex gap-8"
                role="navigation"
                aria-label="Main navigation"
              >
                {[...navigation].reverse().map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative transition-colors group ${
                      pathname === item.href
                        ? "text-foreground font-bold"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${
                        pathname === item.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
