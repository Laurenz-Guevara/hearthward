"use client"

import { useState } from "react";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { PriceCard } from "@/components/price-card";
import { PriceCardProps } from "@/types/pricing";

export function PriceCTA({ membershipPlans }: { membershipPlans: PriceCardProps[] }) {
  const [isAnnual, setIsAnnual] = useState(true)
  return (
    <div className="space-y-4">
      <div className="flex justify-center items-center space-x-2">
        <Switch defaultChecked={isAnnual} onCheckedChange={setIsAnnual} />
        <Label className="text-xl" htmlFor="toggle yearly or monthly pricing">{isAnnual ? "Yearly Pricing" : "Monthly Pricing"}</Label>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 space-y-4 lg:space-y-0 lg:space-x-4 justify-center">
        {membershipPlans.map((plan) => (
          <PriceCard key={plan.title} priceCard={plan} isAnnual={isAnnual} />
        ))}
      </div>
    </div>
  )
}

