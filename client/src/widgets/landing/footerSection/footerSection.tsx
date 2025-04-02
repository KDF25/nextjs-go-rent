import {
  FooterBottomLinksData,
  FooterLinksData,
  FooterSocialLinksData,
} from "@entities/landing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { paths } from "@shared/config";
import Link from "next/link";
import { FC } from "react";

export const FooterSection: FC = () => {
  return (
    <footer className="py-20 border-t border-gray-200">
      <div className="max-w-4xl px-6 mx-auto sm:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4">
            <Link
              href={paths.main}
              className="text-xl font-bold"
              scroll={false}
            >
              GORENT
            </Link>
          </div>
          <nav className="mb-4">
            <ul className="flex space-x-6">
              {FooterLinksData.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex mb-4 space-x-4">
            {FooterSocialLinksData.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.ariaLabel}
                className="hover:text-primary-600"
              >
                <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4 text-sm text-center text-gray-500">
          <span>© Go Rent. All rights reserved.</span>
          {FooterBottomLinksData.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
