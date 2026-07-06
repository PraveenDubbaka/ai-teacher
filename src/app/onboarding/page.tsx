"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { personalities } from "@/mock-data/data";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const steps = [
  "Household",
  "Children",
  "Device Setup",
  "Safety Controls",
  "Personality",
  "Finish",
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  return (
    <div className="mx-auto max-w-5xl p-4 sm:p-6">
      <Card className="mb-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <CardTitle className="text-2xl">Beautiful onboarding for busy parents</CardTitle>
            <CardDescription className="mt-2">Configure your household before your child says: Hey Teacher.</CardDescription>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">Step {step + 1} of {steps.length}</p>
        </div>
        <Progress className="mt-4" value={((step + 1) / steps.length) * 100} />
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardTitle>{steps[step]}</CardTitle>
          <CardDescription className="mt-2">
            {step === 0 && "Add guardians and set household learning goals."}
            {step === 1 && "Add child profiles with age, grade, and reading level."}
            {step === 2 && "Run QR, Bluetooth, WiFi, firmware, and calibration checks."}
            {step === 3 && "Set allowed topics, bedtime, and privacy policies."}
            {step === 4 && "Select default AI personality and voice style."}
            {step === 5 && "Review plan, billing, and first-week recommendations."}
          </CardDescription>
          <div className="mt-5 flex gap-2">
            <Button variant="secondary" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>Back</Button>
            {step < steps.length - 1 ? (
              <Button onClick={() => setStep((s) => s + 1)}>Next</Button>
            ) : (
              <Button onClick={() => router.push("/dashboard")}>Go to Dashboard</Button>
            )}
          </div>
        </Card>

        <Card>
          <CardTitle>AI Personalities</CardTitle>
          <div className="mt-3 grid max-h-72 gap-2 overflow-auto">
            {personalities.map((personality) => (
              <div key={personality.name} className="rounded-xl border border-slate-200 bg-white/60 p-3 text-sm dark:border-slate-700 dark:bg-slate-900/40">
                <p className="font-semibold">{personality.name}</p>
                <p className="text-slate-600 dark:text-slate-300">{personality.style}</p>
                <p className="mt-1 text-xs">Recommended age: {personality.age}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
