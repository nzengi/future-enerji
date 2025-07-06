'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, Target, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const getWindHighlights = (t: (key: string) => string) => [
  {
    icon: Target,
    text: t("references.wind.highlight1"),
  },
  {
    icon: Target,
    text: t("references.wind.highlight2"),
  },
  {
    icon: Users,
    text: t("references.wind.highlight3"),
  },
];

const getVentureStrengths = (t: (key: string) => string) => [
  t("references.venture.strength1"),
  t("references.venture.strength2"),
  t("references.venture.strength3"),
];

const getKPIMetrics = (t: (key: string) => string) => [
  {
    value: "750",
    title: t("references.kpi.capacity"),
    description: t("references.kpi.capacity_desc"),
    color: "bg-primary",
  },
  {
    value: "2nd",
    title: t("references.kpi.place"),
    description: t("references.kpi.place_desc"),
    color: "bg-green-600",
  },
  {
    value: "2025",
    title: t("references.kpi.established"),
    description: t("references.kpi.established_desc"),
    color: "bg-orange-600",
  },
  {
    value: <Users className="h-8 w-8 text-white" />,
    title: t("references.kpi.partnerships"),
    description: t("references.kpi.partnerships_desc"),
    color: "bg-blue-600",
  },
];

const getFutureOutlook = (t: (key: string) => string) => [
  {
    icon: Target,
    title: t("references.future.ccpp"),
    description: t("references.future.ccpp_desc"),
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Award,
    title: t("references.future.renewable"),
    description: t("references.future.renewable_desc"),
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: t("references.future.alliances"),
    description: t("references.future.alliances_desc"),
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export default function ReferencesPage() {
  const { t } = useLanguage();
  const windHighlights = getWindHighlights(t);
  const ventureStrengths = getVentureStrengths(t);
  const kpiMetrics = getKPIMetrics(t);
  const futureOutlook = getFutureOutlook(t);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                {t("references.hero.title")}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
                {t("references.hero.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Achievements */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("references.achievements.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {t("references.achievements.desc")}
              </p>
            </div>

            {/* Major Achievement - Wind Tender */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-0">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {t("references.wind.title")}
                        </h3>
                        <p className="text-green-600 font-semibold">
                          {t("references.wind.date")}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 text-lg">
                      {t("references.wind.desc")}
                    </p>
                    <div className="bg-white p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        {t("references.wind.highlights")}
                      </h4>
                      <div className="space-y-3">
                        {windHighlights.map((highlight, index) => (
                          <div key={index} className="flex items-center">
                            <highlight.icon className="h-5 w-5 text-green-600 mr-3" />
                            <span className="text-gray-700">
                              {highlight.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Wind energy turbines"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Strategic Joint Venture */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="lg:order-2">
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-0">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {t("references.venture.title")}
                        </h3>
                        <p className="text-blue-600 font-semibold">
                          {t("references.venture.date")}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 text-lg">
                      {t("references.venture.desc")}
                    </p>
                    <div className="bg-white p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        {t("references.venture.strengths")}
                      </h4>
                      <div className="space-y-3">
                        {ventureStrengths.map((strength, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{strength}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="lg:order-1">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Strategic partnership handshake"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("references.kpi.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {t("references.kpi.desc")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {kpiMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-20 h-20 ${metric.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      {typeof metric.value === "string" ? (
                        <span className="text-2xl font-bold text-white">
                          {metric.value}
                        </span>
                      ) : (
                        metric.value
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {metric.title}
                    </h4>
                    <p className="text-gray-600">{metric.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Outlook */}
            <div className="mt-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("references.future.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                {t("references.future.desc")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {futureOutlook.map((outlook, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-0 text-center">
                      <div
                        className={`w-12 h-12 ${outlook.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                      >
                        <outlook.icon
                          className={`h-6 w-6 ${outlook.iconColor}`}
                        />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {outlook.title}
                      </h4>
                      <p className="text-gray-600">{outlook.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
