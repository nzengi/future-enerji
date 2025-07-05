"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function AboutUsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t("about.title")}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                {t("about.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("about.who.title")}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t("about.who.desc1")}
                </p>
                <p className="text-lg text-gray-600">{t("about.who.desc2")}</p>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Modern energy facility"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* More Than a Solution Partner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("about.solution.title")}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {t("about.solution.desc1")}
                </p>
                <p className="text-lg text-gray-600">
                  {t("about.solution.desc2")}
                </p>
              </div>
              <div className="lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Professional business partnership"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Expertise That Delivers */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                {t("about.expertise.title")}
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 mb-6">
                  {t("about.expertise.desc1")}
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  {t("about.expertise.desc2")}
                </p>
                <p className="text-lg text-gray-600">
                  {t("about.expertise.desc3")}
                </p>
              </div>
            </div>

            {/* Bridging Global and Local */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("about.global.title")}
                </h2>
                <p className="text-lg text-gray-600">
                  {t("about.global.desc")}
                </p>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Global energy infrastructure"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Powering the Future */}
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 border-0">
              <CardContent className="p-0 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("about.future.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  {t("about.future.desc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
