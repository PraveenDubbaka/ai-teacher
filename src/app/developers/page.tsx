import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template";

export default function DevelopersPage() {
  return (
    <MarketingPageTemplate
      eyebrow="Developers"
      title="Build approved educational experiences on top of the Hey Teacher ecosystem."
      description="Our developer platform enables vetted partners to publish voice skills, curriculum modules, and adaptive learning packs."
      highlights={[
        { title: "Skill SDK", description: "Design voice-first educational flows with policy-safe APIs." },
        { title: "Moderation Layer", description: "Automatic checks for age alignment, safety, and quality before publishing." },
        { title: "Revenue Share", description: "Monetize approved packs through the marketplace subscription engine." },
      ]}
    />
  );
}
