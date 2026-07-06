import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template";

export default function SafetyPage() {
  return (
    <MarketingPageTemplate
      eyebrow="Safety"
      title="Safety-by-design architecture for children, parents, and educators."
      description="Hey Teacher combines policy-aware response systems, parent controls, and continuous review loops to protect trust."
      highlights={[
        { title: "Age Boundaries", description: "Responses dynamically tuned to age, context, and maturity level." },
        { title: "Sensitive Topic Queue", description: "Escalation and review workflows for conversations that require adult visibility." },
        { title: "Compliance Track", description: "Built with COPPA-ready patterns and audit-friendly policy frameworks." },
      ]}
    />
  );
}
