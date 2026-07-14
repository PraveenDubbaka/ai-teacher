"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { ArrowRight, Atom, BrainCircuit, ChevronDown, Compass, FlaskConical, Languages, Music4, Rocket, Shield, Sparkles, Star, type LucideIcon } from "lucide-react";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { SectionScene } from "@/components/marketing/section-scenes";
import { NeonFrameReveal, ScrollReveal, StaggerItem, StaggerReveal } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const heroNodes: { label: string; icon: LucideIcon; ring: string }[] = [
  { label: "Space", icon: Rocket, ring: "from-cyan-400 to-sky-500" },
  { label: "Language", icon: Languages, ring: "from-teal-400 to-emerald-500" },
  { label: "Science", icon: FlaskConical, ring: "from-fuchsia-400 to-indigo-500" },
  { label: "Logic", icon: BrainCircuit, ring: "from-amber-400 to-orange-500" },
  { label: "Discovery", icon: Compass, ring: "from-violet-400 to-sky-500" },
  { label: "STEM", icon: Atom, ring: "from-cyan-300 to-blue-500" },
  { label: "Creativity", icon: Music4, ring: "from-rose-400 to-pink-500" },
];

const howItWorks = [
  "Child says 'Hey Teacher'",
  "AI listens with context",
  "Safe educational model responds",
  "Personalized learning plan updates",
  "Parent dashboard shows outcomes",
];

const scenarios = [
  { title: "Morning Learning", text: "5-minute concept warmups during breakfast prep." },
  { title: "Breakfast Questions", text: "Instant, age-appropriate explanations for daily curiosity." },
  { title: "Homework Help", text: "Guided hints and concept clarity without giving direct answers." },
  { title: "Car Rides", text: "Screen-free geography, riddles, and storytelling on the move." },
  { title: "Bedtime Stories", text: "Calm voice narratives tuned to your child emotional state." },
  { title: "Weekend Science", text: "Hands-on home experiments with safety-aware prompts." },
  { title: "Travel Learning", text: "Offline-friendly packs and multilingual voice experiences." },
];

const personalities = [
  { name: "Teacher", age: "5-10", style: "Structured and patient" },
  { name: "Scientist", age: "7-12", style: "Evidence-driven and curious" },
  { name: "Astronaut", age: "6-11", style: "Mission-based learning" },
  { name: "Robot", age: "6-12", style: "Logic-first and focused" },
  { name: "Explorer", age: "6-11", style: "Adventure-led discovery" },
  { name: "Pirate", age: "6-10", style: "Gamified quests and riddles" },
  { name: "Princess", age: "5-9", style: "Story-led confidence" },
  { name: "Wizard", age: "6-11", style: "Imagination and metaphors" },
  { name: "Animal Expert", age: "5-11", style: "Nature and empathy" },
];

const trustSignals = [
  "Privacy First",
  "COPPA Ready Architecture",
  "No Advertising",
  "No Social Media",
  "Parent Controlled",
  "Age Appropriate",
  "Secure Cloud",
  "Educational Content",
];

const marketplace = [
  "Story Packs",
  "Science Adventures",
  "Space Missions",
  "Math Quests",
  "Reading Programs",
  "Language Learning",
  "Coding",
  "Seasonal Packs",
  "Bundles",
];

const journey = [
  "Age 3 - Learning Colors",
  "Age 4 - Alphabet",
  "Age 5 - Reading",
  "Age 6 - Science",
  "Age 7 - Critical Thinking",
  "Age 8 - Coding",
  "Age 9+ - Advanced Learning",
];

const faqs = [
  {
    q: "Does my child need a screen?",
    a: "No. Hey Teacher is fully voice-first. Children learn through conversation while parents monitor progress from their dashboard.",
  },
  {
    q: "How does safety work?",
    a: "Every interaction passes through age-aware policy controls, topic boundaries, and parent-defined rules before response delivery.",
  },
  {
    q: "Can schools and families use the same platform?",
    a: "Yes. Family, School, and Enterprise plans run on the same secure core with role-based controls and reporting tiers.",
  },
  {
    q: "Is this only software?",
    a: "No. This is an ecosystem: smart devices, content marketplace, subscription intelligence, and parent analytics in one platform.",
  },
];

