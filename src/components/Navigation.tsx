"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
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
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = usePathname();
  const { t, language } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      {/* Top Info Bar */}
      <div className="mx-auto hidden h-10 w-full max-w-7xl items-center justify-between border-b border-gray-100 bg-gray-50 px-4 text-sm text-gray-700 md:flex lg:px-8">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <a href="mailto:info@futureenerji.com" className="hover:underline">
              info@futureenerji.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Eski Büyükdere Cad. Maslak No:1, Sarıyer/İSTANBUL</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:+902122864384" className="hover:underline">
              +90 212 286 43 84
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="LinkedIn" className="hover:text-primary">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-primary">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-primary">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-primary">
            <Instagram className="h-4 w-4" />
          </a>
          <div className="ml-2 rounded border border-gray-200 bg-white px-2 py-0.5 shadow">
            <LanguageSelector />
          </div>
        </div>
      </div>
      {/* Main Nav Bar */}
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex min-w-0 items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center"
                aria-label="Future Enerji"
              >
                <Image
                  src="/logo.svg"
                  alt="Future Enerji Logo"
                  width={40}
                  height={40}
                  priority
                  className="h-10 w-auto"
                />
                <span className="ml-2 hidden truncate text-xl font-bold text-primary sm:inline">
                  Future Enerji
                </span>
              </Link>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link href="/">
                <span
                  className={`${location === "/" ? "text-primary" : "text-gray-900"} cursor-pointer px-3 py-2 text-sm font-medium transition-colors hover:text-primary`}
                >
                  {t("nav.home")}
                </span>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-primary"
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
                  className={`${location === "/sectors" ? "text-primary" : "text-gray-900"} cursor-pointer px-3 py-2 text-sm font-medium transition-colors hover:text-primary`}
                >
                  {t("nav.sectors")}
                </span>
              </Link>
              <Link href="/services">
                <span
                  className={`${location === "/services" ? "text-primary" : "text-gray-900"} cursor-pointer px-3 py-2 text-sm font-medium transition-colors hover:text-primary`}
                >
                  {t("nav.services")}
                </span>
              </Link>
              <Link href="/references">
                <span
                  className={`${location === "/references" ? "text-primary" : "text-gray-900"} cursor-pointer px-3 py-2 text-sm font-medium transition-colors hover:text-primary`}
                >
                  {t("nav.references")}
                </span>
              </Link>
              <Link href="/careers">
                <span
                  className={`${location === "/careers" ? "text-primary" : "text-gray-900"} cursor-pointer px-3 py-2 text-sm font-medium transition-colors hover:text-primary`}
                >
                  {t("nav.careers")}
                </span>
              </Link>
              <Link href="/contact">
                <span
                  className={`${location === "/contact" ? "text-primary" : "text-gray-900"} cursor-pointer px-3 py-2 text-sm font-medium transition-colors hover:text-primary`}
                >
                  {t("nav.contact")}
                </span>
              </Link>
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
          <div className="space-y-1 border-t border-gray-100 bg-white px-2 pb-3 pt-2 sm:px-3">
            <Link href="/">
              <span className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.home")}
              </span>
            </Link>
            <Link href="/about-us">
              <span className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.about")}
              </span>
            </Link>
            <Link href="/why-ileri-enerji">
              <span className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.why")}
              </span>
            </Link>
            <Link href="/subsidiaries">
              <span className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.subsidiaries")}
              </span>
            </Link>
            <Link href="/policies">
              <span className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.policies")}
              </span>
            </Link>
            <Link href="/sectors">
              <span className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.sectors")}
              </span>
            </Link>
            <Link href="/services">
              <span className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.services")}
              </span>
            </Link>
            <Link href="/references">
              <span className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.references")}
              </span>
            </Link>
            <Link href="/careers">
              <span className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.careers")}
              </span>
            </Link>
            <Link href="/contact">
              <span className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:text-primary">
                {t("nav.contact")}
              </span>
            </Link>
            <div className="flex items-center gap-4 px-3 py-2">
              <a href="#" aria-label="LinkedIn" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <LanguageSelector />
              <a
                href="/contact"
                className="ml-2 rounded bg-primary px-4 py-1.5 text-xs font-medium text-white transition hover:bg-primary/90"
              >
                {language === "tr" ? "Teklif Al" : "Get a Quote"}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
