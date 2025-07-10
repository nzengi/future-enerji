import { useLanguage } from "@/contexts/LanguageContext";

export default function HomeInvestmentSection() {
  const { t } = useLanguage();
  const investments = [
    {
      icon: "☀️",
      title: t("home.investment.utility.title"),
      desc: t("home.investment.utility.desc"),
    },
    {
      icon: "🔋",
      title: t("home.investment.battery.title"),
      desc: t("home.investment.battery.desc"),
    },
    {
      icon: "🤝",
      title: t("home.investment.ppa.title"),
      desc: t("home.investment.ppa.desc"),
    },
    {
      icon: "🧪",
      title: t("home.investment.hydrogen.title"),
      desc: t("home.investment.hydrogen.desc"),
    },
    {
      icon: "♻️",
      title: t("home.investment.esg.title"),
      desc: t("home.investment.esg.desc"),
    },
  ];
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          {t("home.investment.title")}
        </h2>
        <div className="flex flex-col items-stretch justify-center gap-6 md:flex-row">
          {investments.map((item, i) => (
            <div
              key={i}
              className="flex w-full flex-col items-center rounded-xl bg-gray-50 p-6 text-center shadow md:w-64"
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl">
                {item.icon}
              </div>
              <div className="mb-1 text-lg font-semibold">{item.title}</div>
              <div className="text-sm text-muted-foreground">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
