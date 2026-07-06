import { children } from "@/mock-data/data";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ChildrenPage() {
  return (
    <div>
      <PageHeader title="Children" description="Profiles, timeline, achievements, reading progress, and personalized recommendations." />

      <Tabs defaultValue="grid">
        <TabsList>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="mt-4 grid gap-4 md:grid-cols-2">
          {children.map((child) => (
            <Card key={child.id}>
              <CardTitle>{child.name}</CardTitle>
              <CardDescription className="mt-2">{child.age} years • {child.grade} • Reading {child.readingLevel}</CardDescription>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">Vocabulary: {child.vocabulary}</div>
                <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">Learning score: {child.learningScore}</div>
                <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">Curiosity index: {child.curiosityIndex}</div>
                <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">Streak: {child.streak} days</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {child.favoriteSubjects.map((subject) => <Badge key={subject}>{subject}</Badge>)}
                <Badge variant="neutral">Favorite personality: {child.favoritePersonality}</Badge>
              </div>
              <div className="mt-4 rounded-2xl bg-white/70 p-4 text-sm dark:bg-slate-900/50">
                <p className="font-medium">Learning Timeline + Heatmap + Recommendations</p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">Strong performance in weekend stories. Recommendation: increase homework-only mode to 30 minutes on weekdays.</p>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="list" className="mt-4">
          <Card className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th className="px-4 py-3 text-left">Profile</th>
                    <th className="px-4 py-3 text-left">Progress</th>
                    <th className="px-4 py-3 text-left">Goals</th>
                    <th className="px-4 py-3 text-left">Export</th>
                  </tr>
                </thead>
                <tbody>
                  {children.map((child) => (
                    <tr key={child.id} className="border-t border-slate-100 dark:border-slate-800">
                      <td className="px-4 py-3">{child.name} • {child.grade}</td>
                      <td className="px-4 py-3">Score {child.learningScore} • Vocab {child.vocabulary}</td>
                      <td className="px-4 py-3">Weekly reading + curiosity challenges</td>
                      <td className="px-4 py-3 text-teal-700">Export PDF</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
