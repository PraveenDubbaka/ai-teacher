import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template";

export default function SchoolsPage() {
  return (
    <MarketingPageTemplate
      eyebrow="For Schools"
      title="Bring safe conversational learning to classrooms and aftercare programs."
      description="Deploy standards-aligned learning personalities, classroom-level controls, and district reporting with low setup overhead."
      highlights={[
        { title: "Classroom Profiles", description: "Teacher-managed voice environments with grade-level objectives." },
        { title: "Outcome Reporting", description: "Track engagement quality, concept mastery, and student progress." },
        { title: "Procurement Ready", description: "Support for school IT governance, pilot rollouts, and procurement workflows." },
      ]}
    />
  );
}
