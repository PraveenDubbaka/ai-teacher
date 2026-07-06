import { children } from "@/mock-data/data";
import { LearningChart } from "@/components/shared/learning-chart";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LearningPage() {
  return (
    <div>
      <PageHeader title="Learning Analytics" description="Weekly, monthly, and yearly voice-learning insights with actionable recommendations." />
      <Tabs defaultValue="weekly">
        <TabsList>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>
        <TabsContent value="weekly" className="mt-4"><Card><LearningChart /></Card></TabsContent>
        <TabsContent value="monthly" className="mt-4"><Card><LearningChart /></Card></TabsContent>
        <TabsContent value="yearly" className="mt-4"><Card><LearningChart /></Card></TabsContent>
      </Tabs>

      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        <Card><CardTitle>Vocabulary Growth</CardTitle><CardDescription className="mt-2">+260 terms this month across science and stories.</CardDescription></Card>
        <Card><CardTitle>Subject Distribution</CardTitle><CardDescription className="mt-2">Science 34%, Reading 29%, Math 24%, History 13%.</CardDescription></Card>
        <Card><CardTitle>Learning Streak Heatmap</CardTitle><CardDescription className="mt-2">Weekend consistency is strongest for both children.</CardDescription></Card>
      </div>

      <Card className="mt-4">
        <CardTitle>Favorite Topics and Recommendations</CardTitle>
        <div className="mt-3 flex flex-wrap gap-2">
          {children.flatMap((c) => c.favoriteSubjects).map((topic, index) => <Badge key={`${topic}-${index}`}>{topic}</Badge>)}
        </div>
      </Card>
    </div>
  );
}
