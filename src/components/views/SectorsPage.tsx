'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Antenna, Wind, Building, Server } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const getSectors = (t: (key: string) => string) => [
  {
    title: t("sectors.power"),
    description: t("sectors.power.desc"),
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: Zap,
    details: [
      t("sectors.power.detail1"),
      t("sectors.power.detail2"),
      t("sectors.power.detail3"),
      t("sectors.power.detail4"),
    ],
  },
  {
    title: t("sectors.transmission"),
    description: t("sectors.transmission.desc"),
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: Antenna,
    details: [
      t("sectors.transmission.detail1"),
      t("sectors.transmission.detail2"),
      t("sectors.transmission.detail3"),
      t("sectors.transmission.detail4"),
    ],
  },
  {
    title: t("sectors.renewable"),
    description: t("sectors.renewable.desc"),
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: Wind,
    details: [
      t("sectors.renewable.detail1"),
      t("sectors.renewable.detail2"),
      t("sectors.renewable.detail3"),
      t("sectors.renewable.detail4"),
    ],
  },
  {
    title: t("sectors.industrial"),
    description: t("sectors.industrial.desc"),
    image:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: Building,
    details: [
      t("sectors.industrial.detail1"),
      t("sectors.industrial.detail2"),
      t("sectors.industrial.detail3"),
      t("sectors.industrial.detail4"),
    ],
  },
  {
    title: t("sectors.datacenter"),
    description: t("sectors.datacenter.desc"),
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    icon: Server,
    details: [
      t("sectors.datacenter.detail1"),
      t("sectors.datacenter.detail2"),
      t("sectors.datacenter.detail3"),
      t("sectors.datacenter.detail4"),
    ],
  },
];

export default function SectorsPage() {
  const { t } = useLanguage();
  const sectors = getSectors(t);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                {t("sectors.title")}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700">
                {t("sectors.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("sectors.grid.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t("sectors.grid.desc")}
              </p>
            </div>

            <div className="space-y-20">
              {sectors.map((sector, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="relative">
                      <Image
                        src={sector.image}
                        alt={sector.title}
                        width={800}
                        height={400}
                        className="rounded-xl shadow-lg w-full h-80 object-cover"
                      />
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                        <sector.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }
                  >
                    <Card className="p-8 h-full">
                      <CardContent className="p-0">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                            <sector.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {sector.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-6 text-lg">
                          {sector.description}
                        </p>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 mb-3">
                            {t("sectors.key_capabilities")}
                          </h4>
                          {sector.details.map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className="flex items-center"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                              <span className="text-gray-600">{detail}</span>
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

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("sectors.cta.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                  {t("sectors.cta.desc")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t("sectors.cta.tech.title")}
                    </h4>
                    <p className="text-gray-600">
                      {t("sectors.cta.tech.desc")}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Wind className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t("sectors.cta.sustainable.title")}
                    </h4>
                    <p className="text-gray-600">
                      {t("sectors.cta.sustainable.desc")}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t("sectors.cta.expertise.title")}
                    </h4>
                    <p className="text-gray-600">
                      {t("sectors.cta.expertise.desc")}
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
