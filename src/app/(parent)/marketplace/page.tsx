import { storyPacks } from "@/mock-data/data";
import { PageHeader } from "@/components/shared/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function MarketplacePage() {
  return (
    <div>
      <PageHeader title="Marketplace" description="Story packs, learning packs, bundles, reviews, wishlist, and purchase history." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {storyPacks.map((pack) => (
          <Card key={pack.id}>
            <CardTitle>{pack.title}</CardTitle>
            <CardDescription className="mt-2">{pack.category}</CardDescription>
            <div className="mt-3 flex items-center gap-2">
              <Badge>{pack.rating} stars</Badge>
              <Badge variant="neutral">{pack.reviews} reviews</Badge>
              {pack.premium ? <Badge variant="warning">Premium</Badge> : null}
            </div>
            <p className="mt-4 text-lg font-semibold">${pack.price.toFixed(2)}</p>
            <div className="mt-4 flex gap-2">
              <Button className="flex-1">Purchase</Button>
              <Button variant="secondary" className="flex-1">Wishlist</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
