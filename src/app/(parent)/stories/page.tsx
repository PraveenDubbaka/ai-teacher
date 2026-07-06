import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const categories = ["Adventure", "Science", "Animals", "Space", "Fantasy", "History", "Bedtime", "Friendship", "Custom Stories", "Premium Stories", "Offline Stories"];

export default function StoriesPage() {
  return (
    <div>
      <PageHeader title="Story Library" description="Curated voice story catalog with category filtering and offline support." />
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((category) => <Badge key={category} variant="neutral">{category}</Badge>)}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Card><CardTitle>Adventure: The Lost Observatory</CardTitle><CardDescription className="mt-2">22 min • Interactive questions • Explorer personality optimized.</CardDescription></Card>
        <Card><CardTitle>Science: Tiny Volcano Lab</CardTitle><CardDescription className="mt-2">18 min • Curiosity index booster • Vocabulary-rich script.</CardDescription></Card>
        <Card><CardTitle>Bedtime: Moonlight Forest</CardTitle><CardDescription className="mt-2">14 min • Calm pacing • Quiet-hours compatible.</CardDescription></Card>
      </div>
    </div>
  );
}
