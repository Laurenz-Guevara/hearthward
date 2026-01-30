import { CTABlock } from "@/components/cta-block";
import { HeroBanner } from "@/components/hero-banner";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { MediaContentRightCard } from "@/components/media-content-right-card";
import { MultiBlockCard } from "@/components/multi-block-card";

export default function Home() {
  return (
    <section className="space-y-10 sm:space-y-20 py-20">
      <MaxWidthWrapper className="space-y-10 sm:space-y-20">
        <MediaContentRightCard />
        <MultiBlockCard />
      </MaxWidthWrapper>
      <HeroBanner />
      <MaxWidthWrapper className="space-y-10 sm:space-y-20">
        <CTABlock />
      </MaxWidthWrapper>
    </section>
  );
}