export default function HomePage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const { scrollYProgress } = useScroll();
  const pricing = useMemo(
    () => [
      { name: "Free", price: billing === "monthly" ? "$0" : "$0", tag: "Try voice learning basics" },
      { name: "Starter", price: billing === "monthly" ? "$12" : "$119", tag: "Single child + one device" },
      { name: "Premium", price: billing === "monthly" ? "$24" : "$239", tag: "Best for most families" },
      { name: "Family", price: billing === "monthly" ? "$39" : "$389", tag: "Up to 4 children + all devices" },
      { name: "School", price: billing === "monthly" ? "$199" : "$1990", tag: "Classroom deployment" },
      { name: "Enterprise", price: "Custom", tag: "District and OEM partnerships" },
    ],
    [billing],
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.2),transparent_30%),radial-gradient(circle_at_88%_14%,rgba(99,102,241,0.2),transparent_26%),linear-gradient(160deg,#030712_0%,#031325_45%,#020711_100%)] text-slate-100">
      <motion.div className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-500" style={{ scaleX: scrollYProgress }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "repeating-linear-gradient(180deg, rgba(148,163,184,0.45) 0px, rgba(148,163,184,0.45) 1px, transparent 1px, transparent 7px)" }} />
      <div className="pointer-events-none absolute -left-20 top-8 h-[460px] w-[460px] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-36 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl" />
      <MarketingHeader />

      <main>
        <section className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-100/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-900 dark:bg-cyan-500/10 dark:text-cyan-200">
              <Sparkles className="h-4 w-4" /> Voice Infrastructure for Childhood Intelligence
            </p>
            <h1 className="mt-6 text-5xl leading-[0.96] tracking-tight sm:text-6xl lg:text-7xl">
              A Robot-Led
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Learning Companion With Liquid Motion</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Conversational intelligence, emotional safety, and measurable growth in one voice-first ecosystem built around a robot hero and an immersive shader-driven atmosphere.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg"><Link href="/technology">Watch Demo</Link></Button>
              <Button asChild size="lg" variant="secondary"><Link href="/contact">Join Waitlist</Link></Button>
              <Button asChild size="lg" variant="secondary"><Link href="/investors">Book Early Access</Link></Button>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Scroll to discover</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative"
          >
            <div className="future-panel hero-mesh relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[3rem] p-5 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.38),transparent_26%),radial-gradient(circle_at_82%_12%,rgba(99,102,241,0.34),transparent_30%),radial-gradient(circle_at_52%_78%,rgba(14,165,233,0.28),transparent_34%),linear-gradient(135deg,rgba(3,7,18,0.92),rgba(8,15,31,0.75))]" />
              <motion.div
                className="absolute inset-0 opacity-90"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.42) 0%, transparent 18%), radial-gradient(circle at 70% 30%, rgba(59,130,246,0.36) 0%, transparent 20%), radial-gradient(circle at 50% 80%, rgba(99,102,241,0.28) 0%, transparent 24%), linear-gradient(120deg, rgba(15,23,42,0.08), rgba(148,163,184,0.02), rgba(15,23,42,0.08))",
                  backgroundSize: "200% 200%",
                }}
              />
              <motion.div
                className="absolute inset-0 opacity-70"
                animate={{ x: [0, -28, 0], y: [0, 16, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  backgroundImage:
                    "linear-gradient(transparent 0, transparent 92%, rgba(255,255,255,0.08) 92%, rgba(255,255,255,0.08) 100%), linear-gradient(90deg, transparent 0, transparent 94%, rgba(255,255,255,0.05) 94%, rgba(255,255,255,0.05) 100%)",
                  backgroundSize: "28px 28px",
                }}
              />
              <motion.div
                className="pointer-events-none absolute left-6 top-8 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl"
                animate={{ scale: [1, 1.35, 1], opacity: [0.35, 0.9, 0.35] }}
                transition={{ duration: 4.8, repeat: Infinity }}
              />
              <motion.div
                className="pointer-events-none absolute right-8 top-16 h-28 w-28 rounded-full bg-indigo-400/20 blur-2xl"
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.25, 0.75, 0.25] }}
                transition={{ duration: 5.5, repeat: Infinity }}
              />

              <div className="relative z-10 flex h-full flex-col justify-between rounded-[2.6rem] border border-white/10 bg-slate-950/20 p-5">
                <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                  <span>Liquid Shader Core</span>
                  <span>Robot Hero Interface</span>
                </div>

                <div className="relative mt-2 flex flex-1 items-center justify-center">
                  <motion.div
                    className="absolute inset-x-8 top-10 h-44 rounded-full bg-cyan-400/10 blur-3xl"
                    animate={{ opacity: [0.25, 0.85, 0.25], scaleX: [0.9, 1.08, 0.9] }}
                    transition={{ duration: 3.8, repeat: Infinity }}
                  />

                  <motion.div
                    className="absolute inset-y-10 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-300/80 via-sky-400/10 to-transparent"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2.8, repeat: Infinity }}
                  />

                  <motion.div
                    className="absolute left-[18%] top-[26%] h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(125,211,252,0.95)]"
                    animate={{ y: [-6, 6, -6] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute right-[18%] top-[22%] h-3 w-3 rounded-full bg-indigo-200 shadow-[0_0_18px_rgba(165,180,252,0.95)]"
                    animate={{ y: [6, -6, 6] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                  />

                  <motion.div
                    className="relative"
                    animate={{ y: [0, -10, 0], rotate: [0, 0.5, 0, -0.5, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="relative mx-auto flex h-[350px] w-[280px] items-center justify-center">
                      <motion.div
                        className="absolute inset-x-4 top-10 h-16 rounded-full bg-gradient-to-r from-cyan-300/25 via-sky-300/20 to-indigo-300/25 blur-2xl"
                        animate={{ opacity: [0.25, 0.8, 0.25] }}
                        transition={{ duration: 2.6, repeat: Infinity }}
                      />
                      <div className="absolute inset-x-8 top-12 rounded-[2.5rem] border border-cyan-300/30 bg-slate-950/35 p-4 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-md">
                        <div className="mx-auto flex h-24 w-36 items-center justify-center rounded-[2rem] border border-white/12 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.36),rgba(8,15,31,0.92)_70%)]">
                          <div className="flex gap-4">
                            <motion.div
                              className="h-6 w-6 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.9)]"
                              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 1.8, repeat: Infinity }}
                            />
                            <motion.div
                              className="h-6 w-6 rounded-full bg-indigo-200 shadow-[0_0_24px_rgba(129,140,248,0.9)]"
                              animate={{ scale: [1.2, 1, 1.2], opacity: [1, 0.65, 1] }}
                              transition={{ duration: 1.8, repeat: Infinity }}
                            />
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-cyan-100/70">
                          <span>Sensor Eyes</span>
                          <span>Adaptive Focus</span>
                        </div>
                      </div>

                      <div className="absolute inset-x-10 top-44 h-28 rounded-[2.2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(2,6,23,0.95))]">
                        <motion.div
                          className="absolute inset-x-4 top-4 h-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400"
                          animate={{ opacity: [0.2, 1, 0.2], scaleX: [0.8, 1.02, 0.8] }}
                          transition={{ duration: 2.1, repeat: Infinity }}
                        />
                        <div className="absolute inset-x-6 bottom-4 grid grid-cols-3 gap-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-200">
                          <div className="rounded-xl bg-cyan-500/10 px-2 py-2">Voice</div>
                          <div className="rounded-xl bg-sky-500/10 px-2 py-2">Safety</div>
                          <div className="rounded-xl bg-indigo-500/10 px-2 py-2">Learning</div>
                        </div>
                      </div>

                      <div className="absolute bottom-16 left-1/2 h-28 w-56 -translate-x-1/2 rounded-[2rem] border border-white/12 bg-gradient-to-b from-slate-900/70 to-slate-950/95 p-4">
                        <div className="mx-auto h-2 w-28 rounded-full bg-cyan-300/80" />
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <motion.div className="h-14 rounded-2xl bg-white/5" animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2.2, repeat: Infinity }} />
                          <motion.div className="h-14 rounded-2xl bg-white/5" animate={{ opacity: [0.7, 0.3, 0.7] }} transition={{ duration: 2.2, repeat: Infinity }} />
                        </div>
                      </div>

                      <div className="absolute bottom-6 left-1/2 h-10 w-[220px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-xl" />
                    </div>
                  </motion.div>
                </div>

                <div className="relative grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">Interactive shader layer</p>
                    <div className="mt-3 flex h-16 items-end gap-1.5">
                      {Array.from({ length: 18 }).map((_, index) => (
                        <motion.div
                          key={`hero-bar-${index}`}
                          className="w-full rounded-t bg-gradient-to-t from-cyan-400 via-sky-400 to-indigo-400"
                          animate={{ height: [10, 34, 16, 44, 12] }}
                          transition={{ duration: 1.1 + (index % 4) * 0.12, repeat: Infinity, ease: "easeInOut", delay: index * 0.03 }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/55 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200">Robot states</p>
                    <div className="mt-3 space-y-2 text-xs text-slate-200">
                      <motion.div className="rounded-2xl bg-cyan-500/10 px-3 py-2" animate={{ x: [0, 6, 0] }} transition={{ duration: 2.1, repeat: Infinity }}>Listening</motion.div>
                      <motion.div className="rounded-2xl bg-sky-500/10 px-3 py-2" animate={{ x: [4, 0, 4] }} transition={{ duration: 2.4, repeat: Infinity }}>Reasoning</motion.div>
                      <motion.div className="rounded-2xl bg-indigo-500/10 px-3 py-2" animate={{ x: [0, -4, 0] }} transition={{ duration: 2.2, repeat: Infinity }}>Teaching</motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {heroNodes.map((node, index) => (
                <motion.div
                  key={node.label}
                  className="absolute"
                  style={{ left: `${8 + (index % 3) * 30}%`, top: `${5 + Math.floor(index / 3) * 27}%` }}
                  animate={{ y: [0, -14, 0], rotate: [0, 6, 0, -6, 0] }}
                  transition={{ duration: 2.6 + index * 0.15, repeat: Infinity }}
                >
                  <div className="group relative">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/55 bg-gradient-to-br ${node.ring} text-white shadow-lg dark:border-slate-700`}>
                      <node.icon className="h-5 w-5" />
                    </div>
                    <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {node.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1400px] overflow-hidden border-y border-white/10 py-4">
          <motion.div className="flex min-w-max gap-3" animate={{ x: [0, -980] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
            {Array.from({ length: 2 }).flatMap((_, round) => ["VOICE FIRST", "SAFETY AI", "REAL TIME", "SCREEN FREE", "PARENT CONTROL", "TRUST LAYER"].map((tag) => (
              <span key={`${tag}-${round}`} className="rounded-full border border-cyan-300/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">{tag}</span>
            )))}
          </motion.div>
        </section>

        <ScrollReveal className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 sm:py-20">
          <h2 className="text-center text-4xl tracking-tight sm:text-5xl">Apple-style Product Reveal</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-300">Hardware built for modern homes, designed for child curiosity, engineered for trust.</p>
          <div className="mt-12 grid items-center gap-7 lg:grid-cols-2">
            <motion.div className="relative h-[420px] rounded-[2.5rem] border border-white/60 bg-white/75 p-8 dark:border-slate-700 dark:bg-slate-900/70" animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 10, repeat: Infinity }}>
              <div className="absolute inset-5 opacity-40">
                <SectionScene variant="product" />
              </div>
              <div className="mx-auto h-full w-full max-w-[280px] rounded-[2rem] bg-gradient-to-b from-slate-300 to-slate-500 p-2 dark:from-slate-600 dark:to-slate-800">
                <div className="flex h-full flex-col rounded-[1.7rem] bg-slate-900 p-5 text-white">
                  <div className="h-2 w-24 rounded-full bg-slate-500" />
                  <div className="mt-8 h-52 rounded-2xl bg-gradient-to-b from-teal-400/60 to-sky-600/50" />
                  <div className="mt-auto grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-lg bg-slate-700 px-2 py-1">LED Ring</div>
                    <div className="rounded-lg bg-slate-700 px-2 py-1">Privacy Switch</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Microphone Array", "Speaker", "LED Ring", "Privacy Switch", "USB-C", "WiFi", "Bluetooth", "Battery", "Touch Controls", "Premium Fabric Finish"].map((feature) => (
                <Card key={feature} className="p-4">
                  <CardTitle>{feature}</CardTitle>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-center text-4xl tracking-tight sm:text-5xl">How It Works</h2>
          <div className="mt-10 relative">
            <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-sky-500 to-indigo-500 md:left-1/2 md:-translate-x-1/2" />
            <motion.div
              className="absolute left-4 top-0 h-4 w-4 -translate-x-[7px] rounded-full bg-cyan-300 shadow-[0_0_26px_rgba(34,211,238,0.9)] md:left-1/2 md:-translate-x-1/2"
              animate={{ y: [0, 460, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <StaggerReveal className="space-y-8">
            {howItWorks.map((step, index) => (
              <StaggerItem key={step}>
                <motion.div className={`relative ml-10 rounded-3xl border border-white/14 bg-slate-900/55 p-5 md:ml-0 md:w-[46%] ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: index % 2 === 0 ? -26 : 26 }} viewport={{ once: true }}>
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-3xl"
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 2.2 + index * 0.22, repeat: Infinity }}
                    style={{ background: "linear-gradient(120deg, rgba(34,211,238,0.16), transparent 38%, rgba(99,102,241,0.16))" }}
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Step {index + 1}</p>
                  <p className="mt-2 text-lg text-slate-100">{step}</p>
                </motion.div>
              </StaggerItem>
            ))}
            </StaggerReveal>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto grid max-w-[1240px] items-center gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div className="relative min-h-[380px] overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-b from-amber-100 to-rose-100 p-8 dark:border-slate-700 dark:from-amber-900/30 dark:to-rose-900/20">
            <SectionScene variant="screenfree" className="absolute inset-4" />
          </div>
          <div>
            <h2 className="text-4xl tracking-tight sm:text-5xl">Screen-free Learning</h2>
            <div className="mt-7 space-y-4 text-xl font-medium text-slate-200">
              <p>No endless scrolling.</p>
              <p>No advertisements.</p>
              <p>No addictive feeds.</p>
              <p>Just curiosity.</p>
              <p>Just conversations.</p>
              <p>Just learning.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-4xl tracking-tight sm:text-5xl">Family Scenarios</h2>
          <div className="relative mt-8">
            <div className="pointer-events-none absolute -top-20 right-0 h-40 w-72 opacity-65">
              <SectionScene variant="scenarios" />
            </div>
            <StaggerReveal className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {scenarios.map((item, index) => (
              <StaggerItem key={item.title}>
              <motion.div whileHover={{ y: -6, scale: 1.01 }} transition={{ duration: 0.22 }}>
                <Card className="h-full p-5">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-sky-500 text-xl text-white">{index + 1}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="mt-3 leading-6">{item.text}</CardDescription>
                  <motion.div
                    className="mt-4 h-1 rounded-full bg-gradient-to-r from-cyan-400/25 via-sky-400 to-indigo-500/25"
                    animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3 + index * 0.25, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "180% 100%" }}
                  />
                </Card>
              </motion.div>
              </StaggerItem>
            ))}
            </StaggerReveal>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-4xl tracking-tight sm:text-5xl">Parent Dashboard Preview</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Card className="future-panel lg:col-span-2 p-6">
              <CardTitle className="text-lg">Weekly Intelligence Overview</CardTitle>
              <div className="mt-4 h-32 w-full rounded-2xl border border-white/40 bg-slate-50/70 p-2 dark:border-slate-700 dark:bg-slate-900/60">
                <SectionScene variant="dashboard" />
              </div>
              <div className="mt-5 rounded-2xl border border-white/12 bg-slate-900/55 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-300">Live voice activity</p>
                <div className="mt-4 flex h-16 items-end gap-1.5">
                  {Array.from({ length: 26 }).map((_, i) => (
                    <motion.div
                      key={`eq-${i}`}
                      className="w-2 rounded-t bg-gradient-to-t from-cyan-500 to-indigo-500"
                      animate={{ height: [16, 44, 24, 54, 20] }}
                      transition={{ duration: 1.3 + (i % 6) * 0.12, repeat: Infinity, ease: "easeInOut", delay: i * 0.03 }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {["Today's Learning", "Learning Streak", "Vocabulary Growth", "Questions Asked", "Favorite Subjects", "Curiosity Index"].map((metric, index) => (
                  <div key={metric}>
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>{metric}</span>
                      <span>{72 + index * 9}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-800">
                      <motion.div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" initial={{ width: 0 }} whileInView={{ width: `${72 + index * 4}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.05 }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/55 p-4">
                <p className="text-sm font-semibold">Recent Conversations</p>
                <p className="mt-2 text-sm text-slate-300">&quot;Why does the moon change shape?&quot; • &quot;Can plants hear sounds?&quot; • &quot;Tell me a dinosaur bedtime story.&quot;</p>
              </div>
            </Card>
            <Card className="future-panel p-6">
              <CardTitle>Safety Alerts</CardTitle>
              <div className="mt-4 space-y-3">
                {["Sensitive topic review available", "Quiet hours override request", "New weekly report published", "Reading confidence improved 14%"].map((alert) => (
                  <div key={alert} className="rounded-xl border border-white/10 bg-slate-900/65 p-3 text-sm text-slate-200">{alert}</div>
                ))}
              </div>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-4xl tracking-tight sm:text-5xl">Learning Journey</h2>
          <div className="mt-4 h-28 w-full rounded-2xl border border-white/50 bg-white/70 p-2 dark:border-slate-700 dark:bg-slate-900/65">
            <SectionScene variant="journey" />
          </div>
          <div className="mt-8 space-y-3">
            {journey.map((entry, index) => (
              <motion.div key={entry} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="flex items-center gap-4 rounded-2xl border border-white/55 bg-white/80 p-4 dark:border-slate-700 dark:bg-slate-900/75">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-sm font-semibold text-white">{index + 1}</div>
                <p className="text-sm font-semibold">{entry}</p>
                <span className="ml-auto text-xs text-slate-500">Milestone achievement unlocked</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-4xl tracking-tight sm:text-5xl">AI Personalities</h2>
          <StaggerReveal className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {personalities.map((profile) => (
              <StaggerItem key={profile.name}>
              <Card className="future-panel p-5">
                <CardTitle className="text-lg">{profile.name}</CardTitle>
                <CardDescription className="mt-2">Teaching style: {profile.style}</CardDescription>
                <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">Recommended age: {profile.age}</p>
                <Button variant="secondary" size="sm" className="mt-4">Voice Preview</Button>
              </Card>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-4xl tracking-tight sm:text-5xl">Device Ecosystem</h2>
          <StaggerReveal className="mt-8 grid gap-4 lg:grid-cols-2">
            <StaggerItem>
            <Card className="future-panel p-6">
              <CardTitle>One Parent Account. Many Devices.</CardTitle>
              <CardDescription className="mt-3 leading-7">Main speaker, Teddy Bear, Robot, Night Lamp, Travel Device, Clock, and Desktop Speaker all sync under one learning profile architecture.</CardDescription>
              <div className="mt-5 grid grid-cols-2 gap-2 text-sm text-slate-200">
                {["Main Speaker", "Teddy Bear", "Robot", "Night Lamp", "Travel Device", "Clock", "Desktop Speaker"].map((node) => (
                  <motion.div key={node} className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2" whileHover={{ x: 3 }}>{node}</motion.div>
                ))}
              </div>
            </Card>
            </StaggerItem>
            <StaggerItem>
            <Card className="future-panel p-6">
              <CardTitle>Architecture Diagram</CardTitle>
              <div className="mt-5 space-y-2 text-sm">
                <div className="rounded-lg bg-teal-100 px-3 py-2 dark:bg-teal-600/20">Child Voice Input</div>
                <ArrowRight className="h-4 w-4 text-slate-500" />
                <div className="rounded-lg bg-sky-100 px-3 py-2 dark:bg-sky-600/20">Safety + Educational AI Layer</div>
                <ArrowRight className="h-4 w-4 text-slate-500" />
                <div className="rounded-lg bg-amber-100 px-3 py-2 dark:bg-amber-600/20">Learning Graph + Recommendations</div>
                <ArrowRight className="h-4 w-4 text-slate-500" />
                <div className="rounded-lg bg-emerald-100 px-3 py-2 dark:bg-emerald-600/20">Parent Dashboard + Weekly Insights</div>
              </div>
            </Card>
            </StaggerItem>
          </StaggerReveal>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-4xl tracking-tight sm:text-5xl">Trust and Safety</h2>
          <NeonFrameReveal className="mt-4 h-28 w-full p-2"><SectionScene variant="safety" /></NeonFrameReveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((signal) => (
              <motion.div key={signal} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Card className="future-panel p-4">
                <CardTitle className="flex items-center gap-2"><Shield className="h-4 w-4 text-teal-600" />{signal}</CardTitle>
                <CardDescription className="mt-2">Built as a default behavior in product design, policy enforcement, and parent controls.</CardDescription>
              </Card>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-4xl tracking-tight sm:text-5xl">Marketplace</h2>
          <NeonFrameReveal className="mt-4 h-28 w-full p-2"><SectionScene variant="marketplace" /></NeonFrameReveal>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 py-3">
            <motion.div className="flex min-w-max gap-3 px-3" animate={{ x: [0, -920] }} transition={{ repeat: Infinity, duration: 18, ease: "linear" }}>
              {Array.from({ length: 3 }).flatMap((_, i) => marketplace.map((item) => (
                <span key={`${item}-${i}`} className="rounded-full border border-cyan-300/35 bg-cyan-500/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">{item}</span>
              )))}
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-4xl tracking-tight sm:text-5xl">Subscriptions</h2>
            <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-900">
              <button className={`rounded-full px-4 py-1.5 text-sm ${billing === "monthly" ? "bg-teal-600 text-white" : "text-slate-600"}`} onClick={() => setBilling("monthly")}>Monthly</button>
              <button className={`rounded-full px-4 py-1.5 text-sm ${billing === "yearly" ? "bg-teal-600 text-white" : "text-slate-600"}`} onClick={() => setBilling("yearly")}>Yearly</button>
            </div>
          </div>
          <NeonFrameReveal className="mt-4 h-28 w-full p-2"><SectionScene variant="pricing" /></NeonFrameReveal>
          <StaggerReveal className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {pricing.map((plan) => (
              <StaggerItem key={plan.name}>
              <Card className={`future-panel p-6 ${plan.name === "Premium" ? "border-teal-500 ring-2 ring-teal-500/40" : ""}`}>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="mt-2 text-4xl font-semibold">{plan.price}</p>
                <CardDescription className="mt-2">{plan.tag}</CardDescription>
              </Card>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-4xl tracking-tight sm:text-5xl">Testimonials</h2>
          <motion.div className="mt-8 flex min-w-max gap-4" animate={{ x: [0, -980] }} transition={{ repeat: Infinity, duration: 22, ease: "linear" }}>
            {Array.from({ length: 2 }).flatMap((_, block) => [
              "Homework stress dropped in two weeks. My child asks better questions now.",
              "Vocabulary transfer from home sessions is obvious in class.",
              "Safety and curiosity can coexist in one platform.",
              "Daily summaries became truly actionable.",
            ].map((quote, idx) => (
              <Card key={`${quote}-${block}-${idx}`} className="future-panel w-[300px] p-5">
                <div className="mb-3 flex text-amber-400">{Array.from({ length: 5 }).map((__, i) => <Star key={`${quote}-${i}`} className="h-4 w-4 fill-current" />)}</div>
                <p className="text-sm leading-7 text-slate-100">{quote}</p>
              </Card>
            )))}
          </motion.div>
          <motion.div className="mt-3 flex min-w-max gap-4" animate={{ x: [-980, 0] }} transition={{ repeat: Infinity, duration: 26, ease: "linear" }}>
            {Array.from({ length: 2 }).flatMap((_, block) => ["Parent confidence rose after one week of insight summaries.", "The bedtime routine became calmer and more educational.", "My child now explains concepts back with clarity.", "The platform feels safe enough to trust daily."].map((quote, idx) => (
              <Card key={`${quote}-${block}-${idx}`} className="future-panel w-[260px] p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-cyan-300">Family signal</p>
                <p className="mt-2 text-sm leading-6 text-slate-100">{quote}</p>
              </Card>
            )))}
          </motion.div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-[980px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-center text-4xl tracking-tight sm:text-5xl">FAQ</h2>
          <StaggerReveal className="mt-8 space-y-3">
            {faqs.map((item) => (
              <StaggerItem key={item.q}>
              <details className="group rounded-2xl border border-white/14 bg-slate-900/55 p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-slate-100">
                  {item.q}
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.a}</p>
              </details>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </ScrollReveal>

        <section className="mx-auto max-w-[1240px] px-4 pb-16 sm:px-6 sm:pb-24">
          <Card className="relative overflow-hidden rounded-[2.5rem] border border-teal-300/50 bg-gradient-to-r from-teal-600 via-sky-600 to-indigo-600 p-10 text-white">
            <div className="pointer-events-none absolute -right-14 -top-16 h-56 w-56 rounded-full bg-white/20 blur-2xl" />
            <h2 className="max-w-3xl text-4xl tracking-tight sm:text-5xl">Start your child&apos;s learning adventure today.</h2>
            <p className="mt-4 max-w-2xl text-sm text-white/90">Built for parents who want calm, safe, and meaningful AI learning experiences at home.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="lg"><Link href="/contact">Join Waitlist</Link></Button>
              <Button asChild variant="secondary" size="lg"><Link href="/technology">Request Demo</Link></Button>
              <Button asChild variant="secondary" size="lg"><Link href="/parents">Become a Beta Family</Link></Button>
            </div>
          </Card>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
