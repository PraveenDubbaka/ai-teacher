"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Mic, Shield, Sparkles, Star } from "lucide-react";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { SectionScene } from "@/components/marketing/section-scenes";
import { NeonFrameReveal, ScrollReveal, StaggerItem, StaggerReveal } from "@/components/shared/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const heroIcons = ["Planet", "Book", "Rocket", "Microscope", "Alphabet", "Math", "Music"];

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
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(170deg,#fffdf7_0%,#f8fff8_45%,#f4fbff_100%)] dark:bg-[linear-gradient(170deg,#061017_0%,#08141d_45%,#061018_100%)]">
      <div className="pointer-events-none absolute -left-20 top-8 h-[460px] w-[460px] rounded-full bg-teal-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-36 h-[420px] w-[420px] rounded-full bg-amber-300/25 blur-3xl" />
      <MarketingHeader />

      <main>
        <section className="mx-auto grid max-w-[1240px] items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <p className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-900 dark:bg-teal-600/20 dark:text-teal-200">
              <Sparkles className="h-4 w-4" /> Voice-First Educational Hardware Platform
            </p>
            <h1 className="mt-6 text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">The AI Teacher Every Child Deserves</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              A screen-free AI learning companion that answers questions, teaches new skills, tells stories, and grows with your child while giving parents complete visibility and control.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg"><Link href="/technology">Watch Demo</Link></Button>
              <Button asChild size="lg" variant="secondary"><Link href="/contact">Join Waitlist</Link></Button>
              <Button asChild size="lg" variant="secondary"><Link href="/investors">Book Early Access</Link></Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative"
          >
            <div className="future-panel relative mx-auto aspect-[4/5] w-full max-w-[520px] rounded-[3rem] p-8 backdrop-blur-xl">
              <div className="future-orb left-6 top-6 h-8 w-8" />
              <div className="future-orb right-10 top-20 h-10 w-10" style={{ animationDelay: "1.3s" }} />
              <div className="future-orb bottom-12 left-14 h-6 w-6" style={{ animationDelay: "0.8s" }} />
              <motion.div className="absolute left-1/2 top-8 h-3 w-40 -translate-x-1/2 rounded-full bg-slate-300/80 dark:bg-slate-700" />
              <motion.div
                animate={{ boxShadow: ["0 0 0 0 rgba(20,184,166,0.25)", "0 0 0 22px rgba(20,184,166,0)"] }}
                transition={{ repeat: Infinity, duration: 2.2 }}
                className="mx-auto mt-14 h-56 w-56 rounded-full bg-gradient-to-br from-teal-500 via-sky-500 to-amber-400 p-2"
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950/85 text-white">
                  <Mic className="h-14 w-14" />
                </div>
              </motion.div>
              <div className="mt-8 rounded-3xl bg-white/85 p-4 dark:bg-slate-950/70">
                <p className="text-sm font-semibold">Hey Teacher Smart Speaker</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Premium fabric finish, adaptive LED ring, far-field mic array, and privacy switch.</p>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-medium text-slate-600 dark:text-slate-300">
                <div className="rounded-xl bg-teal-50 px-2 py-2 dark:bg-teal-500/15">USB-C</div>
                <div className="rounded-xl bg-sky-50 px-2 py-2 dark:bg-sky-500/15">WiFi + BT</div>
                <div className="rounded-xl bg-amber-50 px-2 py-2 dark:bg-amber-500/15">8h Battery</div>
              </div>
            </div>
            {heroIcons.map((item, index) => (
              <motion.div
                key={item}
                className="absolute rounded-full border border-white/70 bg-white/85 px-3 py-1.5 text-xs font-semibold shadow-sm dark:border-slate-700 dark:bg-slate-900/85"
                style={{ left: `${8 + (index % 3) * 30}%`, top: `${5 + Math.floor(index / 3) * 27}%` }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2.6 + index * 0.15, repeat: Infinity }}
              >
                {item}
              </motion.div>
            ))}
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
          <StaggerReveal className="mt-10 grid gap-4 md:grid-cols-5">
            {howItWorks.map((step, index) => (
              <StaggerItem key={step}>
                <Card className="h-full p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">Step {index + 1}</p>
                  <p className="mt-3 text-sm font-semibold">{step}</p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </ScrollReveal>

        <ScrollReveal className="mx-auto grid max-w-[1240px] items-center gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div className="relative min-h-[380px] overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-b from-amber-100 to-rose-100 p-8 dark:border-slate-700 dark:from-amber-900/30 dark:to-rose-900/20">
            <SectionScene variant="screenfree" className="absolute inset-4" />
          </div>
          <div>
            <h2 className="text-4xl tracking-tight sm:text-5xl">Screen-free Learning</h2>
            <div className="mt-7 space-y-4 text-xl font-medium text-slate-700 dark:text-slate-200">
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
              <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                <Card className="h-full p-5">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-sky-500 text-xl text-white">{index + 1}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="mt-3 leading-6">{item.text}</CardDescription>
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
            <Card className="lg:col-span-2 p-6">
              <CardTitle className="text-lg">Weekly Intelligence Overview</CardTitle>
              <div className="mt-4 h-32 w-full rounded-2xl border border-white/40 bg-slate-50/70 p-2 dark:border-slate-700 dark:bg-slate-900/60">
                <SectionScene variant="dashboard" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["Today's Learning", "Learning Streak", "Vocabulary Growth", "Questions Asked", "Favorite Subjects", "Curiosity Index"].map((metric, index) => (
                  <div key={metric} className="rounded-2xl bg-slate-100 p-3 dark:bg-slate-800">
                    <p className="text-xs text-slate-500 dark:text-slate-400">{metric}</p>
                    <motion.p initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.05 }} className="mt-1 text-2xl font-semibold">{72 + index * 9}</motion.p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
                <p className="text-sm font-semibold">Recent Conversations</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">&quot;Why does the moon change shape?&quot; • &quot;Can plants hear sounds?&quot; • &quot;Tell me a dinosaur bedtime story.&quot;</p>
              </div>
            </Card>
            <Card className="p-6">
              <CardTitle>Safety Alerts</CardTitle>
              <div className="mt-4 space-y-3">
                {["Sensitive topic review available", "Quiet hours override request", "New weekly report published", "Reading confidence improved 14%"].map((alert) => (
                  <div key={alert} className="rounded-xl bg-white/80 p-3 text-sm dark:bg-slate-900/70">{alert}</div>
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
              <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
                {["Main Speaker", "Teddy Bear", "Robot", "Night Lamp", "Travel Device", "Clock", "Desktop Speaker"].map((node) => (
                  <div key={node} className="rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-800">{node}</div>
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
              <Card key={signal} className="future-panel p-4">
                <CardTitle className="flex items-center gap-2"><Shield className="h-4 w-4 text-teal-600" />{signal}</CardTitle>
                <CardDescription className="mt-2">Built as a default behavior in product design, policy enforcement, and parent controls.</CardDescription>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-4xl tracking-tight sm:text-5xl">Marketplace</h2>
          <NeonFrameReveal className="mt-4 h-28 w-full p-2"><SectionScene variant="marketplace" /></NeonFrameReveal>
          <StaggerReveal className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {marketplace.map((item) => (
              <StaggerItem key={item}>
              <Card className="future-panel p-4">
                <CardTitle className="text-base">{item}</CardTitle>
                <CardDescription className="mt-2">Curated by education specialists and updated weekly.</CardDescription>
              </Card>
              </StaggerItem>
            ))}
          </StaggerReveal>
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
          <StaggerReveal className="mt-8 grid gap-4 lg:grid-cols-4">
            {[
              "Homework stress dropped in two weeks. My child asks better questions now.",
              "In class, vocabulary transfer from home sessions is obvious and measurable.",
              "As a specialist, I love that safety and curiosity can coexist in one platform.",
              "Homeschool planning became easier because daily summaries are accurate and actionable.",
            ].map((quote, index) => (
              <StaggerItem key={quote}>
              <Card className="future-panel p-5">
                <div className="mb-3 flex text-amber-500">{Array.from({ length: 5 }).map((_, i) => <Star key={`${quote}-${i}`} className="h-4 w-4 fill-current" />)}</div>
                <p className="text-sm leading-6">{quote}</p>
                <p className="mt-3 text-xs font-semibold text-slate-500">{["Parent", "Teacher", "Educational Specialist", "Homeschool Family"][index]}</p>
              </Card>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-[980px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-center text-4xl tracking-tight sm:text-5xl">FAQ</h2>
          <StaggerReveal className="mt-8 space-y-3">
            {faqs.map((item) => (
              <StaggerItem key={item.q}>
              <details className="group rounded-2xl border border-white/60 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-900/80">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold">
                  {item.q}
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.a}</p>
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
