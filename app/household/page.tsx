import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Link from "next/link";

export default function Household() {
  return (
    <section className="min-h-screen">
      <MaxWidthWrapper>
        <Link
          href="/"
          className="underline underline-offset-4"
        >
          Home
        </Link>
        <p>Household</p>
      </MaxWidthWrapper>
    </section>
  )
}
