"use client"

import { Suspense } from "react"
import { CreateAHouseholdForm } from "@/components/create-a-household-form"


export default function Household() {
  return (
    <section className="min-h-screen">
      <Suspense>
        <CreateAHouseholdForm />
      </Suspense>
    </section>
  )
}

