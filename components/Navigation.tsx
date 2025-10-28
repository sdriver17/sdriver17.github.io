"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { navigation } from "@/data/siteConfig";

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
    <header className="w-full">
      {/* Mobile Navigation */}
      <div className="md:hidden" ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full bg-black text-white py-3 px-5 text-left font-bold tracking-wider"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          MENU
        </button>
        {isMenuOpen && (
          <nav
            className="bg-black"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 px-5 text-white hover:bg-gray-800 transition-colors ${
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
      <div className="hidden md:block border-b border-gray-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-6">
            <h1 className="text-2xl font-bold tracking-[5px]">SAM DRIVER</h1>
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
                      ? "text-black font-bold"
                      : "text-link-gray hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Title Bar */}
      <div className="md:hidden text-center py-6 border-b border-gray-300">
        <h1 className="text-2xl font-bold tracking-[5px]">SAM DRIVER</h1>
      </div>
    </header>
  );
}
