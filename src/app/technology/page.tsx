import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template";

export default function TechnologyPage() {
  return (
    <MarketingPageTemplate
      eyebrow="Technology"
      title="A safety-led AI stack purpose-built for childhood learning."
      description="Our voice pipeline combines wake-word accuracy, educational intent modeling, and parent policy controls before every response is spoken."
      highlights={[
        { title: "Voice Understanding", description: "Far-field recognition and child speech adaptation for noisy home environments." },
        { title: "Safety Mediation", description: "All interactions pass through age policy, topic boundaries, and sensitivity checks." },
        { title: "Learning Graph", description: "Question patterns, concept mastery, and curiosity signals personalize every session." },
      ]}
    />
  );
}
