'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Shield, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function EnvironmentPolicyPage() {
  const { t } = useLanguage();

  const getPolicyPoints = () => [
    {
      icon: Target,
      title: t("environment.point1.title"),
      description: t("environment.point1.desc"),
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Leaf,
      title: t("environment.point2.title"),
      description: t("environment.point2.desc"),
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Recycle,
      title: t("environment.point3.title"),
      description: t("environment.point3.desc"),
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Shield,
      title: t("environment.point4.title"),
      description: t("environment.point4.desc"),
      color: "bg-primary/10 text-primary",
    },
  ];

  const getCommitments = () => [
    {
      title: t("environment.commitment1.title"),
      description: t("environment.commitment1.desc"),
      color: "bg-green-600",
    },
    {
      title: t("environment.commitment2.title"),
      description: t("environment.commitment2.desc"),
      color: "bg-blue-600",
    },
    {
      title: t("environment.commitment3.title"),
      description: t("environment.commitment3.desc"),
      color: "bg-orange-600",
    },
    {
      title: t("environment.commitment4.title"),
      description: t("environment.commitment4.desc"),
      color: "bg-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                {t("environment.hero.title")}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
                {t("environment.hero.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("environment.policy.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {t("environment.policy.desc")}
              </p>
            </div>

            {/* Policy Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {getPolicyPoints().map((point, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start">
                      <div
                        className={`w-16 h-16 ${point.color} rounded-lg flex items-center justify-center mr-6 flex-shrink-0`}
                      >
                        <point.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {point.title}
                        </h3>
                        <p className="text-gray-600 text-lg">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Environmental Commitments */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-12 mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("environment.commitments.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  {t("environment.commitments.desc")}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Environmental sustainability and renewable energy"
                    width={800}
                    height={600}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
                <div className="space-y-6">
                  {getCommitments().map((commitment, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`w-8 h-8 ${commitment.color} rounded-full flex items-center justify-center mr-4 mt-1`}
                      >
                        <span className="text-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {commitment.title}
                        </h4>
                        <p className="text-gray-600">
                          {commitment.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("environment.impact.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
                {t("environment.impact.desc")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t("environment.impact.renewable.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("environment.impact.renewable.desc")}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Recycle className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t("environment.impact.circular.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("environment.impact.circular.desc")}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-10 w-10 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t("environment.impact.protection.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("environment.impact.protection.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("environment.cta.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              {t("environment.cta.desc")}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
