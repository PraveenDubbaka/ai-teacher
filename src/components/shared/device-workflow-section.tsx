"use client";

import { motion } from "framer-motion";
import { Mic, ShieldCheck, Sparkles, ToyBrick, Volume2, Waves } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const flow = [
  {
    title: "1. Child Speaks Naturally",
    text: "Your child talks to the speaker or AI toy with the wake word Hey Teacher.",
    icon: Mic,
  },
  {
    title: "2. Device Understands Context",
    text: "Voice profile and age context personalize the learning response instantly.",
    icon: Waves,
  },
  {
    title: "3. Friendly Voice Teaching",
    text: "Stories, quizzes, and guided explanations are delivered through device audio.",
    icon: Volume2,
  },
  {
    title: "4. Parent App Safety Sync",
    text: "Summaries, alerts, and recommendations sync to parent controls in real time.",
    icon: ShieldCheck,
  },
  {
    title: "5. Personality-Led Learning",
    text: "Scientist, Explorer, or Teacher personalities keep sessions engaging and human.",
    icon: Sparkles,
  },
  {
    title: "6. Screen-Free Daily Habit",
    text: "Children stay off screens while building curiosity through voice-first routines.",
    icon: ToyBrick,
  },
];

export function DeviceWorkflowSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <h2 className="text-3xl font-semibold">How The Device Works For Children</h2>
      <p className="mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
        Designed for hands-free, eyes-free learning. Children interact with Hey Teacher naturally through voice while parents monitor progress and safety from the app.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {flow.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.34, delay: index * 0.05 }}
          >
            <Card className="h-full">
              <step.icon className="h-5 w-5 text-teal-600" />
              <CardTitle className="mt-3 text-lg">{step.title}</CardTitle>
              <CardDescription className="mt-2">{step.text}</CardDescription>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
