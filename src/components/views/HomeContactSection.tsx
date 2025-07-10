import { useLanguage } from "@/contexts/LanguageContext";

function renderMultiline(text: string) {
  return text.split("\n").map((line, i) => <div key={i}>{line}</div>);
}

export default function HomeContactSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold">
          {t("home.contact.title")}
        </h2>
        <p className="mb-8 text-center text-muted-foreground">
          {t("home.contact.subtitle")}
        </p>
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <div className="mb-8 w-full max-w-md flex-1 rounded-xl bg-white p-8 shadow md:mb-0">
            <div className="mb-4">
              {renderMultiline(t("home.contact.address"))}
            </div>
            <div className="mb-4">
              {renderMultiline(t("home.contact.phone"))}
            </div>
            <div className="mb-6">
              {renderMultiline(t("home.contact.email"))}
            </div>
            <a
              href="https://www.google.com/maps/place/Eski+B%C3%BCy%C3%BCkdere+Cd+No:1,+Maslak,+Sariyer%2F%C4%B0stanbul,+T%C3%BCrkiye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-primary px-6 py-2 font-medium text-white transition hover:bg-primary/90"
            >
              {t("home.contact.map")}
            </a>
          </div>
          <div className="h-80 w-full flex-1 overflow-hidden rounded-xl shadow">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.073282578204!2d29.01123531541313!3d41.1095359792897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7e2e2e2e2e3%3A0x7e2e2e2e2e2e2e2e!2sEski%20B%C3%BCy%C3%BCkdere%20Cd%20No%3A1%2C%20Maslak%2C%20Sariyer%2F%C4%B0stanbul%2C%20T%C3%BCrkiye!5e0!3m2!1str!2str!4v1718030000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
