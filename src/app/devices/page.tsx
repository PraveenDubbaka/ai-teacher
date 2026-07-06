"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BatteryFull, Bluetooth, Cpu, Mic, ScanLine, Usb, Wifi } from "lucide-react";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { MarketingHeader } from "@/components/marketing/marketing-header";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const specs = [
  "Far-field microphone array (6 mics)",
  "Premium fabric acoustic shell",
  "Adaptive LED learning ring",
  "Physical privacy mute switch",
  "WiFi 6 + Bluetooth 5.3",
  "USB-C fast charging",
  "Up to 8 hours battery backup",
  "Touch controls with haptic feedback",
];

export default function DevicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(170deg,#fffef8_0%,#f8fbff_55%,#f6fffa_100%)] dark:bg-[linear-gradient(170deg,#061017_0%,#081821_45%,#081017_100%)]">
      <div className="pointer-events-none absolute -left-20 top-24 h-[360px] w-[360px] rounded-full bg-teal-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-16 h-[400px] w-[400px] rounded-full bg-sky-300/25 blur-3xl" />
      <MarketingHeader />
      <main>
        <section className="mx-auto grid max-w-[1240px] items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">Device Platform</p>
            <h1 className="mt-4 text-5xl tracking-tight sm:text-6xl">Hey Teacher Smart Speaker</h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              Designed like premium home hardware. Built like educational infrastructure. A voice-first learning companion for families and classrooms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/contact">Book Hardware Demo</Link></Button>
              <Button asChild variant="secondary" size="lg"><Link href="/pricing">View Plans</Link></Button>
            </div>
          </div>
          <motion.div
            className="relative h-[520px] rounded-[2.8rem] border border-white/65 bg-white/80 p-10 shadow-[0_40px_90px_-54px_rgba(15,23,42,0.7)] dark:border-slate-700 dark:bg-slate-900/70"
            animate={{ rotate: [0, 2.5, -2.5, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          >
            <div className="mx-auto h-full max-w-[300px] rounded-[2.4rem] bg-gradient-to-b from-slate-200 to-slate-500 p-2 dark:from-slate-600 dark:to-slate-800">
              <div className="flex h-full flex-col rounded-[2.1rem] bg-slate-950 p-6 text-white">
                <div className="mx-auto h-2 w-28 rounded-full bg-slate-700" />
                <div className="mt-8 flex h-56 items-center justify-center rounded-[2rem] bg-gradient-to-br from-teal-500/45 via-sky-500/45 to-amber-400/45">
                  <Mic className="h-20 w-20" />
                </div>
                <div className="mt-auto grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-xl bg-slate-700 px-2 py-2">LED Ring</div>
                  <div className="rounded-xl bg-slate-700 px-2 py-2">Privacy Switch</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-4xl tracking-tight sm:text-5xl">360° Product Viewer</h2>
          <Card className="mt-6 p-6">
            <div className="flex min-h-[280px] items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400">
              Interactive 360° viewer will render here with drag-to-rotate and hotspot callouts.
            </div>
          </Card>
        </section>

        <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-4xl tracking-tight sm:text-5xl">Exploded Hardware View</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              { title: "Microphone Array", icon: Mic, copy: "Precision far-field capture for natural child speech." },
              { title: "Compute Core", icon: Cpu, copy: "Low-latency processing optimized for educational interactions." },
              { title: "Speaker Chamber", icon: ScanLine, copy: "Balanced acoustic output for clear storytelling and lessons." },
            ].map((layer) => (
              <Card key={layer.title} className="p-5">
                <layer.icon className="h-6 w-6 text-teal-600" />
                <CardTitle className="mt-3 text-lg">{layer.title}</CardTitle>
                <CardDescription className="mt-2">{layer.copy}</CardDescription>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-4xl tracking-tight sm:text-5xl">Hardware Specifications</h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {specs.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 px-4 py-3 text-sm dark:border-slate-700 dark:bg-slate-900/80">
                <ArrowRight className="h-4 w-4 text-teal-600" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-4"><Wifi className="h-5 w-5 text-sky-600" /><CardTitle className="mt-2">WiFi</CardTitle></Card>
            <Card className="p-4"><Bluetooth className="h-5 w-5 text-sky-600" /><CardTitle className="mt-2">Bluetooth</CardTitle></Card>
            <Card className="p-4"><Usb className="h-5 w-5 text-sky-600" /><CardTitle className="mt-2">USB-C</CardTitle></Card>
            <Card className="p-4"><BatteryFull className="h-5 w-5 text-sky-600" /><CardTitle className="mt-2">Battery</CardTitle></Card>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-4xl tracking-tight sm:text-5xl">Accessories & Colors</h2>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {[
              { title: "Colorways", text: "Cloud Silver, Midnight Slate, and Sunrise Sand." },
              { title: "Accessories", text: "Travel dock, rugged carry case, and desk cradle." },
              { title: "Family Packs", text: "Bundle speaker + teddy + lamp for multi-room learning." },
            ].map((item) => (
              <Card key={item.title} className="p-5">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="mt-2">{item.text}</CardDescription>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[980px] px-4 pb-16 sm:px-6 sm:pb-24">
          <h2 className="text-center text-4xl tracking-tight sm:text-5xl">Device FAQ</h2>
          <div className="mt-8 space-y-3">
            {["Can children use it without reading?", "Does hardware support offline mode?", "How often are firmware updates delivered?", "Can multiple children share one device?"].map((question) => (
              <details key={question} className="rounded-2xl border border-white/60 bg-white/80 p-5 dark:border-slate-700 dark:bg-slate-900/80">
                <summary className="cursor-pointer font-semibold">{question}</summary>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Yes. Features are designed for household flexibility, parent control, and long-term educational reliability.</p>
              </details>
            ))}
          </div>
          <Card className="mt-8 rounded-[2rem] border border-teal-300/50 bg-gradient-to-r from-teal-600 to-sky-600 p-8 text-white">
            <h3 className="text-3xl tracking-tight">Ready to experience the device?</h3>
            <p className="mt-3 text-sm text-white/90">Request a guided hardware demo and early access bundle availability.</p>
            <Button asChild variant="secondary" size="lg" className="mt-5"><Link href="/contact">Request Device Demo</Link></Button>
          </Card>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
