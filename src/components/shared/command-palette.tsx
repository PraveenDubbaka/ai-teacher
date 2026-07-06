"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

interface CommandItem {
  href: string;
  label: string;
}

export function CommandPalette({ items }: { items: CommandItem[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((state) => !state);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    const openHandler = () => setOpen(true);
    window.addEventListener("keydown", handler);
    window.addEventListener("open-command-palette", openHandler);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("open-command-palette", openHandler);
    };
  }, []);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return items;
    return items.filter((item) => item.label.toLowerCase().includes(value));
  }, [items, query]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 bg-slate-950/35 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="mx-auto mt-20 max-w-xl rounded-3xl border border-white/40 bg-white/90 p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900/90"
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center gap-2 rounded-2xl bg-slate-100 p-2 dark:bg-slate-800">
              <Search className="h-4 w-4 text-slate-500" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search routes, controls, reports..."
                className="h-9 border-0 bg-transparent p-0 shadow-none focus-visible:ring-0"
              />
            </div>
            <div className="max-h-80 space-y-1 overflow-y-auto">
              {results.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-sm transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {item.label}
                </Link>
              ))}
              {!results.length ? <p className="px-3 py-4 text-sm text-slate-500">No results found.</p> : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
