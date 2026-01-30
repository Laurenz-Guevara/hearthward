import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function Pricing() {
  return (
    <section className="min-h-screen">
      <MaxWidthWrapper>
        <Link
          href="/"
          className="underline underline-offset-4"
        >
          Home
        </Link>
        <p>Pricing</p>
      </MaxWidthWrapper>
    </section>
  );
}
