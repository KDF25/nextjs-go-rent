import { IFeaturesCard } from "../types";
import { PATHS } from "@shared/config";

export const FeaturesCardsData: IFeaturesCard[] = [
  {
    imageSrc: "/landing-search1.png",
    title: "Trustworthy and Verified Listings",
    description:
      "Discover the best rental options with user reviews and ratings.",
    linkText: "Explore",
    linkHref: PATHS.EXPLORE,
  },
  {
    imageSrc: "/landing-search2.png",
    title: "Browse Rental Listings with Ease",
    description:
      "Get access to user reviews and ratings for a better understanding of rental options.",
    linkText: "Search",
    linkHref: PATHS.SEARCH,
  },
  {
    imageSrc: "/landing-search3.png",
    title: "Simplify Your Rental Search with Advanced",
    description:
      "Find trustworthy and verified rental listings to ensure a hassle-free experience.",
    linkText: "Discover",
    linkHref: PATHS.DISCOVER,
  },
];
