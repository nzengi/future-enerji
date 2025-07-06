'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Leaf, Shield } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PoliciesPage() {
  const { t } = useLanguage();

  const getQualityPolicyPoints = () => [
    t("policies.quality.point1"),
    t("policies.quality.point2"),
    t("policies.quality.point3"),
    t("policies.quality.point4"),
    t("policies.quality.point5"),
    t("policies.quality.point6"),
  ];

  const getEnvironmentalPolicyPoints = () => [
    t("policies.environment.point1"),
    t("policies.environment.point2"),
    t("policies.environment.point3"),
    t("policies.environment.point4"),
  ];

  const getSafetyPolicyPoints = () => [
    t("policies.safety.point1"),
    t("policies.safety.point2"),
    t("policies.safety.point3"),
    t("policies.safety.point4"),
    t("policies.safety.point5"),
    t("policies.safety.point6"),
    t("policies.safety.point7"),
    t("policies.safety.point8"),
    t("policies.safety.point9"),
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                {t("policies.hero.title")}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
                {t("policies.hero.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("policies.commitment.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t("policies.commitment.desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {/* Quality Policy */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 border-0">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t("policies.quality.title")}
                  </h3>
                  <div className="space-y-4">
                    {getQualityPolicyPoints().map((point, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Environmental Policy */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 p-8 border-0">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t("policies.environment.title")}
                  </h3>
                  <div className="space-y-4">
                    {getEnvironmentalPolicyPoints().map((point, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link href="/environment-policy">
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        {t("policies.environment.button")}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Health & Safety Policy */}
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 border-0">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t("policies.safety.title")}
                  </h3>
                  <div className="space-y-4">
                    {getSafetyPolicyPoints().map((point, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link href="/health-safety-policy">
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                        {t("policies.safety.button")}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Implementation Section */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("policies.implementation.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                  {t("policies.implementation.desc")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t("policies.implementation.quality.title")}
                    </h4>
                    <p className="text-gray-600">
                      {t("policies.implementation.quality.desc")}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Leaf className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t("policies.implementation.env.title")}
                    </h4>
                    <p className="text-gray-600">
                      {t("policies.implementation.env.desc")}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t("policies.implementation.safety.title")}
                    </h4>
                    <p className="text-gray-600">
                      {t("policies.implementation.safety.desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
