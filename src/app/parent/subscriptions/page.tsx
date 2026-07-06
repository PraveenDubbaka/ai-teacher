import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const plans = [
  { name: "Free", price: "$0", notes: "Basic voice Q&A" },
  { name: "Starter", price: "$9", notes: "1 child, 1 device" },
  { name: "Premium", price: "$19", notes: "Advanced learning analytics" },
  { name: "Family", price: "$29", notes: "Up to 4 children, unlimited devices" },
  { name: "School", price: "Custom", notes: "Classroom and teacher integrations" },
  { name: "Enterprise", price: "Custom", notes: "District-scale controls" },
];

export default function SubscriptionsPage() {
  return (
    <div>
      <PageHeader title="Subscriptions" description="Compare plans, switch monthly or annual billing, and manage referral or gift subscriptions." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.name === "Family" ? "border-teal-500" : ""}>
            <CardTitle>{plan.name}</CardTitle>
            <p className="mt-2 text-3xl font-semibold">{plan.price}</p>
            <CardDescription className="mt-2">{plan.notes}</CardDescription>
            <div className="mt-4 flex gap-2">
              <Button className="flex-1">Upgrade</Button>
              <Button variant="secondary" className="flex-1">Downgrade</Button>
            </div>
            <div className="mt-3 flex gap-2">
              <Badge variant="neutral">Pause</Badge>
              <Badge variant="neutral">Cancel</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
