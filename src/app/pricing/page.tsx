import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template";

export default function PricingPage() {
  return (
    <MarketingPageTemplate
      eyebrow="Pricing"
      title="Flexible plans for families, schools, and global partners."
      description="Start free, upgrade as your child grows, and unlock multi-device experiences with integrated learning analytics."
      highlights={[
        { title: "Free", description: "Introductory voice sessions, limited insights, single profile support." },
        { title: "Premium", description: "Full learning graph, personality library, and weekly recommendations." },
        { title: "Enterprise", description: "District deployments, integrations, and white-label hardware partnerships." },
      ]}
    />
  );
}
