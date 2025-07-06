'use client'
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Building,
  Leaf,
  Handshake,
  Award,
  Users,
  Lightbulb,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const getReasons = (t: (key: string) => string) => [
  {
    icon: Users,
    title: t("why.experience"),
    description: t("why.experience.desc"),
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Lightbulb,
    title: t("why.innovation"),
    description: t("why.innovation.desc"),
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Award,
    title: t("why.quality"),
    description: t("why.quality.desc"),
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Leaf,
    title: t("why.sustainability"),
    description: t("why.sustainability.desc"),
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Handshake,
    title: t("why.reliability"),
    description: t("why.reliability.desc"),
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Globe,
    title: t("why.global"),
    description: t("why.global.desc"),
    color: "bg-purple-100 text-purple-600",
  },
];

const getPartnerBenefits = (t: (key: string) => string) => [
  {
    title: t("why.partner.regional.title"),
    description: t("why.partner.regional.desc"),
    color: "bg-primary/10",
    dotColor: "bg-primary",
  },
  {
    title: t("why.partner.experience.title"),
    description: t("why.partner.experience.desc"),
    color: "bg-green-100",
    dotColor: "bg-green-600",
  },
  {
    title: t("why.partner.partnerships.title"),
    description: t("why.partner.partnerships.desc"),
    color: "bg-blue-100",
    dotColor: "bg-blue-600",
  },
  {
    title: t("why.partner.track.title"),
    description: t("why.partner.track.desc"),
    color: "bg-orange-100",
    dotColor: "bg-orange-600",
  },
];

export default function WhyIleriEnerjiPage() {
  const { t } = useLanguage();
  const reasons = getReasons(t);
  const partnerBenefits = getPartnerBenefits(t);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                {t("why.title")}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
                {t("why.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("why.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t("why.intro")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {reasons.map((reason, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 ${reason.color} rounded-lg flex items-center justify-center mb-6`}
                    >
                      <reason.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  {t("why.partner.title")}
                </h2>
                <div className="space-y-6">
                  {partnerBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`w-8 h-8 ${benefit.color} rounded-lg flex items-center justify-center mr-4 mt-1`}
                      >
                        <div
                          className={`w-3 h-3 ${benefit.dotColor} rounded-full`}
                        ></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Professional team collaboration"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
