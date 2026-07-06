import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template";

export default function CareersPage() {
  return (
    <MarketingPageTemplate
      eyebrow="Careers"
      title="Join the team building the future of safe AI education."
      description="We are hiring across AI research, hardware engineering, curriculum design, child safety, and platform product roles."
      highlights={[
        { title: "Mission-Driven Culture", description: "Work on products that impact childhood learning outcomes globally." },
        { title: "Cross-Functional Team", description: "Collaborate with educators, designers, engineers, and policy specialists." },
        { title: "Growth Stage Impact", description: "Shape foundational systems in a fast-scaling education hardware company." },
      ]}
    />
  );
}
