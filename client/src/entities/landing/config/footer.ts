import { IFooterLink, IFooterSocialLink, IFooterBottomLink } from "../types";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { PATHS } from "@shared/config";

export const FooterLinksData: IFooterLink[] = [
  {
    href: "/about",
    title: "About Us",
  },
  {
    href: "/contact",
    title: "Contact Us",
  },
  {
    href: "/faq",
    title: "FAQ",
  },
  {
    href: "/terms",
    title: "Terms",
  },
  {
    href: "/privacy",
    title: "Privacy",
  },
];

export const FooterSocialLinksData: IFooterSocialLink[] = [
  {
    href: "#",
    ariaLabel: "Facebook",
    icon: faFacebook,
  },
  {
    href: "#",
    ariaLabel: "Instagram",
    icon: faInstagram,
  },
  {
    href: "#",
    ariaLabel: "Twitter",
    icon: faTwitter,
  },
  {
    href: "#",
    ariaLabel: "Linkedin",
    icon: faLinkedin,
  },
  {
    href: "#",
    ariaLabel: "Youtube",
    icon: faYoutube,
  },
];

export const FooterBottomLinksData: IFooterBottomLink[] = [
  {
    href: PATHS.PRIVACY,
    title: "Privacy Policy",
  },
  {
    href: PATHS.TERMS,
    title: "Terms of Service",
  },
  {
    href: PATHS.COOKIES,
    title: "Cookie Policy",
  },
];
