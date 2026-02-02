import { Separator } from "@/components/ui/separator";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PriceCardProps } from "@/types/pricing";

export function PriceCard({ priceCard, isAnnual }: { priceCard: PriceCardProps, isAnnual: boolean }) {
  const price = isAnnual ? priceCard.annualMonthlyPrice : priceCard.monthlyPrice

  return (
    <div className="bg-secondary rounded-xl p-4 space-y-4 flex flex-col flex-1">
      <div className="space-y-4">
        <div>
          <p className="text-lg">{priceCard.title}</p>
          <p className="text-xl">
            £{price} <span className="text-sm text-muted-foreground">{isAnnual ? "per month (billed yearly)" : "per month"}</span>
          </p>
          <p className="text-muted-foreground pt-2">{priceCard.description}</p>
        </div>
        <Button
          className={cn(
            "w-full rounded-xl",
            priceCard.title === "Family" && "bg-green-500"
          )}
          asChild
        >
          <Link href={priceCard.paymentLink} target="_blank">
            Get started with the {priceCard.title} plan
          </Link>
        </Button>
        <Separator />
      </div>
      <div>
        <p>What&apos;s included</p>
        <ul className="space-y-1 pt-2">
          {priceCard.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center">
              <IconCheck size={16} className="mr-2" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

