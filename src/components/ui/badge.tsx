import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", {
  variants: {
    variant: {
      default: "bg-teal-100 text-teal-800 dark:bg-teal-500/20 dark:text-teal-200",
      neutral: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
      warning: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200",
      danger: "bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-200",
    },
  },
  defaultVariants: { variant: "default" },
});

export function Badge({ className, variant, ...props }: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
