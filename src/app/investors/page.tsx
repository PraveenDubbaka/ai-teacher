import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template";

export default function InvestorsPage() {
  return (
    <MarketingPageTemplate
      eyebrow="Investors"
      title="An educational hardware platform with software margins and recurring revenue."
      description="Hey Teacher combines defensible device IP, subscription monetization, educational content commerce, and family network effects."
      highlights={[
        { title: "Hardware + Subscription", description: "Device adoption fuels recurring SaaS-like revenue and retention." },
        { title: "Content Marketplace", description: "Third-party ecosystem expands value and gross margin potential." },
        { title: "Scalable GTM", description: "Family DTC, school pilots, and institutional partnerships support multi-channel growth." },
      ]}
    />
  );
}
