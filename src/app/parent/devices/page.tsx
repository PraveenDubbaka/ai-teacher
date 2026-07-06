"use client";

import { useState } from "react";
import { children, personalities } from "@/mock-data/data";
import { DeviceTable } from "@/components/shared/device-table";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const setupSteps = [
  "Scan QR",
  "Bluetooth Discovery",
  "WiFi",
  "Firmware Check",
  "Assign Child",
  "Choose Personality",
  "Microphone Calibration",
  "Speaker Test",
  "Wake Word Test",
  "Success",
];

export default function DevicesPage() {
  const [step, setStep] = useState(0);

  return (
    <div>
      <PageHeader title="Device Management" description="Manage unlimited devices, diagnostics, OTA updates, and child assignments." actions={<Button>Restart All Idle Devices</Button>} />

      <DeviceTable />

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <Card>
          <CardTitle>Add Device Flow</CardTitle>
          <CardDescription className="mt-2">Step-by-step provisioning and calibration wizard.</CardDescription>
          <Progress className="mt-4" value={((step + 1) / setupSteps.length) * 100} />
          <div className="mt-4 rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="font-semibold">Step {step + 1}: {setupSteps[step]}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">All tests are logged for diagnostics and parental review.</p>
          </div>
          <div className="mt-4 flex gap-2">
            <Button variant="secondary" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>Back</Button>
            <Button disabled={step === setupSteps.length - 1} onClick={() => setStep((s) => s + 1)}>Next</Button>
          </div>
        </Card>

        <Card>
          <CardTitle>Assignment and Personality</CardTitle>
          <div className="mt-4 grid gap-2 text-sm">
            <div className="rounded-xl bg-white/80 p-3 dark:bg-slate-900/60">Assign Child: {children.map((c) => c.name).join(", ")}</div>
            <div className="rounded-xl bg-white/80 p-3 dark:bg-slate-900/60">Voice Calibration: active for all devices</div>
            <div className="rounded-xl bg-white/80 p-3 dark:bg-slate-900/60">Wake Word Test: pass rate 97%</div>
            <div className="rounded-xl bg-white/80 p-3 dark:bg-slate-900/60">Recommended personality: {personalities[2].name}</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
