"use client";

import { Facebook, Twitter, Linkedin, Zap } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="rounded-lg bg-gradient-to-r from-energy-500 to-solar-500 p-2">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Future Enerji</h3>
            </div>
            <p className="text-gray-400 mb-4">{t("footer.description")}</p>
            <a
              href="https://www.futureenerji.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-energy-400 hover:text-energy-300 text-sm transition-colors mb-4 inline-block"
            >
              www.futureenerji.com
            </a>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.corporate")}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about-us">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {t("nav.about")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/why-future-energy">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {t("nav.why")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/subsidiaries">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {t("nav.subsidiaries")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/policies">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {t("nav.policies")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/sectors">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {t("nav.sectors")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {t("nav.services")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/references">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {t("nav.references")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/careers">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {t("nav.careers")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {t("nav.contact")}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t("footer.rights")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 