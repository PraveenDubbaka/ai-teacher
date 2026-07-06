"use client";

import { Pause, Play, Radio, Sparkles, Volume2, Waves } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const scenes = [
  {
    title: "Wake Word Detection",
    subtitle: "Child says: Hey Teacher",
    detail: "The speaker activates, confirms voice profile, and starts a friendly session.",
    color: "from-teal-500/40 to-cyan-400/10",
  },
  {
    title: "Adaptive Lesson Response",
    subtitle: "AI explains with age-appropriate language",
    detail: "The device adjusts pace, examples, and vocabulary based on child level.",
    color: "from-amber-400/40 to-orange-300/10",
  },
  {
    title: "Interactive Question Loop",
    subtitle: "Child asks follow-ups naturally",
    detail: "The toy asks curiosity prompts, mini quizzes, and story checkpoints.",
    color: "from-sky-500/40 to-indigo-400/10",
  },
  {
    title: "Parent Safety Sync",
    subtitle: "Insights and alerts sync to parent app",
    detail: "Conversation summaries, safety checks, and recommendations appear in dashboard.",
    color: "from-rose-400/35 to-pink-300/10",
  },
];

export function DeviceHeroVideoBanner() {
  const [activeScene, setActiveScene] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setActiveScene((scene) => (scene + 1) % scenes.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [playing]);

  const scene = useMemo(() => scenes[activeScene], [activeScene]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.08 }}
      className="overflow-hidden rounded-[2rem] border border-white/45 bg-slate-950 shadow-2xl"
      aria-label="Device video hero banner showing how children use Hey Teacher"
    >
      <div className="relative h-[420px] w-full bg-[radial-gradient(circle_at_10%_10%,rgba(45,212,191,0.34),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(251,191,36,0.26),transparent_45%),linear-gradient(160deg,#06121c_0%,#0b1d29_45%,#0a1622_100%)] p-6 sm:p-8">
        <motion.div
          key={scene.title}
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${scene.color}`}
        />

        <div className="relative z-10 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <Badge className="bg-white/20 text-white">Demo Reel</Badge>
            <Badge className="bg-teal-500/20 text-teal-100">AI Device Flow</Badge>
          </div>
          <Button
            size="sm"
            variant="secondary"
            className="border-0 bg-white/15 text-white hover:bg-white/25"
            onClick={() => setPlaying((value) => !value)}
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>

        <div className="relative z-10 mt-6 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p key={`title-${scene.title}`} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-xs uppercase tracking-[0.18em] text-teal-200">
              {scene.title}
            </motion.p>
            <motion.h3 key={`subtitle-${scene.subtitle}`} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.06 }} className="mt-2 text-3xl font-semibold leading-tight text-white">
              {scene.subtitle}
            </motion.h3>
            <motion.p key={`detail-${scene.detail}`} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="mt-3 max-w-lg text-sm text-slate-200">
              {scene.detail}
            </motion.p>

            <div className="mt-6 flex gap-2">
              {scenes.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Go to scene ${index + 1}`}
                  onClick={() => setActiveScene(index)}
                  className="h-2.5 flex-1 rounded-full bg-white/20"
                >
                  <motion.span
                    className="block h-full rounded-full bg-white"
                    initial={false}
                    animate={{ width: activeScene === index ? "100%" : "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto w-full max-w-xs rounded-[2.2rem] border border-white/25 bg-white/10 p-5 backdrop-blur-xl"
            >
              <div className="rounded-[1.8rem] border border-white/30 bg-slate-900/85 p-5 text-white">
                <div className="mb-4 flex items-center justify-between text-xs text-teal-200">
                  <span className="inline-flex items-center gap-1"><Radio className="h-3.5 w-3.5" />Live Session</span>
                  <span>00:16</span>
                </div>

                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-teal-300 to-cyan-500 p-0.5">
                  <div className="grid h-full w-full place-items-center rounded-full bg-slate-900">
                    <Sparkles className="h-6 w-6 text-teal-200" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-400/20 px-2 py-1 text-[11px] text-teal-100">
                    <Waves className="h-3.5 w-3.5" />Listening: Hey Teacher
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-300">
                    <Volume2 className="h-3.5 w-3.5 text-cyan-300" />Response optimized for age 8
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
