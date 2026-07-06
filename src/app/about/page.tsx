import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template";

export default function AboutPage() {
  return (
    <MarketingPageTemplate
      eyebrow="Our Mission"
      title="Building the world’s most trusted voice-first learning company."
      description="Hey Teacher was founded by parents, educators, and product leaders who wanted children to learn with AI without losing childhood to screens."
      highlights={[
        { title: "Education First", description: "Learning outcomes drive product decisions, not engagement hacks." },
        { title: "Family Trust", description: "Parent visibility and controls are core product primitives." },
        { title: "Global Vision", description: "Hardware + software + content designed for multi-market scale." },
      ]}
    />
  );
}
