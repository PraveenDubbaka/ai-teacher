import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template";

export default function PrivacyPage() {
  return (
    <MarketingPageTemplate
      eyebrow="Privacy"
      title="Parents own visibility. Children deserve dignity."
      description="We minimize data collection, secure all learning data channels, and give families clear controls over retention and sharing."
      highlights={[
        { title: "Data Controls", description: "Manage retention windows, export history, and account-level permissions." },
        { title: "Encryption", description: "Secure transit and storage patterns across device and cloud endpoints." },
        { title: "Transparency", description: "Clear policy language designed for parent trust and institutional review." },
      ]}
    />
  );
}
