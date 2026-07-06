import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
  actions?: React.ReactNode;
}

export function PageHeader({ title, description, className, actions }: PageHeaderProps) {
  return (
    <div className={cn("mb-6 flex flex-wrap items-start justify-between gap-3", className)}>
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
      </div>
      {actions}
    </div>
  );
}
