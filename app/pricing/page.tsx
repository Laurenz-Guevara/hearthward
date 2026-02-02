import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { PriceCTA } from "@/components/price-cta";

export default function Pricing() {
  return (
    <section className="min-h-screen">
      <MaxWidthWrapper>
        <PriceCTA />
      </MaxWidthWrapper>
    </section>
  );
}
