"use client";

import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/technology", label: "Technology" },
  { href: "/devices", label: "Devices" },
  { href: "/parents", label: "Parents" },
  { href: "/schools", label: "Schools" },
  { href: "/pricing", label: "Pricing" },
  { href: "/investors", label: "Investors" },
];

export function MarketingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/55 bg-white/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6">
        <BrandLogo href="/" />
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 dark:text-slate-200 dark:hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex">
            <Link href="/parent/dashboard">Parent Dashboard</Link>
          </Button>
          <Button asChild size="sm" className="gap-2">
            <Link href="/contact"><Sparkles className="h-4 w-4" />Join Waitlist</Link>
          </Button>
          <Button variant="secondary" size="sm" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle menu">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-white/40 bg-white/85 px-4 py-4 dark:border-slate-800 dark:bg-slate-900/90 lg:hidden"
          >
            <div className="mx-auto grid max-w-[1200px] gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-medium dark:bg-slate-800" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
