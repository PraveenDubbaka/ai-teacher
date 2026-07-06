import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template";

export default function ParentsPage() {
  return (
    <MarketingPageTemplate
      eyebrow="For Parents"
      title="Give your child curiosity without surrendering control."
      description="Parents set schedules, review conversations, receive weekly reports, and guide each child learning journey from one dashboard."
      highlights={[
        { title: "Conversation Visibility", description: "Replay and review what your child asked and how the AI responded." },
        { title: "Topic Controls", description: "Allow, block, and customize learning topics by age and family values." },
        { title: "Progress Signals", description: "Track vocabulary growth, consistency, and confidence each week." },
      ]}
    />
  );
}
