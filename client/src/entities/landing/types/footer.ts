import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface IFooterLink {
  href: string;
  title: string;
}

export interface IFooterSocialLink {
  href: string;
  ariaLabel: string;
  icon: IconDefinition;
}

export interface IFooterBottomLink {
  href: string;
  title: string;
}
