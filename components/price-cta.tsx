"use client"

import { Separator } from "@/components/ui/separator";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function PriceCTA() {
  const [annual, setAnnual] = useState(true)
  return (
    <div className="space-y-4">
      <div className="flex justify-center items-center space-x-2">
        <Switch defaultChecked={annual} onCheckedChange={setAnnual} />
        <Label className="text-xl" htmlFor="toggle yearly or monthly pricing">{annual ? "Yearly Pricing" : "Monthly Pricing"}</Label>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 space-y-4 lg:space-y-0 lg:space-x-4 justify-center">
        {membershipPlans.map((plan) => (
          <PriceCard key={plan.title} {...plan} annual={annual} />
        ))}
      </div>
    </div>
  )
}

interface PriceCardProps {
  title: string;
  monthlyPrice: string;
  annualMonthlyPrice: string;
  description: string;
  benefits: string[];
  paymentLink: string;
}

interface PriceCardComponentProps extends PriceCardProps {
  annual: boolean;
}

function PriceCard({ title, monthlyPrice, annualMonthlyPrice, description, benefits, paymentLink, annual, }: PriceCardComponentProps) {
  const price = annual ? annualMonthlyPrice : monthlyPrice

  return (
    <div className="bg-secondary rounded-xl p-4 space-y-4 flex flex-col flex-1">
      <div className="space-y-4">
        <div>
          <p className="text-lg">{title}</p>
          <p className="text-xl">
            £{price} <span className="text-sm text-muted-foreground">{annual ? "per month (billed yearly)" : "per month"}</span>
          </p>
          <p className="text-muted-foreground pt-2">{description}</p>
        </div>
        <Button
          className={cn(
            "w-full rounded-xl",
            title === "Family" && "bg-green-500"
          )}
          asChild
        >
          <Link href={paymentLink} target="_blank">
            Get started with the {title} plan
          </Link>
        </Button>
        <Separator />
      </div>
      <div>
        <p>What&apos;s included</p>
        <ul className="space-y-1 pt-2">
          {benefits.map((benefit) => (
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

const membershipPlans: PriceCardProps[] = [
  {
    title: "Free",
    monthlyPrice: "0",
    annualMonthlyPrice: "0",
    description: "For those who have two pets",
    benefits: [
      "Online profile for up to two pets",
      "Mark a pet as missing",
      "In-app notifications if your pet is found",
      "Two smart tags for your pets"
    ],
    paymentLink: "#"
  },
  {
    title: "Family",
    monthlyPrice: "3.49",
    annualMonthlyPrice: "2.79",
    description: "For those who have five pets",
    benefits: [
      "Everything in free tier",
      "Have up to five pet profiles",
      "Add up to two people to your household",
      "In-app and email notifcations if your pet is found",
      "Five smart tags for your pets"
    ],
    paymentLink: "#"
  },
  {
    title: "Hearth",
    monthlyPrice: "4.99",
    annualMonthlyPrice: "3.49",
    description: "For those who have many pets",
    benefits: [
      "Everything in family and free tier",
      "Have up to ten people in your household",
      "No limit on how many pets you can add",
      "In-app, email and SMS notifications if your pet is found",
      "Durable and waterproof smart tag",
      "Unlimited tag replacements"
    ],
    paymentLink: "#"
  }
]

