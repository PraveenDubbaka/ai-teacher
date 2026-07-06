import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function SupportPage() {
  return (
    <div>
      <PageHeader title="Support" description="FAQ, knowledge base, tutorials, live chat, warranty, and replacement workflows." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Card><CardTitle>FAQ</CardTitle><CardDescription className="mt-2">Curated answers on safety, billing, and setup.</CardDescription><Button className="mt-4" variant="secondary">Open FAQ</Button></Card>
        <Card><CardTitle>Knowledge Base</CardTitle><CardDescription className="mt-2">Device diagnostics and advanced controls docs.</CardDescription><Button className="mt-4" variant="secondary">Browse Articles</Button></Card>
        <Card><CardTitle>Live Chat</CardTitle><CardDescription className="mt-2">Chat with support specialists 24/7.</CardDescription><Button className="mt-4">Start Chat</Button></Card>
        <Card><CardTitle>Tutorials</CardTitle><CardDescription className="mt-2">Onboarding videos and parenting playbooks.</CardDescription><Button className="mt-4" variant="secondary">View Tutorials</Button></Card>
        <Card><CardTitle>Warranty</CardTitle><CardDescription className="mt-2">Track active warranty status for each device.</CardDescription><Button className="mt-4" variant="secondary">Check Warranty</Button></Card>
        <Card><CardTitle>Device Replacement</CardTitle><CardDescription className="mt-2">Start replacement process for faulty hardware.</CardDescription><Button className="mt-4">Request Replacement</Button></Card>
      </div>
    </div>
  );
}
