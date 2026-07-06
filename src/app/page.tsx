"use client";

import Link from "next/link";
import { CheckCircle2, Mic, Shield, Sparkles, ToyBrick } from "lucide-react";
import { motion } from "framer-motion";
import { DeviceHeroVideoPlayer } from "@/components/shared/device-hero-video-player";
import { DeviceWorkflowSection } from "@/components/shared/device-workflow-section";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const benefits = [
  "Screen-free AI learning for children",
  "Parent-managed controls and safety center",
  "Homework support, stories, and emotional awareness",
  "Personalities that adapt to age and learning style",
];

const faqs = [
  {
    q: "Does my child need a tablet?",
    a: "No. Children talk to Hey Teacher using a voice device with the wake word 'Hey Teacher'.",
  },
  {
    q: "Can parents review every conversation?",
    a: "Yes. The parent app includes full conversation history, replay, bookmarks, and export.",
  },
  {
    q: "How do safety controls work?",
    a: "You can set allowed and blocked topics, quiet hours, bedtime, and review sensitive interactions.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(160deg,#f8f4ec_0%,#f5fbf8_50%,#f7f5ef_100%)] dark:bg-[linear-gradient(160deg,#08131a_0%,#0e1a23_50%,#09141a_100%)]">
      <motion.div
        className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl"
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl"
        animate={{ x: [0, -20, 12, 0], y: [0, 24, -10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">Voice-First Education</p>
          <p className="text-xl font-semibold">Hey Teacher</p>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary"><Link href="/auth/login">Sign in</Link></Button>
          <Button asChild><Link href="/auth/signup">Get Started</Link></Button>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-teal-900 dark:bg-teal-700/20 dark:text-teal-200">
              <Mic className="h-4 w-4" /> Wake Word: Hey Teacher
            </p>
            <h1 className="text-5xl leading-tight tracking-tight sm:text-6xl">AI learning your child can talk to, while you stay in control.</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              Children learn through conversation with an AI speaker or toy. Parents guide learning paths, safety settings, and outcomes from one beautiful control center.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/onboarding">Start Onboarding</Link></Button>
              <Button asChild variant="secondary" size="lg"><Link href="/dashboard">View Demo Dashboard</Link></Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}>
          <Card className="ai-surface grid gap-4 p-6">
            <CardTitle className="text-xl">How It Works</CardTitle>
            {[
              "Child says: 'Hey Teacher'",
              "AI responds with adaptive guidance",
              "Parent app tracks growth and safety",
              "Recommendations improve daily learning",
            ].map((item) => (
              <motion.div key={item} whileHover={{ x: 4 }} className="flex items-center gap-3 rounded-2xl bg-white/70 p-3 dark:bg-slate-800/60">
                <CheckCircle2 className="h-5 w-5 text-teal-600" />
                <p className="text-sm">{item}</p>
              </motion.div>
            ))}
          </Card>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
          <DeviceHeroVideoPlayer />
        </section>

        <DeviceWorkflowSection />

        <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 lg:grid-cols-3">
          <Card className="ai-surface"><ToyBrick className="mb-3 h-6 w-6 text-amber-600" /><CardTitle>AI Toy Showcase</CardTitle><CardDescription className="mt-2">Teddy, robot, and travel companions with personality-based learning.</CardDescription></Card>
          <Card className="ai-surface"><Mic className="mb-3 h-6 w-6 text-teal-600" /><CardTitle>Voice Device Showcase</CardTitle><CardDescription className="mt-2">Family speaker, bedside lamp, and clock form factors with OTA updates.</CardDescription></Card>
          <Card className="ai-surface"><Shield className="mb-3 h-6 w-6 text-rose-600" /><CardTitle>Safety by Design</CardTitle><CardDescription className="mt-2">Sensitive question review, emotional alerts, and parental topic controls.</CardDescription></Card>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="text-3xl font-semibold">Benefits</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {benefits.map((item) => (
              <Card key={item} className="flex items-center gap-3 p-4"><Sparkles className="h-5 w-5 text-teal-600" /><p>{item}</p></Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="text-3xl font-semibold">Pricing</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <Card><CardTitle>Starter</CardTitle><CardDescription className="mt-2">$9/month for one child and one device.</CardDescription></Card>
            <Card className="border-teal-500"><CardTitle>Family</CardTitle><CardDescription className="mt-2">$29/month for up to 4 children and unlimited devices.</CardDescription></Card>
            <Card><CardTitle>School</CardTitle><CardDescription className="mt-2">Custom pricing with classroom controls and SSO.</CardDescription></Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="text-3xl font-semibold">Testimonials</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <Card><p>Homework battles dropped by half in one week.</p><CardDescription className="mt-2">Rina, Parent of 2</CardDescription></Card>
            <Card><p>My son now asks science questions at dinner every day.</p><CardDescription className="mt-2">Daniel, Parent</CardDescription></Card>
            <Card><p>The safety queue gives us confidence with AI at home.</p><CardDescription className="mt-2">Martha, Guardian</CardDescription></Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <div className="mt-5 space-y-3">
            {faqs.map((item) => (
              <Card key={item.q}><CardTitle>{item.q}</CardTitle><CardDescription className="mt-2">{item.a}</CardDescription></Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <Card className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Newsletter</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Get product updates, parenting insights, and release notes.</p>
            </div>
            <Button asChild><Link href="/auth/signup">Join Now</Link></Button>
          </Card>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-4 py-8 text-center text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
        Hey Teacher 2026. Built for families who want curious, safe, voice-first learning.
      </footer>
    </div>
  );
}
