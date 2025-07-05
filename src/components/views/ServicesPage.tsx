'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Sun, Zap, BarChart3, TrendingUp, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const getServices = (t: (key: string) => string) => [
  {
    title: t("services.epc.title"),
    description: t("services.epc.desc"),
    icon: Settings,
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      t("services.epc.feature1"),
      t("services.epc.feature2"),
      t("services.epc.feature3"),
      t("services.epc.feature4"),
      t("services.epc.feature5"),
      t("services.epc.feature6"),
      t("services.epc.feature7"),
      t("services.epc.feature8"),
    ],
  },
  {
    title: t("services.renewable.title"),
    description: t("services.renewable.desc"),
    icon: Sun,
    color: "from-green-50 to-green-100",
    iconColor: "text-green-600",
    bgColor: "bg-green-600",
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      t("services.renewable.feature1"),
      t("services.renewable.feature2"),
      t("services.renewable.feature3"),
      t("services.renewable.feature4"),
      t("services.renewable.feature5"),
    ],
  },
  {
    title: t("services.transmission.title"),
    description: t("services.transmission.desc"),
    icon: Zap,
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-600",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      t("services.transmission.feature1"),
      t("services.transmission.feature2"),
      t("services.transmission.feature3"),
      t("services.transmission.feature4"),
    ],
  },
  {
    title: t("services.aggregation.title"),
    description: t("services.aggregation.desc"),
    icon: BarChart3,
    color: "from-orange-50 to-orange-100",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-600",
    image:
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      t("services.aggregation.feature1"),
      t("services.aggregation.feature2"),
      t("services.aggregation.feature3"),
      t("services.aggregation.feature4"),
      t("services.aggregation.feature5"),
    ],
  },
  {
    title: t("services.trading.title"),
    description: t("services.trading.desc"),
    icon: TrendingUp,
    color: "from-teal-50 to-teal-100",
    iconColor: "text-teal-600",
    bgColor: "bg-teal-600",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      t("services.trading.feature1"),
      t("services.trading.feature2"),
      t("services.trading.feature3"),
      t("services.trading.feature4"),
      t("services.trading.feature5"),
    ],
  },
  {
    title: t("services.carbon.title"),
    description: t("services.carbon.desc"),
    icon: Leaf,
    color: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-600",
    image:
      "https://images.unsplash.com/photo-1569163139642-de5ada2adf0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: [
      t("services.carbon.feature1"),
      t("services.carbon.feature2"),
      t("services.carbon.feature3"),
      t("services.carbon.feature4"),
    ],
  },
];

export default function ServicesPage() {
  const { t } = useLanguage();
  const services = getServices(t);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t("services.title")}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                {t("services.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("services.integrated.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {t("services.integrated.desc")}
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-20">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={800}
                        height={600}
                        className="rounded-xl shadow-lg w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }
                  >
                    <Card
                      className={`bg-gradient-to-br ${service.color} p-8 border-0 h-full`}
                    >
                      <CardContent className="p-0">
                        <div className="flex items-center mb-6">
                          <div
                            className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mr-4`}
                          >
                            <service.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-6 text-lg">
                          {service.description}
                        </p>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            {t("services.key_services")}
                          </h4>
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start"
                            >
                              <div
                                className={`w-2 h-2 ${service.bgColor} rounded-full mr-3 mt-2 flex-shrink-0`}
                              ></div>
                              <span className="text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
