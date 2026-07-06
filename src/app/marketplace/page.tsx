import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template";

export default function MarketplacePage() {
  return (
    <MarketingPageTemplate
      eyebrow="Marketplace"
      title="Premium educational content packs designed for voice learning."
      description="Choose from curated story packs, science adventures, language journeys, coding quests, and seasonal bundles."
      highlights={[
        { title: "Story Packs", description: "Narrative-led listening, comprehension, and vocabulary development." },
        { title: "STEM Quests", description: "Interactive experiments, space missions, and math adventures." },
        { title: "Bundle Economics", description: "Subscription and one-time bundles with family-friendly pricing tiers." },
      ]}
    />
  );
}
