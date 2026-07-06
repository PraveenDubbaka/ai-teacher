import { safetyAlerts } from "@/mock-data/data";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function SafetyPage() {
  return (
    <div>
      <PageHeader title="Safety Center" description="Sensitive questions, emotional alerts, bullying detection, and privacy controls." />

      <div className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardTitle>Parental Review Queue</CardTitle>
          <div className="mt-4 space-y-2">
            {safetyAlerts.map((alert) => (
              <div key={alert.id} className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium">{alert.category}</p>
                  <Badge variant={alert.severity === "High" ? "danger" : alert.severity === "Medium" ? "warning" : "neutral"}>{alert.severity}</Badge>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{alert.summary}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle>Controls</CardTitle>
          <CardDescription className="mt-2">Blocked topics, emergency contacts, privacy retention, and night activity monitoring.</CardDescription>
          <div className="mt-4 grid gap-2 text-sm">
            <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">Blocked Topics: violence, age-inappropriate content, unsafe dares</div>
            <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">Emergency Contacts: 3 configured</div>
            <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">Data Retention: 90 days transcript retention</div>
            <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">Night Activity Alerts: enabled 9:00 PM - 6:00 AM</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
