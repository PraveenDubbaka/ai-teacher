import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";

const conversations = [
  { time: "07:12 PM", category: "Science", child: "Aarav", user: "Why do stars twinkle?", ai: "Because starlight passes through moving layers of air." },
  { time: "08:35 PM", category: "Bedtime", child: "Maya", user: "Tell me a friendship story.", ai: "Once in a gentle forest, two foxes learned to share..." },
  { time: "04:10 PM", category: "Homework", child: "Aarav", user: "Help me with fractions.", ai: "Think of a pizza cut into equal pieces..." },
];

export default function ConversationHistoryPage() {
  return (
    <div>
      <PageHeader title="Conversation History" description="Timeline, replay, search, categories, bookmarks, exports, and deletion controls." />
      <div className="space-y-3">
        {conversations.map((conversation) => (
          <Card key={`${conversation.time}-${conversation.child}`}>
            <div className="flex items-center justify-between gap-2">
              <CardTitle>{conversation.child} • {conversation.time}</CardTitle>
              <Badge>{conversation.category}</Badge>
            </div>
            <p className="mt-3 text-sm"><span className="font-medium">Child:</span> {conversation.user}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300"><span className="font-medium text-slate-900 dark:text-slate-100">AI:</span> {conversation.ai}</p>
            <div className="mt-3 flex gap-2 text-xs text-teal-700 dark:text-teal-300">
              <span>Replay</span><span>Bookmark</span><span>Export</span><span>Delete</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
