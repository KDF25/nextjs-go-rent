import {
  CtaSection,
  DiscoverSection,
  FeaturesSection,
  HeroSection,
  FooterSection,
} from "@widgets/landing";
import { FC } from "react";

const LandingPage: FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
