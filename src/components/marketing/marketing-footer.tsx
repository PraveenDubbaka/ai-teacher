import Link from "next/link";

const columns = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/press-kit", label: "Press Kit" },
      { href: "/investors", label: "Investors" },
    ],
  },
  {
    heading: "Product",
    links: [
      { href: "/technology", label: "Technology" },
      { href: "/devices", label: "Devices" },
      { href: "/marketplace", label: "Marketplace" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Parents & Schools",
    links: [
      { href: "/parents", label: "Parents" },
      { href: "/schools", label: "Schools" },
      { href: "/safety", label: "Safety" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { href: "/developers", label: "Developer Platform" },
      { href: "/contact", label: "Support" },
      { href: "/contact", label: "Newsletter" },
      { href: "/contact", label: "Social" },
    ],
  },
];

export function MarketingFooter() {
  return (
    <footer className="border-t border-white/55 bg-white/70 px-4 py-14 dark:border-slate-800 dark:bg-slate-950/75">
      <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-300">Hey Teacher</p>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Screen-free AI learning for families. Built for trust, curiosity, and lifelong growth.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.heading}>
            <p className="text-sm font-semibold">{column.heading}</p>
            <div className="mt-3 space-y-2">
              {column.links.map((link) => (
                <Link key={`${column.heading}-${link.label}`} href={link.href} className="block text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-[1200px] border-t border-slate-200 pt-5 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        Hey Teacher Inc. © 2026. Terms and regional compliance policy available on request.
      </div>
    </footer>
  );
}
