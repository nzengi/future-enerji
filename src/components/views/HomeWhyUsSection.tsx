import { useLanguage } from "@/contexts/LanguageContext";

export default function HomeWhyUsSection() {
  const { t } = useLanguage();
  const whyUs = [
    {
      icon: "🌍",
      title: t("home.why.regional.title"),
      desc: t("home.why.regional.desc"),
    },
    {
      icon: "🔄",
      title: t("home.why.synergies.title"),
      desc: t("home.why.synergies.desc"),
    },
    {
      icon: "🌱",
      title: t("home.why.sustainable.title"),
      desc: t("home.why.sustainable.desc"),
    },
    {
      icon: "🤝",
      title: t("home.why.trusted.title"),
      desc: t("home.why.trusted.desc"),
    },
    {
      icon: "🏆",
      title: t("home.why.leadership.title"),
      desc: t("home.why.leadership.desc"),
    },
  ];
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          {t("home.why.title")}
        </h2>
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {whyUs.map((item, i) => (
            <div
              key={i}
              className="flex h-full flex-col items-center rounded-xl bg-white p-6 text-center shadow"
            >
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl">
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
