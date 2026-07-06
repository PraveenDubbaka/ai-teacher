"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const schema = z.object({
  parentName: z.string().min(2),
  language: z.string().min(2),
  notifications: z.boolean(),
  darkMode: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

export default function SettingsPage() {
  const { register, handleSubmit, watch, setValue } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      parentName: "Priya Dubbaka",
      language: "English",
      notifications: true,
      darkMode: false,
    },
  });

  return (
    <div>
      <PageHeader title="Settings" description="Profile, language, accessibility, theme, security, backup, and privacy controls." />
      <Card>
        <CardTitle>Profile and Preferences</CardTitle>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit(() => undefined)}>
          <Input placeholder="Parent Name" {...register("parentName")} />
          <Input placeholder="Language" {...register("language")} />
          <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
            <p className="text-sm">Notifications</p>
            <Switch checked={watch("notifications")} onCheckedChange={(checked) => setValue("notifications", checked)} />
          </div>
          <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
            <p className="text-sm">Dark Mode</p>
            <Switch checked={watch("darkMode")} onCheckedChange={(checked) => setValue("darkMode", checked)} />
          </div>
          <Button type="submit">Save Settings</Button>
        </form>
        <CardDescription className="mt-4">Delete account and data retention settings are available in the Privacy tab.</CardDescription>
      </Card>
    </div>
  );
}
