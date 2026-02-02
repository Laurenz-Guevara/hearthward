import { PriceCardProps } from "@/types/pricing";

export const membershipPlans: PriceCardProps[] = [
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
