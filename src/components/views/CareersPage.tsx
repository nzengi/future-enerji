'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Users,
  GraduationCap,
  Globe,
  Upload,
  UserPlus,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const getBenefits = (t: (key: string) => string) => [
  {
    icon: Rocket,
    title: t("careers.innovation.title"),
    description: t("careers.innovation.desc"),
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: t("careers.collaboration.title"),
    description: t("careers.collaboration.desc"),
    color: "bg-green-100 text-green-600",
  },
  {
    icon: GraduationCap,
    title: t("careers.development.title"),
    description: t("careers.development.desc"),
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Globe,
    title: t("careers.impact.title"),
    description: t("careers.impact.desc"),
    color: "bg-blue-100 text-blue-600",
  },
];

export default function CareersPage() {
  const { t } = useLanguage();
  const benefits = getBenefits(t);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t("careers.title")}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                {t("careers.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("careers.culture.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {t("careers.why.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("careers.choose.title")}
                </h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`w-12 h-12 ${benefit.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}
                      >
                        <benefit.icon className="h-6 w-6" />
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

            {/* Career Growth */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-12 mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {t("careers.growth.title")}
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
                  {t("careers.growth.desc1")}
                </p>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                  {t("careers.growth.desc2")}
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t("careers.positions.title")}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t("careers.positions.desc")}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    {t("careers.positions.button")}
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Upload className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t("careers.resume.title")}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t("careers.resume.desc")}
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    {t("careers.resume.button")}
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <UserPlus className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t("careers.register.title")}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t("careers.register.desc")}
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    {t("careers.register.button")}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Final Message */}
            <div className="text-center mt-20">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("careers.ready.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {t("careers.ready.desc")}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
