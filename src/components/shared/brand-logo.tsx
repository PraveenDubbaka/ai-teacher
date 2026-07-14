"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  href?: string;
  className?: string;
  showTagline?: boolean;
  titleClassName?: string;
};

export function BrandLogo({
  href,
  className,
  showTagline = true,
  titleClassName,
}: BrandLogoProps) {
  const content = (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-teal-300/55 bg-white/70 shadow-[0_10px_24px_-16px_rgba(15,23,42,0.75)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/75">
        <div className="absolute left-[6px] h-4 w-1 rounded-l-md bg-slate-300/80 dark:bg-slate-500/80" />
        <div className="absolute right-[6px] h-4 w-1 rounded-r-md bg-slate-300/80 dark:bg-slate-500/80" />
        <div className="z-10 flex h-8 w-8 items-center justify-center rounded-xl border-2 border-white/20 bg-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md">
          <div className="flex h-[60%] w-[70%] items-center justify-center gap-1.5 overflow-hidden rounded-lg bg-[#0a0a0a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
            <div className="h-3 w-1.5 rounded-[2px] bg-[#00ffc6] shadow-[0_0_8px_#00ffc6]" />
            <div className="h-3 w-1.5 rounded-[2px] bg-[#00ffc6] shadow-[0_0_8px_#00ffc6]" />
          </div>
        </div>
      </div>
      <div>
        {showTagline ? (
          <p className="text-xs uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">Voice-First Education</p>
        ) : null}
        <p className={cn("text-xl font-semibold tracking-tight", titleClassName)}>Hey Teacher</p>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} aria-label="Hey Teacher home" className="inline-flex">
      {content}
    </Link>
  );
}
