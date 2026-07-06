"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return <TabsPrimitive.List className={cn("inline-flex h-10 items-center rounded-2xl bg-slate-100 p-1 dark:bg-slate-800", className)} {...props} />;
}

export function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-3 py-1.5 text-sm font-medium text-slate-600 transition-all data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow dark:text-slate-300 dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white",
        className,
      )}
      {...props}
    />
  );
}

export const TabsContent = TabsPrimitive.Content;
