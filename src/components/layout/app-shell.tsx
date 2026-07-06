"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, BookOpen, Bot, ClipboardCheck, CreditCard, HeartHandshake, House, LifeBuoy, Menu, MessageSquareText, Search, Settings, Shield, ShoppingBag, Smartphone, Sparkles, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { parent } from "@/mock-data/data";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/shared/brand-logo";
import { CommandPalette } from "@/components/shared/command-palette";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: House },
  { href: "/children", label: "Children", icon: Users },
  { href: "/devices", label: "Devices", icon: Smartphone },
  { href: "/learning", label: "Learning", icon: BookOpen },
  { href: "/reports", label: "Reports", icon: Sparkles },
  { href: "/safety", label: "Safety", icon: Shield },
  { href: "/conversation-history", label: "Conversations", icon: MessageSquareText },
  { href: "/parent-controls", label: "Parent Controls", icon: ClipboardCheck },
  { href: "/homework", label: "Homework", icon: BookOpen },
  { href: "/stories", label: "Stories", icon: Sparkles },
  { href: "/marketplace", label: "Marketplace", icon: ShoppingBag },
  { href: "/subscriptions", label: "Subscriptions", icon: Bot },
  { href: "/billing", label: "Billing", icon: CreditCard },
  { href: "/family", label: "Family", icon: HeartHandshake },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/support", label: "Support", icon: LifeBuoy },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const title = useMemo(() => navItems.find((i) => pathname.startsWith(i.href))?.label ?? "Hey Teacher", [pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(245,158,11,.15),_transparent_35%)] dark:bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,.15),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(217,119,6,.12),_transparent_35%)]">
      <motion.div
        className="pointer-events-none absolute -left-20 top-12 h-72 w-72 rounded-full bg-teal-400/25 blur-3xl"
        animate={{ x: [0, 30, -10, 0], y: [0, 24, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl"
        animate={{ x: [0, -24, 12, 0], y: [0, -16, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        <aside className="hidden w-72 shrink-0 border-r border-white/40 bg-white/60 p-5 backdrop-blur-xl lg:block dark:border-slate-800 dark:bg-slate-950/70">
          <div className="mb-8 rounded-2xl bg-slate-900 px-4 py-3 text-white dark:bg-slate-100 dark:text-slate-900">
            <BrandLogo
              href="/dashboard"
              showTagline={false}
              titleClassName="text-lg"
              className="[&_p]:text-white dark:[&_p]:text-slate-900"
            />
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-teal-300 dark:text-teal-600">Voice First Learning</p>
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <motion.div key={item.href} layout>
                <Link
                  href={item.href}
                  className={cn(
                    "relative flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-teal-600 text-white"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute inset-0 rounded-2xl bg-teal-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  <item.icon className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">{item.label}</span>
                </Link>
                </motion.div>
              );
            })}
          </nav>
        </aside>

        <div className="flex w-full flex-col">
          <header className="sticky top-0 z-30 border-b border-white/30 bg-white/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/65">
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2">
                <Button variant="secondary" size="sm" className="lg:hidden" onClick={() => setOpen((s) => !s)}>
                  <Menu className="h-4 w-4" />
                </Button>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">Parent Console</p>
                  <h2 className="text-lg font-semibold">{title}</h2>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="gap-2"
                  onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
                >
                  <Search className="h-4 w-4" />
                  Command
                </Button>
                <Button variant="secondary" size="sm"><Bell className="h-4 w-4" /></Button>
                <ThemeToggle />
                <div className="rounded-2xl bg-slate-900 px-3 py-2 text-sm text-white dark:bg-slate-100 dark:text-slate-900">{parent.avatar}</div>
              </div>
            </div>
          </header>

          <AnimatePresence>
            {open ? (
              <motion.nav
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                className="grid gap-2 border-b border-white/20 bg-white/80 p-4 lg:hidden dark:border-slate-800 dark:bg-slate-950/80"
              >
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-xl bg-slate-100 px-3 py-2 text-sm dark:bg-slate-800">
                    {item.label}
                  </Link>
                ))}
              </motion.nav>
            ) : null}
          </AnimatePresence>

          <main className="flex-1 p-4 sm:p-6">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </main>
        </div>
      </div>
      <CommandPalette items={navItems.map(({ href, label }) => ({ href, label }))} />
    </div>
  );
}
