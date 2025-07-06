'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Building, Globe, Zap, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const getFutureEnerjiCapabilities = (t: (key: string) => string) => [
  {
    icon: Zap,
    title: t("subsidiaries.future.solar.title"),
    description: t("subsidiaries.future.solar.desc"),
    color: "text-primary",
  },
  {
    icon: Building,
    title: t("subsidiaries.future.wind.title"),
    description: t("subsidiaries.future.wind.desc"),
    color: "text-green-600",
  },
  {
    icon: Globe,
    title: t("subsidiaries.future.hydro.title"),
    description: t("subsidiaries.future.hydro.desc"),
    color: "text-blue-600",
  },
  {
    icon: BarChart3,
    title: t("subsidiaries.future.transmission.title"),
    description: t("subsidiaries.future.transmission.desc"),
    color: "text-orange-600",
  },
];

const getEnkolEnerjiCapabilities = (t: (key: string) => string) => [
  {
    icon: BarChart3,
    title: t("subsidiaries.enkol.aggregation.title"),
    description: t("subsidiaries.enkol.aggregation.desc"),
    color: "text-green-600",
  },
  {
    icon: Globe,
    title: t("subsidiaries.enkol.trading.title"),
    description: t("subsidiaries.enkol.trading.desc"),
    color: "text-blue-600",
  },
  {
    icon: Zap,
    title: t("subsidiaries.enkol.carbon.title"),
    description: t("subsidiaries.enkol.carbon.desc"),
    color: "text-orange-600",
  },
  {
    icon: Building,
    title: t("subsidiaries.enkol.grid.title"),
    description: t("subsidiaries.enkol.grid.desc"),
    color: "text-purple-600",
  },
];

const getCollaborativeStrengths = (t: (key: string) => string) => [
  {
    icon: Building,
    title: t("subsidiaries.integrated.title"),
    description: t("subsidiaries.integrated.desc"),
    color: "bg-primary",
  },
  {
    icon: Globe,
    title: t("subsidiaries.market.title"),
    description: t("subsidiaries.market.desc"),
    color: "bg-green-600",
  },
  {
    icon: BarChart3,
    title: t("subsidiaries.innovation.title"),
    description: t("subsidiaries.innovation.desc"),
    color: "bg-orange-600",
  },
];

export default function SubsidiariesPage() {
  const { t } = useLanguage();
  const futureEnerjiCapabilities = getFutureEnerjiCapabilities(t);
  const enkolEnerjiCapabilities = getEnkolEnerjiCapabilities(t);
  const collaborativeStrengths = getCollaborativeStrengths(t);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                {t("subsidiaries.hero.title")}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
                {t("subsidiaries.hero.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("subsidiaries.leadership.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {t("subsidiaries.leadership.desc")}
              </p>
            </div>

            {/* Subsidiaries Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Future Enerji */}
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-0">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center mr-6">
                      <Building className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {t("subsidiaries.future.title")}
                      </h3>
                      <p className="text-primary font-semibold">
                        {t("subsidiaries.future.subtitle")}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg">
                    {t("subsidiaries.future.desc1")}
                  </p>

                  <p className="text-gray-600 mb-8 text-lg">
                    {t("subsidiaries.future.desc2")}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {futureEnerjiCapabilities.map((capability, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg">
                        <capability.icon
                          className={`h-8 w-8 ${capability.color} mb-2`}
                        />
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {capability.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {capability.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Enkol Enerji */}
              <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-0">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 bg-green-600 rounded-lg flex items-center justify-center mr-6">
                      <BarChart3 className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {t("subsidiaries.enkol.title")}
                      </h3>
                      <p className="text-green-600 font-semibold">
                        {t("subsidiaries.enkol.subtitle")}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg">
                    {t("subsidiaries.enkol.desc1")}
                  </p>

                  <p className="text-gray-600 mb-8 text-lg">
                    {t("subsidiaries.enkol.desc2")}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {enkolEnerjiCapabilities.map((capability, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg">
                        <capability.icon
                          className={`h-8 w-8 ${capability.color} mb-2`}
                        />
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {capability.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {capability.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Collaborative Strength */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("subsidiaries.together.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                  {t("subsidiaries.together.desc")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  {collaborativeStrengths.map((strength, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`w-16 h-16 ${strength.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                      >
                        <strength.icon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {strength.title}
                      </h4>
                      <p className="text-gray-600">{strength.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
