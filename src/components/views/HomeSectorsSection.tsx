import { useLanguage } from "@/contexts/LanguageContext";

export default function HomeSectorsSection() {
  const { t } = useLanguage();
  const sectors = [
    {
      icon: "⚡",
      title: t("home.sectors.power.title"),
      desc: t("home.sectors.power.desc"),
    },
    {
      icon: "🔌",
      title: t("home.sectors.transmission.title"),
      desc: t("home.sectors.transmission.desc"),
    },
    {
      icon: "🌞",
      title: t("home.sectors.renewable.title"),
      desc: t("home.sectors.renewable.desc"),
    },
    {
      icon: "🏭",
      title: t("home.sectors.industrial.title"),
      desc: t("home.sectors.industrial.desc"),
    },
    {
      icon: "🖥️",
      title: t("home.sectors.datacenter.title"),
      desc: t("home.sectors.datacenter.desc"),
    },
  ];
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          {t("home.sectors.title")}
        </h2>
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {sectors.map((sector, i) => (
            <div
              key={i}
              className="flex h-full flex-col items-center rounded-xl bg-gray-50 p-6 text-center shadow transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl">
                {sector.icon}
              </div>
              <div className="mb-1 text-lg font-semibold">{sector.title}</div>
              <div className="text-sm text-muted-foreground">{sector.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
