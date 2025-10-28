"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { navigation } from "@/data/siteConfig";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full border-b border-border dark:border-border">
      {/* Mobile Navigation */}
      <div className="md:hidden" ref={menuRef}>
        <div className="flex items-center justify-between px-4 py-3 bg-black dark:bg-gray-900">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="font-bold tracking-wider text-white"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            MENU
          </button>
          <ThemeToggle />
        </div>
        {isMenuOpen && (
          <nav
            className="bg-black dark:bg-gray-900"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 px-5 text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors ${
                  pathname === item.href ? "font-bold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            <h1 className="text-2xl font-bold tracking-[5px]">SAM DRIVER</h1>
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
                    className={`transition-colors ${
                      pathname === item.href
                        ? "text-black dark:text-white font-bold"
                        : "text-link-gray dark:text-link-gray hover:text-accent-green dark:hover:text-accent-green"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Title Bar */}
      <div className="md:hidden text-center py-6">
        <h1 className="text-2xl font-bold tracking-[5px]">SAM DRIVER</h1>
      </div>
    </header>
  );
}
