import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HomeServicesSection() {
  const { t } = useLanguage();
  const services = [
    {
      icon: (
        <span role="img" aria-label="EPC">
          🏗️
        </span>
      ),
      title: t("home.services.epc.title"),
      desc: t("home.services.epc.desc"),
      href: "/services#epc",
    },
    {
      icon: (
        <span role="img" aria-label="Renewable">
          🌞
        </span>
      ),
      title: t("home.services.renewable.title"),
      desc: t("home.services.renewable.desc"),
      href: "/services#renewable",
    },
    {
      icon: (
        <span role="img" aria-label="Transmission">
          🔌
        </span>
      ),
      title: t("home.services.transmission.title"),
      desc: t("home.services.transmission.desc"),
      href: "/services#transmission",
    },
    {
      icon: (
        <span role="img" aria-label="Aggregation">
          📊
        </span>
      ),
      title: t("home.services.aggregation.title"),
      desc: t("home.services.aggregation.desc"),
      href: "/services#aggregation",
    },
    {
      icon: (
        <span role="img" aria-label="Trading">
          💹
        </span>
      ),
      title: t("home.services.trading.title"),
      desc: t("home.services.trading.desc"),
      href: "/services#trading",
    },
    {
      icon: (
        <span role="img" aria-label="Carbon">
          🌍
        </span>
      ),
      title: t("home.services.carbon.title"),
      desc: t("home.services.carbon.desc"),
      href: "/services#carbon",
    },
  ];
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          {t("home.services.title")}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Card key={i} className="flex h-full flex-col">
              <CardHeader className="items-center">
                <div className="mb-2 text-4xl">{service.icon}</div>
                <CardTitle className="text-center text-lg">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-center">
                  {service.desc}
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Link
                  href={service.href}
                  className="font-medium text-primary hover:underline"
                >
                  {t("home.services.learn_more")}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
