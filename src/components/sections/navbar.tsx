"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center">
            <Logo variant="dark" width={160} height={44} />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[var(--color-slate-text)] hover:text-[var(--color-navy)] transition-colors rounded-md hover:bg-[var(--color-surface)]"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="ml-3 bg-[var(--color-electric)] hover:bg-[var(--color-electric-light)]">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-base font-medium text-[var(--color-slate-text)] hover:text-[var(--color-navy)] hover:bg-[var(--color-surface)] rounded-md"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full mt-2 bg-[var(--color-electric)] hover:bg-[var(--color-electric-light)]">
              <a href="#contact" onClick={() => setMobileOpen(false)}>Contact Us</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
