"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-2xl font-bold text-primary cursor-pointer">
                  Future Enerji
                </h1>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/">
                <span
                  className={`${
                    location === "/" ? "text-primary" : "text-gray-900"
                  } hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer`}
                >
                  {t("nav.home")}
                </span>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium"
                  >
                    {t("nav.corporate")}{" "}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/about-us">{t("nav.about")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/why-ileri-enerji">{t("nav.why")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/subsidiaries">{t("nav.subsidiaries")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/policies">{t("nav.policies")}</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/environment-policy">
                      {t("policies.environment")}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/health-safety-policy">
                      {t("policies.safety")}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/sectors">
                <span
                  className={`${
                    location === "/sectors" ? "text-primary" : "text-gray-900"
                  } hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer`}
                >
                  {t("nav.sectors")}
                </span>
              </Link>
              <Link href="/services">
                <span
                  className={`${
                    location === "/services" ? "text-primary" : "text-gray-900"
                  } hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer`}
                >
                  {t("nav.services")}
                </span>
              </Link>
              <Link href="/references">
                <span
                  className={`${
                    location === "/references"
                      ? "text-primary"
                      : "text-gray-900"
                  } hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer`}
                >
                  {t("nav.references")}
                </span>
              </Link>
              <Link href="/careers">
                <span
                  className={`${
                    location === "/careers" ? "text-primary" : "text-gray-900"
                  } hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer`}
                >
                  {t("nav.careers")}
                </span>
              </Link>
              <Link href="/contact">
                <span
                  className={`${
                    location === "/contact" ? "text-primary" : "text-gray-900"
                  } hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer`}
                >
                  {t("nav.contact")}
                </span>
              </Link>
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <Link href="/">
              <span className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.home")}
              </span>
            </Link>
            <Link href="/about-us">
              <span className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.about")}
              </span>
            </Link>
            <Link href="/why-ileri-enerji">
              <span className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.why")}
              </span>
            </Link>
            <Link href="/subsidiaries">
              <span className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.subsidiaries")}
              </span>
            </Link>
            <Link href="/policies">
              <span className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.policies")}
              </span>
            </Link>
            <Link href="/sectors">
              <span className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.sectors")}
              </span>
            </Link>
            <Link href="/services">
              <span className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.services")}
              </span>
            </Link>
            <Link href="/references">
              <span className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.references")}
              </span>
            </Link>
            <Link href="/careers">
              <span className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.careers")}
              </span>
            </Link>
            <Link href="/contact">
              <span className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.contact")}
              </span>
            </Link>
            <div className="px-3 py-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
