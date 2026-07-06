"use client";

import { motion } from "framer-motion";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

type TemplateCard = {
  title: string;
  description: string;
};

type MarketingPageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: TemplateCard[];
};

export function MarketingPageTemplate({ eyebrow, title, description, highlights }: MarketingPageTemplateProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(170deg,#fffef8_0%,#f8fffb_42%,#f5fbff_100%)] dark:bg-[linear-gradient(170deg,#071017_0%,#0a1820_52%,#061017_100%)]">
      <div className="pointer-events-none absolute -left-24 top-16 h-96 w-96 rounded-full bg-teal-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-28 h-[420px] w-[420px] rounded-full bg-amber-300/20 blur-3xl" />
      <MarketingHeader />
      <main className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20">
        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-5xl tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">{description}</p>
        </motion.section>
        <section className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index, duration: 0.35 }}
            >
              <Card className="h-full p-6">
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription className="mt-3 text-sm leading-6">{card.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
