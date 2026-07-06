import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template";

export default function ContactPage() {
  return (
    <MarketingPageTemplate
      eyebrow="Contact"
      title="Talk to our team about pilots, partnerships, and early access."
      description="Families, schools, and investors can request demos, beta onboarding, and strategic partnership discussions."
      highlights={[
        { title: "Family Waitlist", description: "Join upcoming device and content launch cohorts." },
        { title: "School Pilots", description: "Apply for structured classroom pilot programs." },
        { title: "Strategic Partnerships", description: "Discuss ecosystem, channel, and distribution opportunities." },
      ]}
    />
  );
}
