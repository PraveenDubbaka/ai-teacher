"use client";

import { PageHeader } from "@/components/shared/page-header";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const controls = [
  "Learning Hours",
  "Bedtime",
  "Homework Only",
  "Daily Limits",
  "Quiet Hours",
  "Allowed Topics",
  "Blocked Topics",
  "Language",
  "Story Mode",
  "Quiz Mode",
  "Offline Mode",
  "Vacation Mode",
  "Microphone Permissions",
  "Data Retention",
  "Privacy",
];

export default function ParentControlsPage() {
  return (
    <div>
      <PageHeader title="Parent Controls" description="Fine-grained controls for learning time, topics, modes, privacy, and microphone permissions." />
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {controls.map((control, index) => (
          <Card key={control} className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">{control}</CardTitle>
              <CardDescription className="mt-1">Configurable per child and per device.</CardDescription>
            </div>
            <Switch defaultChecked={index % 3 !== 0} />
          </Card>
        ))}
      </div>
    </div>
  );
}
