import { Download, FileText } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <div>
      <PageHeader
        title="Reports"
        description="Investor-ready analytics snapshots: weekly, monthly, yearly, and child-level breakdowns."
        actions={<Button className="gap-2"><Download className="h-4 w-4" />Export Full PDF</Button>}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Card><FileText className="h-5 w-5 text-teal-600" /><CardTitle className="mt-2">Weekly Learning</CardTitle><CardDescription className="mt-2">Curiosity index, question categories, and completion trends.</CardDescription></Card>
        <Card><FileText className="h-5 w-5 text-teal-600" /><CardTitle className="mt-2">Monthly Summary</CardTitle><CardDescription className="mt-2">Vocabulary growth, reading level progression, and recommended goals.</CardDescription></Card>
        <Card><FileText className="h-5 w-5 text-teal-600" /><CardTitle className="mt-2">Yearly Snapshot</CardTitle><CardDescription className="mt-2">Longitudinal mastery map for family and teacher conversations.</CardDescription></Card>
      </div>
    </div>
  );
}
