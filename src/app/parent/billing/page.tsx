import { invoices } from "@/mock-data/data";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";

export default function BillingPage() {
  return (
    <div>
      <PageHeader title="Billing & Payments" description="Credit Card, Apple Pay, Google Pay, PayPal, invoices, taxes, promo codes, and receipts." />
      <Card className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="px-4 py-3 text-left">Invoice</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Method</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3 font-medium">{invoice.id}</td>
                  <td className="px-4 py-3">{invoice.date}</td>
                  <td className="px-4 py-3">{invoice.method}</td>
                  <td className="px-4 py-3">${invoice.amount}</td>
                  <td className="px-4 py-3"><Badge variant={invoice.status === "Paid" ? "default" : "warning"}>{invoice.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <Card className="mt-4">
        <CardTitle>Auto Renew, Coupons, and Tax</CardTitle>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Auto-renew is enabled. Last coupon applied: SUMMER25. Tax profile is verified for CA, US.</p>
      </Card>
    </div>
  );
}
