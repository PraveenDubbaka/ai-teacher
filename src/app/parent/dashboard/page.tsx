"use client";

import Link from "next/link";
import { Calendar, Sparkles, WandSparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useDashboard } from "@/hooks/use-dashboard";
import { LearningChart } from "@/components/shared/learning-chart";
import { PageHeader } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const { data, isLoading } = useDashboard();

  if (isLoading || !data) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-28" />
        ))}
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title="Household Overview"
        description="Today, weekly, and monthly learning signals from your voice-first home classroom."
        actions={<Button className="gap-2"><WandSparkles className="h-4 w-4" />Generate Weekly Plan</Button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <StatCard label="Today's Learning" value={`${data.summary.todayLearningMinutes}m`} delta="+12% vs yesterday" />
        <StatCard label="Weekly Learning" value={`${data.summary.weeklyLearningMinutes}m`} delta="+18%" />
        <StatCard label="Current Streak" value={`${data.summary.currentStreak} days`} delta="Best this month" />
        <StatCard label="Learning Score" value={`${data.summary.learningScore}`} delta="Class top 15%" />
        <StatCard label="Questions Asked" value={`${data.summary.questionsAsked}`} delta="Highly curious week" />
      </div>

      <motion.div className="mt-4 grid gap-4 xl:grid-cols-3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
        <Card className="ai-surface xl:col-span-2">
          <CardTitle>Weekly Learning Trend</CardTitle>
          <CardDescription className="mt-2">Score trajectory, curiosity, and participation.</CardDescription>
          <LearningChart />
        </Card>

        <Card className="ai-surface">
          <CardTitle>Quick Actions</CardTitle>
          <div className="mt-4 grid gap-2">
            <Button asChild variant="secondary"><Link href="/parent/devices">Run device diagnostics</Link></Button>
            <Button asChild variant="secondary"><Link href="/parent/parent-controls">Adjust learning hours</Link></Button>
            <Button asChild variant="secondary"><Link href="/parent/conversation-history">Review transcript queue</Link></Button>
            <Button asChild variant="secondary"><Link href="/parent/reports">Export monthly report</Link></Button>
          </div>
          <div className="mt-5 rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="flex items-center gap-2 text-sm font-medium"><Calendar className="h-4 w-4" />Upcoming recommendation</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Add the Ocean Ecosystems story pack for Aarav this week.</p>
          </div>
        </Card>
      </motion.div>

      <motion.div className="mt-4 grid gap-4 xl:grid-cols-2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
        <Card className="ai-surface">
          <CardTitle>Monthly Summary</CardTitle>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <Badge>Vocabulary Learned: {data.summary.vocabularyLearned}</Badge>
            <Badge>Homework Completed: {data.summary.homeworkCompleted}</Badge>
            <Badge>Stories Read: {data.summary.storiesRead}</Badge>
            <Badge>Learning Streak: {data.summary.currentStreak}</Badge>
          </div>
        </Card>

        <Card className="ai-surface">
          <CardTitle className="flex items-center gap-2"><Sparkles className="h-4 w-4" />Notifications</CardTitle>
          <div className="mt-4 space-y-2">
            {data.notifications.map((item) => (
              <motion.div key={item} whileHover={{ x: 4 }} className="rounded-xl bg-white/70 p-3 text-sm dark:bg-slate-900/50">{item}</motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
