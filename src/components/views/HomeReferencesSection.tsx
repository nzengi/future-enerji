import { useLanguage } from "@/contexts/LanguageContext";

export default function HomeReferencesSection() {
  const { t } = useLanguage();
  const projects = [
    {
      title: t("home.references.tender.title"),
      desc: t("home.references.tender.desc"),
    },
    {
      title: t("home.references.jv.title"),
      desc: t("home.references.jv.desc"),
    },
    {
      title: t("home.references.transition.title"),
      desc: t("home.references.transition.desc"),
    },
  ];
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          {t("home.references.title")}
        </h2>
        {/* Logo slider placeholder */}
        <div className="mb-10 flex animate-pulse items-center justify-center gap-8">
          <div className="h-12 w-24 rounded bg-gray-200 shadow" />
          <div className="h-12 w-24 rounded bg-gray-200 shadow" />
          <div className="h-12 w-24 rounded bg-gray-200 shadow" />
          <div className="h-12 w-24 rounded bg-gray-200 shadow" />
          <div className="h-12 w-24 rounded bg-gray-200 shadow" />
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex h-full flex-col justify-center rounded-xl bg-white p-6 text-center shadow"
            >
              <div className="mb-2 text-lg font-semibold">{project.title}</div>
              <div className="text-sm text-muted-foreground">
                {project.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
