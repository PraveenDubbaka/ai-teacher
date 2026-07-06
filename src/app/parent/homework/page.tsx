import { PageHeader } from "@/components/shared/page-header";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function HomeworkPage() {
  return (
    <div>
      <PageHeader title="Homework Center" description="Subjects, assignments, mistakes, teacher notes, and weekly recommendations." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Card><CardTitle>Math</CardTitle><CardDescription className="mt-2">12 assignments • 89% average • Common mistake: regrouping.</CardDescription></Card>
        <Card><CardTitle>Science</CardTitle><CardDescription className="mt-2">8 assignments • 94% average • Strong inquiry and hypothesis skills.</CardDescription></Card>
        <Card><CardTitle>Reading</CardTitle><CardDescription className="mt-2">15 assignments • 91% average • Recommendation: inferencing exercises.</CardDescription></Card>
      </div>
      <Card className="mt-4"><CardTitle>Teacher Notes</CardTitle><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Maya is showing confidence in reading aloud. Encourage daily 15-minute story mode.</p></Card>
    </div>
  );
}
