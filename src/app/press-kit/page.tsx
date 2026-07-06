import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template";

export default function PressKitPage() {
  return (
    <MarketingPageTemplate
      eyebrow="Press Kit"
      title="Brand assets, founder bios, and product media for editorial coverage."
      description="Access approved product descriptions, logo assets, executive quotes, and launch narratives for press and media partners."
      highlights={[
        { title: "Brand Assets", description: "Logos, product renders, and color system files for publication." },
        { title: "Executive Profiles", description: "Founding team biographies and mission statements." },
        { title: "Media Requests", description: "Interview scheduling and launch story support." },
      ]}
    />
  );
}
