"use client";

import { motion } from "framer-motion";
import { children, dashboardSummary } from "@/mock-data/data";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
  actions?: React.ReactNode;
}

export function PageHeader({ title, description, className, actions }: PageHeaderProps) {
  const strongestCuriosity = [...children].sort((a, b) => b.curiosityIndex - a.curiosityIndex)[0];

  return (
    <motion.div
      className={cn("mb-6 rounded-3xl border border-white/50 bg-white/75 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/65", className)}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">Household Storyline</p>
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
      </div>
      {actions}
      </div>
      <div className="mt-4 grid gap-2 text-xs sm:grid-cols-3">
        <div className="rounded-2xl bg-teal-50 px-3 py-2 text-teal-900 dark:bg-teal-500/15 dark:text-teal-200">
          Weekly minutes: {dashboardSummary.weeklyLearningMinutes}m
        </div>
        <div className="rounded-2xl bg-sky-50 px-3 py-2 text-sky-900 dark:bg-sky-500/15 dark:text-sky-200">
          Curiosity lead: {strongestCuriosity.name} ({strongestCuriosity.curiosityIndex})
        </div>
        <div className="rounded-2xl bg-amber-50 px-3 py-2 text-amber-900 dark:bg-amber-500/15 dark:text-amber-200">
          Vocabulary this month: +{dashboardSummary.vocabularyLearned}
        </div>
      </div>
    </motion.div>
  );
}
