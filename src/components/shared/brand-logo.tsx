"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const basePath = firstSegment === "ai-teacher" ? "/ai-teacher" : "";
  const logoSrc = `${basePath}/brand/ai-teacher-logo.svg`;

  const content = (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/55 bg-white/70 shadow-[0_10px_24px_-16px_rgba(15,23,42,0.75)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/75">
        <Image
          src={logoSrc}
          alt="Hey Teacher logo"
          fill
          sizes="44px"
          className="object-cover"
          priority
        />
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
