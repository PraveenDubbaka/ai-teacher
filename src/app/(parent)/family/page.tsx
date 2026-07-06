import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const members = [
  { name: "Priya", role: "Mother", permissions: "Full" },
  { name: "Arun", role: "Father", permissions: "Full" },
  { name: "Grandma Latha", role: "Grandparents", permissions: "Story + Bedtime" },
  { name: "Ms. Kim", role: "Tutor", permissions: "Homework Insights" },
];

export default function FamilyPage() {
  return (
    <div>
      <PageHeader title="Family" description="Invite household members, tutors, and teachers with role-based permissions and notifications." actions={<Button>Invite Member</Button>} />
      <div className="grid gap-4 md:grid-cols-2">
        {members.map((member) => (
          <Card key={member.name}>
            <CardTitle>{member.name}</CardTitle>
            <CardDescription className="mt-2">{member.role}</CardDescription>
            <div className="mt-3 flex gap-2">
              <Badge>{member.permissions}</Badge>
              <Badge variant="neutral">Notifications enabled</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
