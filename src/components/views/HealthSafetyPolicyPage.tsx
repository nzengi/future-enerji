'use client'

import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Users,
  AlertTriangle,
  Target,
  BookOpen,
  Award,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const getPolicyPoints = (t: (key: string) => string) => [
  {
    icon: Shield,
    title: t("healthsafety.point1.title"),
    description: t("healthsafety.point1.desc"),
    color: "bg-red-100 text-red-600",
  },
  {
    icon: AlertTriangle,
    title: t("healthsafety.point2.title"),
    description: t("healthsafety.point2.desc"),
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Target,
    title: t("healthsafety.point3.title"),
    description: t("healthsafety.point3.desc"),
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: CheckCircle,
    title: t("healthsafety.point4.title"),
    description: t("healthsafety.point4.desc"),
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Award,
    title: t("healthsafety.point5.title"),
    description: t("healthsafety.point5.desc"),
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: BookOpen,
    title: t("healthsafety.point6.title"),
    description: t("healthsafety.point6.desc"),
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: TrendingUp,
    title: t("healthsafety.point7.title"),
    description: t("healthsafety.point7.desc"),
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Users,
    title: t("healthsafety.point8.title"),
    description: t("healthsafety.point8.desc"),
    color: "bg-pink-100 text-pink-600",
  },
];

const getPrinciples = (t: (key: string) => string) => [
  {
    title: t("healthsafety.principle1.title"),
    description: t("healthsafety.principle1.desc"),
    color: "bg-red-600",
  },
  {
    title: t("healthsafety.principle2.title"),
    description: t("healthsafety.principle2.desc"),
    color: "bg-orange-600",
  },
  {
    title: t("healthsafety.principle3.title"),
    description: t("healthsafety.principle3.desc"),
    color: "bg-blue-600",
  },
  {
    title: t("healthsafety.principle4.title"),
    description: t("healthsafety.principle4.desc"),
    color: "bg-green-600",
  },
];

const getStandards = (t: (key: string) => string) => [
  {
    icon: BookOpen,
    title: t("healthsafety.standard1.title"),
    description: t("healthsafety.standard1.desc"),
    color: "bg-red-100",
  },
  {
    icon: Award,
    title: t("healthsafety.standard2.title"),
    description: t("healthsafety.standard2.desc"),
    color: "bg-orange-100",
  },
  {
    icon: TrendingUp,
    title: t("healthsafety.standard3.title"),
    description: t("healthsafety.standard3.desc"),
    color: "bg-blue-100",
  },
];

const getResponsibilities = (t: (key: string) => string) => [
  {
    icon: Users,
    title: t("healthsafety.responsibility1.title"),
    description: t("healthsafety.responsibility1.desc"),
    color: "bg-primary",
  },
  {
    icon: CheckCircle,
    title: t("healthsafety.responsibility2.title"),
    description: t("healthsafety.responsibility2.desc"),
    color: "bg-green-600",
  },
  {
    icon: AlertTriangle,
    title: t("healthsafety.responsibility3.title"),
    description: t("healthsafety.responsibility3.desc"),
    color: "bg-orange-600",
  },
  {
    icon: Target,
    title: t("healthsafety.responsibility4.title"),
    description: t("healthsafety.responsibility4.desc"),
    color: "bg-blue-600",
  },
];

export default function HealthSafetyPolicyPage() {
  const { t } = useLanguage();
  const policyPoints = getPolicyPoints(t);
  const principles = getPrinciples(t);
  const standards = getStandards(t);
  const responsibilities = getResponsibilities(t);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t("healthsafety.hero.title")}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                {t("healthsafety.hero.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("healthsafety.policy.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {t("healthsafety.policy.desc")}
              </p>
            </div>

            {/* Policy Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {policyPoints.map((point, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start">
                      <div
                        className={`w-14 h-14 ${point.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}
                      >
                        <point.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {point.title}
                        </h3>
                        <p className="text-gray-600">{point.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Core Principles */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-12 mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("healthsafety.principles.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  {t("healthsafety.principles.desc")}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Safety equipment and workplace safety"
                    width={800}
                    height={600}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
                <div className="space-y-6">
                  {principles.map((principle, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`w-8 h-8 ${principle.color} rounded-full flex items-center justify-center mr-4 mt-1`}
                      >
                        <span className="text-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {principle.title}
                        </h4>
                        <p className="text-gray-600">{principle.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Safety Standards */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("healthsafety.standards.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
                {t("healthsafety.standards.desc")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {standards.map((standard, index) => (
                  <Card
                    key={index}
                    className="p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div
                        className={`w-16 h-16 ${standard.color} rounded-lg flex items-center justify-center mx-auto mb-6`}
                      >
                        <standard.icon className="h-8 w-8 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {standard.title}
                      </h3>
                      <p className="text-gray-600">{standard.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Responsibility Framework */}
            <div className="bg-gray-50 rounded-xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("healthsafety.framework.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  {t("healthsafety.framework.desc")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start">
                    <div
                      className={`w-12 h-12 ${responsibility.color} rounded-lg flex items-center justify-center mr-4`}
                    >
                      <responsibility.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {responsibility.title}
                      </h4>
                      <p className="text-gray-600">
                        {responsibility.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("healthsafety.cta.title")}
            </h2>
            <p className="text-lg max-w-4xl mx-auto">
              {t("healthsafety.cta.desc")}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
