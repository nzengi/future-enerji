"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Detect browser language
const getBrowserLanguage = (): Language => {
  if (typeof window !== "undefined" && navigator.language) {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("tr")) {
      return "tr";
    }
  }
  return "en"; // Default to English
};

// Get saved language or browser language
const getInitialLanguage = (): Language => {
  // Check if we're on client side
  if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
    const savedLang = localStorage.getItem(
      "future-enerji-language"
    ) as Language;
    if (savedLang && ["tr", "en"].includes(savedLang)) {
      return savedLang;
    }
    return getBrowserLanguage();
  }

  // Default to Turkish on server side
  return "tr";
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("tr");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Set initial language from localStorage or browser
    const initialLang = getInitialLanguage();
    setLanguage(initialLang);
  }, []);

  useEffect(() => {
    if (isClient && typeof localStorage !== "undefined") {
      localStorage.setItem("future-enerji-language", language);
    }
  }, [language, isClient]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// Translation object
const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.corporate": "Kurumsal",
    "nav.about": "Hakkımızda",
    "nav.why": "Neden Future Enerji",
    "nav.subsidiaries": "Yan Kuruluşlar",
    "nav.policies": "Politikalar",
    "nav.sectors": "Sektörler",
    "nav.services": "Hizmetler",
    "nav.references": "Referanslar",
    "nav.careers": "Kariyer",
    "nav.contact": "İletişim",

    // Hero Section
    "hero.title1": "Future Enerji'ye Hoş Geldiniz",
    "hero.subtitle1":
      "AYD Capital organizasyonu bünyesindeki önde gelen enerji şirketi Future Enerji olarak, Enerji ve Petrol & Gaz endüstrilerinin gelişen taleplerine uygun yenilikçi ve sürdürülebilir çözümler sunmaya kararlıyız.",
    "hero.title2": "Geleceğin Güvenilir Enerjisi",
    "hero.subtitle2":
      "Doğanın kaynaklarını benzersiz verimlilik ve güvenilirlik ile kullanarak enerjinin geleceğini şekillendirmeye kararlıyız. İleri teknolojilerimiz ve sürdürülebilir uygulamalarımız sayesinde en yüksek güvenilirlik standartlarını karşılayan elektrik üretiyoruz.",
    "hero.title3": "Uzmanlığımız",
    "hero.subtitle3":
      "Seçkin profesyonel ekibimiz, Enerji ve Petrol & Gaz sektörlerinde dönüştürücü çözümler sunmak için eşsiz uzmanlık ve kapsamlı endüstri deneyimi getiriyor. Karmaşık, yüksek riskli projeleri yönetmede kanıtlanmış bir geçmişe sahip.",

    // About Us
    "about.title": "Hakkımızda",
    "about.subtitle":
      "Yenilikçilik, sürdürülebilirlik ve taviz vermez kalite standartları ile enerji sektöründe öncülük ediyoruz.",
    "about.who.title": "Biz Kimiz",
    "about.who.desc1":
      "Future Enerji olarak, uzmanlığımız ve yenilikçiliğe olan bağlılığımızla öne çıkan enerji sektörünün önde gelen lideri konumundayız. Gelişmiş mühendislik yeteneklerimiz ve en son teknolojik altyapımızı kullanarak, elektrik üretimi, iletimi ve enerji verimliliği alanlarında dönüştürücü projelere öncülük ediyoruz.",
    "about.who.desc2":
      "Güneş enerjisi gibi yenilenebilir kaynakları kullanarak, enerji dağıtımında en yüksek kalite ve güvenilirlik standartlarına uygun olarak enerji kullanımını optimize ediyoruz. Sürdürülebilir bir gelecek şekillendirme vizyonumuzla hareket eden Future Enerji, ilerlemeyi destekleyen ve çevresel sorumluluğu teşvik eden güvenilir enerji çözümleri sunmaya kendini adamıştır.",
    "about.solution.title": "Bir Çözüm Ortağından Fazlası",
    "about.solution.desc1":
      "Future Enerji, bir ortağın ötesinde ileriye dönük bir şirkettir. Müşteri odaklı yaklaşımımız, her projenin hassasiyet, dürüstlük ve beklentileri aşmaya odaklanarak yürütülmesini sağlar.",
    "about.solution.desc2":
      "Keşif ve üretimden enerji dönüşümü ve optimizasyona kadar, Future Enerji özelleştirilmiş çözümler aracılığıyla ölçülebilir değer sunarak güvenilir bir ortak olarak durmaktadır.",
    "about.expertise.title": "Sonuç Getiren Uzmanlık",
    "about.expertise.desc1":
      "Kapsamlı uzmanlığımız, yenilenebilir enerji, güç üretimi, iletim ve dağıtım ile elektrik piyasası operasyonları dahil olmak üzere çeşitli disiplinleri kapsar. Önde gelen konglomeratlar, küresel ortaklar ile kusursuz ilişkiler ve devlet kurumları ile yapıcı etkileşim konusundaki derin bağlılığımızla desteklenen Future Enerji, bölgenin yatırım manzarasında güvenilir ve güvenilir bir liderdir.",
    "about.expertise.desc2":
      "Bu, büyük ölçekli altyapı projelerinin karmaşıklıklarında gezinmemizi ve uygulama odaklı hizmetler sunmamızı sağlar. Yenilikçi teknolojileri ve sektör lideri uygulamaları entegre ederek, müşterilerimizin gelişen enerji manzarasında güvenle gezinmelerini sağlıyoruz.",
    "about.expertise.desc3":
      "Öncü yenilenebilir enerji girişimlerinden güç dağıtım ağlarını optimize etmeye kadar, Future Enerji müşterilerimizin stratejik hedefleri ile uyumlu ve dayanıklı bir enerji geleceğine katkıda bulunan özel çözümler sunarak güvenilir bir ortak olarak durmaktadır.",
    "about.global.title": "Küresel ve Yerel Arasında Köprü",
    "about.global.desc":
      "Ayrıca dünyanın dört bir yanındaki yüksek kapasiteli üretim merkezlerinden güvenilir üreticileri temsil ederek kalite ve maliyet verimliliği sağlıyoruz. Aynı zamanda Türk yapımı ürünleri aktif olarak teşvik ederek yerel üreticilerin erişimlerini genişletmelerine ve ihracatı artırmalarına destek oluyoruz.",
    "about.future.title": "Geleceğe Güç Veriyoruz",
    "about.future.desc":
      "Geleceğin güvenilir enerjisini bugün sunmaya devam ederken bizimle ortak olmaya davet ediyoruz. Future Enerji, yenilenebilir enerji, güç iletimi ve dağıtım sektörlerinin ihtiyaçlarına göre uyarlanmış güçlü ve çevik bir tedarik zinciri ekosistemi inşa ederek ortaklarımızı uzun vadeli başarı için güçlendiriyor.",

    // Why Future Enerji
    "why.title": "Neden Future Enerji?",
    "why.subtitle": "Enerji sektöründe fark yaratan değerlerimiz",
    "why.intro":
      "Future Enerji olarak, enerji sektöründeki liderliğimizi sürdürmek için sürekli olarak kendimizi geliştiriyor ve müşterilerimize en iyi hizmeti sunmaya odaklanıyoruz.",
    "why.experience": "Deneyimli Ekip",
    "why.experience.desc":
      "Alanında uzman mühendis ve teknisyenlerden oluşan ekibimiz",
    "why.innovation": "Yenilikçi Çözümler",
    "why.innovation.desc":
      "En son teknoloji ve yenilikçi yaklaşımlarla hizmet sunuyoruz",
    "why.quality": "Kalite Güvencesi",
    "why.quality.desc":
      "Uluslararası standartlarda kalite yönetim sistemlerimiz",
    "why.sustainability": "Sürdürülebilirlik",
    "why.sustainability.desc":
      "Çevre dostu ve sürdürülebilir enerji çözümleri geliştiriyoruz",
    "why.reliability": "Güvenilirlik",
    "why.reliability.desc":
      "Projelerimizi zamanında ve bütçe dahilinde teslim ediyoruz",
    "why.global": "Küresel Deneyim",
    "why.global.desc": "Dünya çapında başarılı projeler gerçekleştirdik",

    // Why Partner With Us
    "why.partner.title": "Neden Bizimle Ortaklık Kurun",
    "why.partner.regional.title": "Bölgesel Pazar Anlayışı",
    "why.partner.regional.desc":
      "Türkiye'nin dinamik enerji piyasaları ve düzenleyici ortamı hakkında derinlemesine bilgi, hızlı ve etkili proje yürütmeyi sağlar.",
    "why.partner.experience.title": "Sektörler Arası Deneyim",
    "why.partner.experience.desc":
      "Yenilikçi enerji çözümleri ve katma değerli hizmetler yaratmak için çeşitli sektörlerden elde edilen içgörüleri kullanma.",
    "why.partner.partnerships.title": "Stratejik Ortaklıklar",
    "why.partner.partnerships.desc":
      "Önde gelen holdinglerle ve devlet kurumlarıyla güçlü ilişkiler, sorunsuz proje geliştirmeyi kolaylaştırır.",
    "why.partner.track.title": "Kanıtlanmış Başarı Geçmişi",
    "why.partner.track.desc":
      "Karmaşık enerji projelerini zamanında ve bütçe dahilinde, taviz verilmeyen kalite standartlarıyla teslim etmede kanıtlanmış başarı.",

    // Sectors
    "sectors.title": "Sektörler",
    "sectors.subtitle": "Hizmet verdiğimiz başlıca sektörler",
    "sectors.grid.title": "Endüstri Uzmanlığı",
    "sectors.grid.desc":
      "Kapsamlı sektör bilgimiz, enerji değer zinciri boyunca özel çözümler sunmamızı sağlar.",
    "sectors.key_capabilities": "Temel Yetenekler:",

    // Power Generation
    "sectors.power": "Güç Üretimi",
    "sectors.power.desc":
      "Güvenilir ve verimli enerji üretimi sağlamak için en son teknolojiyi kullanan gelişmiş güç üretim çözümleri sunuyoruz. Uzmanlığımız, endüstriyel ve ticari müşterilerin çeşitli ihtiyaçlarını karşılayacak geniş bir üretim yöntemleri yelpazesini kapsar.",
    "sectors.power.detail1": "Yüksek verimli güç santralleri",
    "sectors.power.detail2": "Gelişmiş türbin teknolojisi",
    "sectors.power.detail3": "Şebeke entegrasyon çözümleri",
    "sectors.power.detail4": "Performans optimizasyonu",

    // Power Transmission
    "sectors.transmission": "Güç İletimi",
    "sectors.transmission.desc":
      "HVAC ve HVDC teknolojisinde geniş ağlar boyunca kesintisiz ve güvenli enerji iletimi sağlayan güçlü güç iletim çözümlerine odaklanıyoruz. Son teknoloji altyapımız, hem bölgesel hem de ulusal şebekeler için optimal performans ve güvenilirlik destekler.",
    "sectors.transmission.detail1": "HVAC iletim sistemleri",
    "sectors.transmission.detail2": "HVDC teknoloji uygulaması",
    "sectors.transmission.detail3": "Trafo merkezi tasarımı ve inşaatı",
    "sectors.transmission.detail4": "Şebeke modernizasyon projeleri",

    // Renewable Energy
    "sectors.renewable": "Yenilenebilir Enerji",
    "sectors.renewable.desc":
      "Sürdürülebilir bir gelecek için güneş ve rüzgar gibi kaynakları kullanarak çevre dostu güç sağlayan yenilenebilir enerji çözümlerinde uzmanlaşıyoruz. Yenilikçi yaklaşımlarımız, en yüksek çevresel standartlara uygun olarak enerji verimliliğini maksimize eder.",
    "sectors.renewable.detail1": "Güneş fotovoltaik sistemleri",
    "sectors.renewable.detail2": "Rüzgar çiftliği geliştirme",
    "sectors.renewable.detail3": "Hidroelektrik projeleri",
    "sectors.renewable.detail4": "Enerji depolama entegrasyonu",

    // Industrial Facilities
    "sectors.industrial": "Endüstriyel Tesisler",
    "sectors.industrial.desc":
      "Petrol ve Gaz endüstrisi de dahil olmak üzere endüstriyel tesisler için operasyonel verimlilik ve sürdürülebilirliği artıran özel çözümler tasarlıyor ve uyguluyoruz. Mühendislik uzmanlığımız, endüstriyel uygulamaların benzersiz taleplerini karşılayan yüksek performanslı sistemler sağlar.",
    "sectors.industrial.detail1": "Petrol ve Gaz tesis altyapısı",
    "sectors.industrial.detail2": "Endüstriyel güç sistemleri",
    "sectors.industrial.detail3": "Süreç optimizasyonu",
    "sectors.industrial.detail4": "Güvenlik ve uyumluluk sistemleri",

    // Data Center & IT Solutions
    "sectors.datacenter": "Veri Merkezi ve BT Çözümleri",
    "sectors.datacenter.desc":
      "Kesintisiz performans ve ölçeklenebilirlik sağlayarak veri merkezleri ve BT operasyonları için özel enerji ve altyapı çözümleri sunuyoruz. Gelişmiş sistemlerimiz, güvenilirlik ve verimliliği ile modern dijital ortamların kritik ihtiyaçlarını destekler.",
    "sectors.datacenter.detail1": "Kritik güç altyapısı",
    "sectors.datacenter.detail2": "Yedekli sistem tasarımı",
    "sectors.datacenter.detail3": "Soğutma ve çevre kontrolü",
    "sectors.datacenter.detail4": "7/24 izleme ve destek",

    // Call to Action
    "sectors.cta.title": "Enerji Altyapınızı Dönüştürmeye Hazır mısınız?",
    "sectors.cta.desc":
      "Sektör uzmanlığımız ve en son teknolojimizin bir araya gelmesiyle, özel endüstri ihtiyaçlarınıza göre özelleştirilmiş sürdürülebilir, verimli ve güvenilir enerji çözümleri sunar.",
    "sectors.cta.tech.title": "Gelişmiş Teknoloji",
    "sectors.cta.tech.desc": "Optimal performans için son teknoloji çözümler",
    "sectors.cta.sustainable.title": "Sürdürülebilir Çözümler",
    "sectors.cta.sustainable.desc": "Çevreye sorumlu enerji sistemleri",
    "sectors.cta.expertise.title": "Endüstri Uzmanlığı",
    "sectors.cta.expertise.desc": "Birden fazla sektörde derin bilgi",

    // Services
    "services.title": "Hizmetler",
    "services.subtitle": "Sunduğumuz profesyonel hizmetler",
    "services.integrated.title": "Entegre Enerji Çözümleri",
    "services.integrated.desc":
      "Güç üretiminden anahtar teslimi kurulumlarına kadar tüm enerji ve altyapı değer zinciri boyunca entegre çözümler sunuyoruz. Verimlilik, güvenilirlik ve sürdürülebilirlik konusunda güçlü bir odakla. Dinamik yan kuruluşları Future Enerji ve Enkol Enerji ile Future Enerji, sürdürülebilir kalkınmayı yönlendiren yenilikçi ve verimli enerji çözümleri aracılığıyla enerji sektörünü dönüştürüyor.",
    "services.key_services": "Temel Hizmetler:",

    // EPC Management
    "services.epc.title": "EPC Yönetimi, Sözleşme Operasyonları",
    "services.epc.desc":
      "Enerji ve Altyapı Projeleri için Kapsamlı EPC Çözümleri. Future Enerji'nin yan kuruluşu olarak, küresel enerji ve altyapı projeleri için anahtar teslimi çözümler sunarak uçtan uca Mühendislik, Tedarik ve İnşaat (EPC) sözleşme, yürütme ve operasyonel hizmetler sağlamada mükemmellik göstermektedir.",
    "services.epc.feature1":
      "Tam Kapsamlı EPC Sözleşmesi: Tüm proje yaşam döngüsünü yönetme",
    "services.epc.feature2":
      "Proje Yürütme Mükemmelliği: Karmaşık projeleri zamanında ve bütçe dahilinde teslim etme",
    "services.epc.feature3":
      "Operasyonel Destek: Sürekli operasyon ve bakım hizmetleri sağlama",
    "services.epc.feature4":
      "Yenilenebilir Enerji ve Güç Altyapısı: Güneş, rüzgar, batarya depolama alanında uzmanlaşma",
    "services.epc.feature5":
      "Veri Merkezleri: Son teknoloji veri merkezi tesislerini tasarlama ve teslim etme",
    "services.epc.feature6":
      "Endüstriyel ve Utility Ölçekli Geliştirmeler: Büyük ölçekli projeler yürütme",
    "services.epc.feature7":
      "Tedarik Zinciri ve Satın Alma Optimizasyonu: Kaynak sağlama süreçlerini kolaylaştırma",
    "services.epc.feature8":
      "Mevzuat Uyumluluğu ve HSE Standartları: Sıkı güvenlik standartlarını destekleme",

    // Renewable Energy
    "services.renewable.title": "Yenilenebilir Enerji",
    "services.renewable.desc":
      "Yenilenebilir enerji çözümlerinin, dağıtık enerji üretiminin ve dijitalleşmenin hızla yükselişi, enerji sektörünü benzeri görülmemiş bir hızla dönüştürüyor. Güneş, rüzgar ve hidroelektrik gibi temiz enerji kaynaklarının gücünden yararlanarak çevre dostu ve verimli güç üretim sistemleri sunuyoruz.",
    "services.renewable.feature1":
      "Utility Ölçekli Yenilenebilir Enerji: Büyük ölçekli güneş, rüzgar ve hidro projeleri",
    "services.renewable.feature2":
      "Enerji Depolama ve Şebeke Çözümleri: Batarya depolama ve akıllı şebeke yatırımları",
    "services.renewable.feature3":
      "Kurumsal ve Endüstriyel GES: İşletmeleri doğrudan yenilenebilir enerji kaynağı ile destekleme",
    "services.renewable.feature4":
      "Gelişmekte Olan Teknolojiler: Yeşil hidrojen, açık deniz rüzgarına yatırımlar",
    "services.renewable.feature5":
      "Sürdürülebilir Altyapı: ESG ve net sıfır hedefleriyle uyumlu projeler geliştirme",

    // Power Transmission
    "services.transmission.title": "Güç İletimi",
    "services.transmission.desc":
      "Future Enerji, Yüksek Gerilim Alternatif Akım (HVAC) ve Yüksek Gerilim Doğru Akım (HVDC) teknolojilerini kullanarak geniş ağlar boyunca kesintisiz ve güvenli enerji iletimi sağlayan güçlü güç iletim çözümleri sunmada uzmanlaşıyor.",
    "services.transmission.feature1":
      "HVAC ve HVDC İletim Sistemleri: Çeşitli şebeke gereksinimlerini karşılama",
    "services.transmission.feature2":
      "HVDC Konvertör İstasyonları: Verimli uzun mesafe iletimini sağlama",
    "services.transmission.feature3":
      "Transformatör Trafoları: Voltaj dönüşümü için kritik altyapı",
    "services.transmission.feature4":
      "Bağlantılar: Küresel enerji ağları ve sınır ötesi değişimi geliştirme",

    // Energy Aggregation
    "services.aggregation.title": "Enerji Toplama",
    "services.aggregation.desc":
      "Yenilenebilir enerji üretimindeki artış ve prosumer ile depolama sistemlerinin yaygınlaşması, enerji yönetiminde büyük bir değişim getiriyor. Future Enerji, kapsamlı dengeleme çözümleri sağlamak için gelişmiş teknolojiler ve derinlemesine pazar bilgisinden yararlanıyor.",
    "services.aggregation.feature1":
      "Talep Tahmini ve Yönetimi: Sofistike tahmin modelleri",
    "services.aggregation.feature2":
      "Talep Yanıtı Toplama: Güçlü şebeke dengeleme kaynakları oluşturma",
    "services.aggregation.feature3":
      "Gerçek Zamanlı Yük Yönetimi: Gerçek zamanlı izleme ve kontrol",
    "services.aggregation.feature4":
      "Üretim Tahmini ve Optimizasyonu: Gelişmiş hava durumu modelleri",
    "services.aggregation.feature5":
      "Portföy Optimizasyonu: Dengesizlik cezalarını minimize etme ve karlılığı maksimize etme",

    // Energy Trading
    "services.trading.title": "Enerji Ticareti",
    "services.trading.desc":
      "Enkol Enerji olarak, her büyüklükteki işletmeler için maliyet etkin ve esnek enerji çözümleri sunarak elektrik perakende ve ticareti konusunda uzmanlaşıyoruz. Enerji piyasasında güvenilir bir ortak olarak, özel elektrik tedarik sözleşmeleri ve risk yönetimi stratejileri sağlıyoruz.",
    "services.trading.feature1":
      "Elektrik Perakendesi: İş ihtiyaçları için tasarlanmış rekabetçi enerji tedarik planları",
    "services.trading.feature2":
      "Enerji Ticareti: Optimize edilmiş satın alma, korunma ve pazar katılım stratejileri",
    "services.trading.feature3":
      "Risk Yönetimi: İşletmenizi enerji fiyat dalgalanmalarından koruma",
    "services.trading.feature4":
      "Yenilenebilir Enerji Çözümleri: Yeşil enerji, Güç Satın Alma Anlaşmaları (GES)",
    "services.trading.feature5":
      "Gelişmiş Pazar İçgörüleri: Enerji verimliliğini maksimize etmek için veri odaklı stratejiler",

    // Carbon Trading
    "services.carbon.title": "Karbon Ticareti",
    "services.carbon.desc":
      "Karbon ticareti, işletmelerin karbon emisyonlarını azaltırken aynı zamanda ekonomik kazanç elde etmelerine olanak tanır. Karbon piyasalarındaki uzmanlığı ile Enkol Enerji, müşterilerinin sürdürülebilirlik hedeflerine ulaşmalarında destek olur.",
    "services.carbon.feature1":
      "Emisyon Azaltma Projeleri: Karbon ofset girişimleri geliştirme",
    "services.carbon.feature2":
      "Karbon Kredisi Ticareti: Karbon piyasası katılımını kolaylaştırma",
    "services.carbon.feature3":
      "Yenilikçi Karbon Çözümleri: Gelişmiş dekarbonizasyon stratejileri",
    "services.carbon.feature4":
      "Sürdürülebilirlik Stratejisi: Çevresel sorumluluğu rekabet avantajına dönüştürme",

    // Contact
    "contact.title": "İletişim",
    "contact.subtitle": "Bizimle iletişime geçin",
    "contact.address": "Adres",
    "contact.phone": "Telefon",
    "contact.email": "E-posta",
    "contact.form.name": "Ad Soyad",

    // Footer
    "footer.about": "Hakkımızda",
    "footer.services": "Hizmetler",
    "footer.contact": "İletişim",
    "footer.rights": "© 2024 Future Enerji. Tüm hakları saklıdır.",
    "footer.privacy": "Gizlilik Politikası",
    "footer.terms": "Kullanım Şartları",
    "footer.description":
      "Daha iyi bir gelecek için yenilikçi ve sürdürülebilir çözümlerle enerji sektöründe öncülük ediyoruz.",
    "footer.corporate": "Kurumsal",
    "footer.quicklinks": "Hızlı Bağlantılar",

    // Policies
    "policies.title": "Politikalar",
    "policies.subtitle": "Kurumsal politikalarımız ve taahhütlerimiz",
    "policies.hero.title": "Politikalarımız",
    "policies.hero.desc":
      "Kalite, çevre yönetimi ve güvenlik operasyonlarımızın temel taşlarıdır.",
    "policies.commitment.title": "Taahhüdümüz",
    "policies.commitment.desc":
      "Politikalarımız operasyonlarımızın her alanında rehberlik eder, tüm çalışmalarımızda mükemmellik, sürdürülebilirlik ve güvenlik sağlar.",

    // Quality Policy
    "policies.quality.title": "Kalite Politikası",
    "policies.quality.point1":
      "Yüksek kaliteli hizmet ve ürünler sunma taahhüdü, çalışmanın her alanında mükemmellik sağlama.",
    "policies.quality.point2":
      "Sürekli eğitim ve öğretim ile kaliteli insanlar yaratma ve yetiştirme.",
    "policies.quality.point3":
      "Kişisel tercih ve isteklerine tam olarak uygun hizmet arayan müşteriler için esneklik ve özelleştirme yaklaşımı.",
    "policies.quality.point4":
      "Sürekli iyileştirme ve kalite politikası beyanı taahhüdü.",
    "policies.quality.point5":
      "Sıfır hata hedefi doğrultusunda çalışma, en iyi hata yönetimi yapısı taahhüdü.",
    "policies.quality.point6":
      "Hizmetlerimizin standartlarını koruma ve iyileştirme.",

    // Environmental Policy
    "policies.environment.title": "Çevre Politikası",
    "policies.environment.point1":
      "Minimum atık üretimi ve çevresel etki hedefi doğrultusunda çalışma taahhüdü.",
    "policies.environment.point2":
      "Ekosistem ve doğal kaynaklara karşı sosyal sorumluluk anlayışı.",
    "policies.environment.point3":
      "En iyi atık yönetimi yapısı ve geri dönüşüm uygulamaları.",
    "policies.environment.point4":
      "Çevresel uygulamalar ve sürdürülebilirlik açısından kalite taahhüdü.",
    "policies.environment.button": "Tam Çevre Politikasını Oku",

    // Health & Safety Policy
    "policies.safety.title": "Sağlık ve Güvenlik Politikası",
    "policies.safety.point1":
      "Yüksek kalite ve verimlilik ile sağlıklı ve güvenli çalışma ortamında çalışma taahhüdü.",
    "policies.safety.point2":
      "Potansiyel acil durum ve kaza vakalarının değerlendirilmesi ve tanımlanması.",
    "policies.safety.point3":
      "Sağlık ve Güvenlik hedeflerinin beyan edilmesi ve ilgili taraflarla paylaşılması.",
    "policies.safety.point4":
      "Güvenli çalışma alanları ve ortamları kurma taahhüdü.",
    "policies.safety.point5":
      "Faaliyetleri İSG yönetim sistemi ile uyumlu olarak yürütme taahhüdü.",
    "policies.safety.point6":
      "Sürekli eğitim ve öğretim ile Sağlık ve Güvenlik politikaları ve standartları konusunda insanlar yaratma ve yetiştirme.",
    "policies.safety.point7": "Sıfır kaza hedefini koruma taahhüdü.",
    "policies.safety.point8":
      "İş kazalarını önlemek için personele görev ve sorumlulukların dengeli dağılımını yönetme taahhüdü.",
    "policies.safety.point9":
      "Sağlık ve Güvenlik yönetimi standartlarını koruma ve iyileştirme.",
    "policies.safety.button": "Tam Sağlık ve Güvenlik Politikasını Oku",

    // Implementation
    "policies.implementation.title": "Politika Uygulama",
    "policies.implementation.desc":
      "Politikalarımız sadece niyet beyanları değil, kapsamlı yönetim sistemleri, düzenli eğitim programları ve tüm operasyonlarımızda uyumluluk ve etkinlik sağlamak için sürekli izleme yoluyla aktif olarak uygulanmaktadır.",
    "policies.implementation.quality.title": "Kalite Yönetimi",
    "policies.implementation.quality.desc":
      "ISO sertifikalı süreçler ve sürekli iyileştirme",
    "policies.implementation.env.title": "Çevre Yönetimi",
    "policies.implementation.env.desc":
      "Sürdürülebilir uygulamalar ve çevre koruma",
    "policies.implementation.safety.title": "Güvenlik Yönetimi",
    "policies.implementation.safety.desc": "Sıfır kaza kültürü ve risk önleme",

    "policies.environment": "Çevre Politikası",
    "policies.safety": "Sağlık ve Güvenlik Politikası",
    "policies.view": "Görüntüle",

    // Environment Policy Page
    "environment.hero.title": "Çevre Politikası",
    "environment.hero.desc":
      "Tüm operasyonlarımızda çevre yönetimi ve sürdürülebilir uygulamalara olan taahhüdümüz.",
    "environment.policy.title": "Çevre Politikamız",
    "environment.policy.desc":
      "Future Enerji olarak, çevreyi koruma ve operasyonlarımız boyunca sürdürülebilir uygulamaları teşvik etme sorumluluğumuzun farkındayız. Çevre politikamız, istisnai enerji çözümleri sunarken çevresel etkimizi azaltma taahhüdümüzü yönlendirir.",

    // Policy Points
    "environment.point1.title": "Minimum Atık Taahhüdü",
    "environment.point1.desc":
      "Tüm operasyonlarımız ve projelerimizde minimum atık üretimi hedefi doğrultusunda çalışma taahhüdü.",
    "environment.point2.title": "Sosyal Sorumluluklar",
    "environment.point2.desc":
      "Tüm iş kararlarında ekosistem ve doğal kaynaklara karşı sosyal sorumlulukları dikkate alma.",
    "environment.point3.title": "En İyi Atık Yönetimi",
    "environment.point3.desc":
      "Organizasyonumuz genelinde en iyi atık yönetimi yapısının uygulanması.",
    "environment.point4.title": "Kaliteli Çevre Uygulamaları",
    "environment.point4.desc":
      "Çevresel uygulamalar ve sürdürülebilir operasyonlar açısından kalite taahhüdü.",

    // Environmental Commitments
    "environment.commitments.title": "Çevresel Taahhütler",
    "environment.commitments.desc":
      "Çevre politikamız, karar alma süreçlerimize ve operasyonel uygulamalarımıza rehberlik eden dört temel ilke üzerine kuruludur.",
    "environment.commitment1.title": "Atık Minimizasyonu",
    "environment.commitment1.desc":
      "Verimli süreçler ve kaynak optimizasyonu yoluyla minimum atık üretimi hedefi doğrultusunda çalışma taahhüdündeyiz.",
    "environment.commitment2.title": "Ekosistem Sorumluluğu",
    "environment.commitment2.desc":
      "Tüm iş kararlarında ekosistem ve doğal kaynaklara karşı sosyal sorumluluklarımızı dikkate alırız.",
    "environment.commitment3.title": "Gelişmiş Atık Yönetimi",
    "environment.commitment3.desc":
      "Sorumlu bertaraf ve geri dönüşüm uygulamalarını sağlamak için en iyi atık yönetimi yapısını uygularız.",
    "environment.commitment4.title": "Kaliteli Çevre Uygulamaları",
    "environment.commitment4.desc":
      "Kalite taahhüdümüz tüm çevresel uygulamalar ve sürdürülebilir operasyonları kapsar.",

    // Environmental Impact
    "environment.impact.title": "Çevresel Etki",
    "environment.impact.desc":
      "Çevre politikamız aracılığıyla, müşterilerimiz için yenilikçi enerji çözümleri sunarken çevre üzerinde olumlu etki yaratmayı hedefliyoruz.",
    "environment.impact.renewable.title": "Yenilenebilir Odak",
    "environment.impact.renewable.desc":
      "Çevresel etkiyi azaltan yenilenebilir enerji çözümlerine öncelik verme.",
    "environment.impact.circular.title": "Döngüsel Ekonomi",
    "environment.impact.circular.desc":
      "Operasyonlarımızda ve projelerimizde döngüsel ekonomi ilkelerini uygulama.",
    "environment.impact.protection.title": "Çevre Koruma",
    "environment.impact.protection.desc":
      "Sorumlu uygulamalarla doğal kaynakları ve ekosistemleri koruma.",

    // Call to Action
    "environment.cta.title": "Sürdürülebilir Bir Geleceğe Taahhüt",
    "environment.cta.desc":
      "Çevre politikamız, gelecek nesiller için sürdürülebilir bir gelecek yaratma konusundaki kararlılığımızı yansıtır. Çevresel performansımızı sürekli olarak iyileştirmeye ve küresel sürdürülebilirlik çabalarına katkıda bulunmaya çalışırız.",

    // Health & Safety Policy Page
    "healthsafety.hero.title": "Sağlık ve Güvenlik Politikası",
    "healthsafety.hero.desc":
      "İş gücümüzün ve toplumlarımızın sağlık ve güvenliğine sarsılmaz taahhüdümüz.",
    "healthsafety.policy.title": "Sağlık ve Güvenlik Politikamız",
    "healthsafety.policy.desc":
      "Future Enerji'de çalışanlarımızın, yüklenicilerimizin ve toplumlarımızın sağlık ve güvenliği en büyük önceliğimizdir. Kapsamlı sağlık ve güvenlik politikamız, tüm operasyonlarımızda en yüksek standartları koruduğumuzdan emin olur.",

    // Policy Points (8 cards)
    "healthsafety.point1.title": "Sağlıklı ve Güvenli Çalışma Ortamı",
    "healthsafety.point1.desc":
      "Yüksek kalite ve verimlilik ile sağlıklı ve güvenli çalışma ortamında çalışma taahhüdü.",
    "healthsafety.point2.title": "Acil Durum Değerlendirmesi",
    "healthsafety.point2.desc":
      "Proaktif önlemlerle potansiyel acil durumlar ve kaza vakalarının değerlendirilmesi ve belirlenmesi.",
    "healthsafety.point3.title": "Sağlık ve Güvenlik Hedefleri",
    "healthsafety.point3.desc":
      "Şeffaflık için sağlık ve güvenlik hedeflerinin beyan edilmesi ve ilgili taraflarla paylaşılması.",
    "healthsafety.point4.title": "Güvenli Çalışma Alanları",
    "healthsafety.point4.desc":
      "Tüm operasyonlarımız ve proje sahalarımızda güvenli çalışma alanları kurma taahhüdü.",
    "healthsafety.point5.title": "İSG Yönetim Sistemi",
    "healthsafety.point5.desc":
      "İSG yönetim sistemi standartlarına uygun olarak faaliyetleri yürütme taahhüdü.",
    "healthsafety.point6.title": "Sürekli Eğitim",
    "healthsafety.point6.desc":
      "Sürekli eğitim ve öğretim ile Sağlık ve Güvenlik politikaları ve standartları konusunda insanlar yaratma ve yetiştirme.",
    "healthsafety.point7.title": "Sıfır Kaza Hedefi",
    "healthsafety.point7.desc":
      "Kapsamlı güvenlik önlemleri ile sıfır kaza hedefini koruma taahhüdü.",
    "healthsafety.point8.title": "Dengeli Sorumluluklar",
    "healthsafety.point8.desc":
      "İş kazalarını önlemek için personele görev ve sorumlulukların dengeli dağılımını yönetme taahhüdü.",

    // Core Safety Principles
    "healthsafety.principles.title": "Temel Güvenlik İlkeleri",
    "healthsafety.principles.desc":
      "Sağlık ve güvenlik politikamız, operasyonlarımızın her alanında rehberlik eden kapsamlı ilkeler üzerine kurulmuştur.",
    "healthsafety.principle1.title": "Güvenli Çalışma Ortamı",
    "healthsafety.principle1.desc":
      "Yüksek kalite ve verimlilik standartları ile sağlıklı ve güvenli çalışma ortamını koruma taahhüdü.",
    "healthsafety.principle2.title": "Proaktif Risk Yönetimi",
    "healthsafety.principle2.desc":
      "Kapsamlı risk analizi ile potansiyel acil durumlar ve kaza vakalarının değerlendirilmesi ve belirlenmesi.",
    "healthsafety.principle3.title": "Net Güvenlik Hedefleri",
    "healthsafety.principle3.desc":
      "Tüm paydaşlara şeffaf iletişim ile Sağlık ve Güvenlik hedeflerinin beyan edilmesi.",
    "healthsafety.principle4.title": "Sıfır Kaza Hedefi",
    "healthsafety.principle4.desc":
      "Kapsamlı güvenlik önlemleri ile sıfır kaza hedefine ulaşma ve koruma taahhüdü.",

    // Safety Standards & Implementation
    "healthsafety.standards.title": "Güvenlik Standartları ve Uygulama",
    "healthsafety.standards.desc":
      "Sağlık ve güvenliğe kapsamlı yaklaşımımız eğitim, yönetim sistemleri ve sürekli iyileştirmeyi kapsar.",
    "healthsafety.standard1.title": "Eğitim ve Öğretim",
    "healthsafety.standard1.desc":
      "Güvenlik bilinci ve yetkinlik geliştirmek için sürekli eğitim ve öğretim programları.",
    "healthsafety.standard2.title": "İSG Yönetimi",
    "healthsafety.standard2.desc":
      "Kapsamlı İSG yönetim sistemi standartlarına uygun olarak tüm faaliyetleri yürütme.",
    "healthsafety.standard3.title": "Sürekli İyileştirme",
    "healthsafety.standard3.desc":
      "Sağlık ve Güvenlik yönetim sistemleri standartlarını koruma ve iyileştirme.",

    // Responsibility Framework
    "healthsafety.framework.title": "Sorumluluk Çerçevesi",
    "healthsafety.framework.desc":
      "Dengeli görev ve sorumluluk dağılımı taahhüdümüz kapsamlı güvenlik kapsamı sağlar.",
    "healthsafety.responsibility1.title": "Dengeli Sorumluluklar",
    "healthsafety.responsibility1.desc":
      "İş kazalarını önlemek ve kapsamlı güvenlik kapsamı sağlamak için görev ve sorumlulukların dengeli dağılımını yönetme.",
    "healthsafety.responsibility2.title": "Güvenli Çalışma Alanları",
    "healthsafety.responsibility2.desc":
      "Tüm operasyonel sahalar ve proje lokasyonlarında güvenli çalışma alanları kurma ve koruma.",
    "healthsafety.responsibility3.title": "Acil Durum Hazırlığı",
    "healthsafety.responsibility3.desc":
      "Detaylı müdahale prosedürleri ile potansiyel acil durumların kapsamlı değerlendirmesi ve belirlenmesi.",
    "healthsafety.responsibility4.title": "Hedef Başarımı",
    "healthsafety.responsibility4.desc":
      "Şeffaf iletişim ve düzenli ilerleme izleme ile net Sağlık ve Güvenlik hedefleri.",

    // Call to Action
    "healthsafety.cta.title": "Güvenlik Önceliğimizdir",
    "healthsafety.cta.desc":
      "Kapsamlı Sağlık ve Güvenlik politikamız iş gücümüzü, toplumlarımızı ve paydaşlarımızı koruma taahhüdümüzü yansıtır. En yüksek güvenlik standartlarını koruma ve sıfır kaza hedefimize ulaşma konusunda sürekli çaba gösteriyoruz.",

    // References Page
    "references.hero.title": "Referanslar",
    "references.hero.desc":
      "Enerji sektöründeki uzmanlığımızı gösteren stratejik başarılar ve ortaklıklar.",
    "references.achievements.title": "Stratejik Başarılar ve Ortaklıklar",
    "references.achievements.desc":
      "2025 yılında kuruluşundan bu yana, Future Enerji ile yan kuruluşları Enkol Enerji ve Future Enerji, güçlü sektör bağlantıları ve paydaşlarla güvenilirlik sayesinde başarıyı yönlendirerek bölge manzarasında kilit oyuncu olarak hızla kendisini kanıtladı.",

    // Wind Energy Achievement
    "references.wind.title": "Rüzgar Enerjisi Başarısı",
    "references.wind.date": "Ocak 2025",
    "references.wind.desc":
      "Ocak 2025'te Future Enerji, Türkiye'de beş proje kapsamında 1.200 MW rüzgar kapasiteli önemli bir sabit alım tarifesi (FiT) ihalesine katıldı.",
    "references.wind.highlights": "Başarı Öne Çıkanları:",
    "references.wind.highlight1": "İki büyük projede ikinci sıra elde edildi",
    "references.wind.highlight2": "Toplam 750 MW kurulu kapasite",
    "references.wind.highlight3":
      "Sekiz önde gelen holdingle birlikte yarışıldı",

    // Strategic Joint Venture
    "references.venture.title": "Stratejik Ortak Girişim",
    "references.venture.date": "2025",
    "references.venture.desc":
      "Future Enerji, önde gelen bir Türk inşaat holdingile küresel olarak tanınan bir Japon endüstriyel holdingile stratejik ortak girişim kurdu.",
    "references.venture.strengths": "Ortaklık Güçleri:",
    "references.venture.strength1":
      "Nükleer güç ve gaz depolama tesisleri dahil büyük altyapı projeleriyle ünlü Türk holdingim",
    "references.venture.strength2":
      "Gaz türbinleri, generatörler ve ilgili ekipmanlar konusunda uzmanlaşmış Japon endüstriyel holdingim",
    "references.venture.strength3":
      "Yaklaşan Kombine Çevrim Santrali (CCPP) projelerine teklif vermek için iyi konumlanmış",

    // Key Performance Indicators
    "references.kpi.title": "Temel Performans Göstergeleri",
    "references.kpi.desc":
      "Başarılarımız mükemmellik taahhüdümüzü ve büyük ölçekli enerji projeleri sunma kabiliyetimizi yansıtır.",
    "references.kpi.capacity": "MW Kapasite",
    "references.kpi.capacity_desc":
      "Güvence altına alınan rüzgar enerjisi projeleri",
    "references.kpi.place": "Sıra Başarısı",
    "references.kpi.place_desc": "Büyük ihale yarışmasında",
    "references.kpi.established": "Kuruluş",
    "references.kpi.established_desc": "Şirket kuruluş yılı",
    "references.kpi.partnerships": "Stratejik Ortaklıklar",
    "references.kpi.partnerships_desc": "Küresel sektör liderleri",

    // Future Outlook
    "references.future.title": "Geleceğe Bakış",
    "references.future.desc":
      "Erken başarımızı temel alarak, Future Enerji enerji değer zinciri boyunca stratejik fırsatları takip etmeye devam ediyor. Güçlü ortaklıklarımız ve kanıtlanmış uygulama kabiliyetimiz bizi yenilenebilir enerji, güç üretimi ve enerji altyapısındaki yaklaşan projeler için iyi konumlandırıyor.",
    "references.future.ccpp": "CCPP Projeleri",
    "references.future.ccpp_desc": "Kombine Çevrim Santrali fırsatları",
    "references.future.renewable": "Yenilenebilir Genişleme",
    "references.future.renewable_desc": "Ek rüzgar ve güneş projeleri",
    "references.future.alliances": "Stratejik İttifaklar",
    "references.future.alliances_desc": "Ortaklık ağını genişletme",

    // Subsidiaries Page
    "subsidiaries.hero.title": "Yan Kuruluşlarımız",
    "subsidiaries.hero.desc":
      "Enerji sektörü boyunca varlığımızı ve uzmanlığımızı genişleten dinamik yan kuruluşlar.",
    "subsidiaries.leadership.title": "Liderliğimizi Güçlendirme",
    "subsidiaries.leadership.desc":
      "Future Enerji, enerji sektörü boyunca varlığımızı ve uzmanlığımızı genişletmede önemli rol oynayan dinamik yan kuruluşları Future Enerji ve Enkol Enerji tarafından desteklenmekten gurur duyar. Bu yan kuruluşlar, yenilikçi, sürdürülebilir ve verimli enerji çözümleri sunma misyonumuzun ayrılmaz parçasıdır ve mükemmellik ile büyüme taahhüdümüzü yansıtır.",

    // Future Enerji Subsidiary
    "subsidiaries.future.title": "Future Enerji",
    "subsidiaries.future.subtitle": "EPC ve Yenilenebilir Enerji",
    "subsidiaries.future.desc1":
      "Future Enerji, kapsamlı EPC (Mühendislik, Tedarik ve İnşaat) yönetimi ve müteahhitlik operasyonlarında uzmanlaşır, yenilenebilir enerji projelerinin ve güç iletim altyapısının geliştirilmesini yönlendirir.",
    "subsidiaries.future.desc2":
      "Büyük ölçekli güneş, rüzgar ve hidroelektrik girişimlerinin yanı sıra gelişmiş iletim sistemlerine odaklanan Future Enerji, karmaşık projelerin sorunsuz yürütülmesini sağlar, hızla gelişen bir pazarın ihtiyaçlarını karşılamak için güvenilir ve çevresel açıdan sorumlu enerji çözümleri sunar.",
    "subsidiaries.future.solar.title": "Güneş Projeleri",
    "subsidiaries.future.solar.desc": "Büyük ölçekli fotovoltaik sistemler",
    "subsidiaries.future.wind.title": "Rüzgar Enerjisi",
    "subsidiaries.future.wind.desc": "Gelişmiş türbin kurulumları",
    "subsidiaries.future.hydro.title": "Hidroelektrik",
    "subsidiaries.future.hydro.desc": "Sürdürülebilir su bazlı güç",
    "subsidiaries.future.transmission.title": "İletim",
    "subsidiaries.future.transmission.desc": "Gelişmiş şebeke altyapısı",

    // Enkol Enerji Subsidiary
    "subsidiaries.enkol.title": "Enkol Enerji",
    "subsidiaries.enkol.subtitle": "Enerji Ticareti ve Toplama",
    "subsidiaries.enkol.desc1":
      "Enkol Enerji, enerji toplamacılığı, enerji ticareti ve karbon ticaretinde mükemmellik gösterir, enerji portföylerini optimize etmek ve sürdürülebilir enerji ekosistemine destek olmak için son teknolojileri kullanır.",
    "subsidiaries.enkol.desc2":
      "Esnek talep ve üretim kaynaklarını toplayarak, verimli enerji ticaretini kolaylaştırarak ve karbon ticareti girişimlerinde öncülük ederek, Enkol Enerji şebeke istikrarını artırır, finansal getiriyi maksimize eder ve küresel karbonsuzlaştırma çabalarına katkıda bulunur.",
    "subsidiaries.enkol.aggregation.title": "Enerji Toplamacılığı",
    "subsidiaries.enkol.aggregation.desc": "Portföy optimizasyonu",
    "subsidiaries.enkol.trading.title": "Enerji Ticareti",
    "subsidiaries.enkol.trading.desc": "Piyasa katılımı",
    "subsidiaries.enkol.carbon.title": "Karbon Ticareti",
    "subsidiaries.enkol.carbon.desc": "Karbonsuzlaştırma girişimleri",
    "subsidiaries.enkol.grid.title": "Şebeke Kararlılığı",
    "subsidiaries.enkol.grid.desc": "Gelişmiş dengeleme",

    // Collaborative Strength
    "subsidiaries.together.title": "Birlikte, Daha Güçlü",
    "subsidiaries.together.desc":
      "Bu yan kuruluşlar birlikte Future Enerji'nin enerji endüstrisindeki liderliğini güçlendirir. EPC yönetimi, yenilenebilir enerji geliştirme, enerji ticareti ve karbon piyasalarındaki birleşik uzmanlıkları, grubumuzı tüm enerji zorluklarını ve fırsatlarını ele alabilecek kapsamlı çözüm sağlayıcısı olarak konumlandırır.",
    "subsidiaries.integrated.title": "Entegre Çözümler",
    "subsidiaries.integrated.desc": "Uçtan uca enerji projesi teslimatı",
    "subsidiaries.market.title": "Pazar Liderliği",
    "subsidiaries.market.desc": "Bölgesel uzmanlık ve küresel erişim",
    "subsidiaries.innovation.title": "İnovasyon Odağı",
    "subsidiaries.innovation.desc": "Son teknoloji teknoloji benimseme",

    // Contact Page
    "contact.hero.title": "İletişim",
    "contact.hero.desc":
      "Enerji çözümlerinizi ve ortaklık fırsatlarınızı görüşmek için ekibimizle iletişime geçin.",

    // Contact Information
    "contact.get_in_touch": "İletişime Geçin",
    "contact.headquarters.title": "Genel Merkez",
    "contact.headquarters.desc":
      "Eski Büyükdere Cad. Maslak No:1\nSarıyer/İSTANBUL TÜRKİYE\nGelişmiş Enerji Çözümleri Merkezi",
    "contact.phone.title": "Telefon",
    "contact.phone.desc":
      "+90 212 286 43 84\nİş Saatleri: 09:00 - 18:00 (GMT+3)",
    "contact.email.title": "E-posta",
    "contact.email.desc":
      "info@futureenerji.com\nGenellikle 24 saat içinde yanıtlıyoruz",
    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.desc":
      "Güncellemeler ve sektör görüşleri için\nLinkedIn'de bağlantı kurun",
    "contact.website.title": "Website",
    "contact.website.desc":
      "www.futureenerji.com\nDetaylı bilgi için web sitemizi ziyaret edin",

    // Contact Form
    "contact.form.title": "Bize Mesaj Gönderin",
    "contact.form.first_name": "Ad *",
    "contact.form.last_name": "Soyad *",
    "contact.form.email": "E-posta Adresi *",
    "contact.form.company": "Şirket",
    "contact.form.subject": "Konu *",
    "contact.form.message": "Mesaj *",
    "contact.form.first_name_placeholder": "Ahmet",
    "contact.form.last_name_placeholder": "Yılmaz",
    "contact.form.email_placeholder": "ahmet@sirket.com",
    "contact.form.company_placeholder": "Şirketiniz",
    "contact.form.subject_placeholder": "Bir konu seçin",
    "contact.form.message_placeholder":
      "Lütfen sorgunuzu, proje gereksinimlerinizi veya size nasıl yardımcı olabileceğimizi açıklayın...",
    "contact.form.send": "Mesaj Gönder",
    "contact.form.privacy":
      "Bu formu göndererek gizlilik politikamızı ve hizmet koşullarımızı kabul etmiş olursunuz.",

    // Subject Options
    "contact.subject.general": "Genel Soru",
    "contact.subject.consultation": "Proje Danışmanlığı",
    "contact.subject.partnership": "Ortaklık Fırsatı",
    "contact.subject.career": "Kariyer Sorgusu",
    "contact.subject.epc": "EPC Hizmetleri",
    "contact.subject.renewable": "Yenilenebilir Enerji Çözümleri",
    "contact.subject.transmission": "Güç İletimi",
    "contact.subject.trading": "Enerji Ticareti ve Toplama",

    // How Can We Help
    "contact.help.title": "Size Nasıl Yardımcı Olabiliriz?",
    "contact.help.desc":
      "Enerji çözümleri, ortaklık fırsatları veya kariyer beklentileri arıyor olsanız da, ekibimiz size yardımcı olmaya hazır.",
    "contact.help.consultation.title": "Proje Danışmanlığı",
    "contact.help.consultation.desc":
      "Enerji altyapısı ihtiyaçlarınızı görüşün ve işiniz için özelleştirilmiş çözümler keşfedin.",
    "contact.help.partnerships.title": "Stratejik Ortaklıklar",
    "contact.help.partnerships.desc":
      "Enerji sektöründe işbirliği fırsatları ve ortak girişimleri keşfedin.",
    "contact.help.investment.title": "Yatırım Fırsatları",
    "contact.help.investment.desc":
      "Yenilenebilir enerji ve altyapı projelerindeki yatırım beklentileri hakkında bilgi edinin.",

    // Careers
    "careers.title": "Kariyer",
    "careers.subtitle": "Ekibimize katılın",
    "careers.hero.subtitle":
      "Enerjinin geleceğini şekillendiren mutlu, sağlıklı bir işgücü oluşturuyoruz.",
    "careers.why.title": "Neden Future Enerji?",
    "careers.why.subtitle":
      "Future Enerji, sağlıklı bir yaşam dengesi, güçlü çalışma arkadaşlığı ilişkileri ve anlamlı kariyerlerin mutlu, etkili ve tatmin olmuş bir işgücüne yol açtığını anlar. Çalışanlarımız misyonumuza inanır ve değerlerimizi yaşar.",
    "careers.culture.title":
      "Future Enerji'yi Harika Bir Çalışma Yeri Yapan Nedir?",
    "careers.choose.title": "Neden Future Enerji'yi Seçmelisiniz?",
    "careers.growth.title": "Kariyerinizi Geliştirin",
    "careers.growth.desc1":
      "Future Enerji kariyerinizi geliştirmeniz ve potansiyelinizi ortaya çıkarmanız için bir yerdir. Her bireyin bakış açısını ve yaratıcı katkılarını teşvik eder ve değer veririz. Her çalışanın bir sesi vardır. Kariyerinizde nerede olursanız olun, anlamlı ve tatmin edici işler yapmak için yaratıcılığınızı ve yeteneklerinizi getirin.",
    "careers.growth.desc2":
      "Size sektördeki en iyi kariyer fırsatlarını sunmak için sürekli gelişiyoruz. Geleceğe hazır liderler geliştirme ve yetiştirme konusunda odaklanmış bir yaklaşımla, çalışanlarımızın rollerinde ve kariyerlerinde başarılı olmalarına yardımcı olmak için yetkinlik temelli beceri geliştirme ile birlikte diğer kapsamlı araçlara düşünceli zaman ve enerji yatırımı yapıyoruz.",
    "careers.innovation.title": "İnovasyon ve Büyüme",
    "careers.innovation.desc":
      "Sürdürülebilir güç enerjisinin geleceğini şekillendiren ve endüstride inovasyonu yönlendiren son teknoloji enerji projelerinde çalışın.",
    "careers.collaboration.title": "İşbirlikçi Ortam",
    "careers.collaboration.desc":
      "Karmaşık enerji zorluklarını çözmek ve dönüştürücü çözümler sunmak için birlikte çalışan çeşitli uzman ekibine katılın.",
    "careers.development.title": "Profesyonel Gelişim",
    "careers.development.desc":
      "Yetkinlik temelli beceri geliştirme programları ile sürekli öğrenme fırsatları ve kariyer ilerlemesi.",
    "careers.impact.title": "Küresel Etki",
    "careers.impact.desc":
      "Tatmin edici bir kariyer inşa ederken küresel sürdürülebilirlik ve enerji güvenliğine anlamlı bir katkıda bulunun.",
    "careers.positions.title": "Açık Pozisyonlar",
    "careers.positions.desc":
      "Mevcut fırsatları keşfedin ve büyüyen organizasyonumuzda mükemmel rolünüzü bulun.",
    "careers.positions.button": "Açık Pozisyonları Görüntüle",
    "careers.resume.title": "CV'nizi Yükleyin",
    "careers.resume.desc":
      "CV'nizi gönderin ve becerileriniz ve deneyiminiz hakkında bize bilgi verin.",
    "careers.resume.button": "CV Yükle",
    "careers.register.title": "Ön Kayıt",
    "careers.register.desc":
      "Yetenek havuzumuza katılın ve ilgili fırsatlar ortaya çıktığında bilgilendirileceksiniz.",
    "careers.register.button": "Ön Kayıt Yap",
    "careers.ready.title": "Etki Yaratmaya Hazır mısınız?",
    "careers.ready.desc":
      "Bağlılık, çeviklik ve özveriye dayalı hayallerinizdeki kariyeri yaşamak istiyorsanız, Future Enerji tam size göre yer. Sürdürülebilir enerjinin geleceğini şekillendirmede ve gelecek nesiller için daha iyi bir dünya inşa etmede bizimle birlikte olun.",

    // Common
    "common.read_more": "Devamını Oku",
    "common.learn_more": "Daha Fazla Bilgi",
    "common.contact_us": "Bize Ulaşın",
    "common.view_all": "Tümünü Gör",
    "common.back_to_top": "Yukarı Dön",

    // Homepage Sections
    "home.services.title": "Hizmetlerimiz",
    "home.services.subtitle":
      "Hangi alanlarda çalıştığımızı güçlü ve açık gösteriyoruz.",
    "home.services.epc.title": "EPC Yönetimi & Müteahhitlik",
    "home.services.epc.desc":
      "Tasarım aşamasından uygulamaya, anahtar teslim enerji projelerini hassasiyet, güvenlik ve maliyet etkinliğiyle sunuyoruz.",
    "home.services.renewable.title": "Yenilenebilir Enerji",
    "home.services.renewable.desc":
      "Güneş, rüzgar ve hidro ile düşük karbonlu bir gelecek için sürdürülebilir enerji çözümleri üretiyoruz.",
    "home.services.transmission.title": "Güç İletimi",
    "home.services.transmission.desc":
      "Modern şebekeler için sağlam HVAC & HVDC altyapısıyla kesintisiz enerji akışı sağlıyoruz.",
    "home.services.aggregation.title": "Enerji Toplama",
    "home.services.aggregation.desc":
      "Dijital dengeleme ve talep tahminiyle üretici ve tüketiciler için akıllı portföy optimizasyonu.",
    "home.services.trading.title": "Enerji Ticareti",
    "home.services.trading.desc":
      "Esnek tedarik sözleşmeleri, riskten korunma ve piyasa odaklı enerji çözümleriyle işletmeleri güçlendiriyoruz.",
    "home.services.carbon.title": "Karbon Ticareti",
    "home.services.carbon.desc":
      "Yenilikçi karbon ofset ve sürdürülebilirlik stratejileriyle emisyonları ekonomik değere dönüştürüyoruz.",
    "home.services.learn_more": "Daha fazla bilgi",

    "home.why.title": "Neden İleri Enerji?",
    "home.why.regional.title": "Bölgesel Uzmanlık",
    "home.why.regional.desc":
      "Türkiye'nin enerji piyasasına ve sınır ötesi yatırım fırsatlarına derinlemesine bakış.",
    "home.why.synergies.title": "Sektör Sinerjileri",
    "home.why.synergies.desc":
      "Çoklu sektör bilgisiyle entegre ve yüksek etkili çözümler üretme.",
    "home.why.sustainable.title": "Sürdürülebilir Etki",
    "home.why.sustainable.desc":
      "ESG uyumlu yatırımlar ve çevresel sorumluluk taahhüdü.",
    "home.why.trusted.title": "Güvenilir İlişkiler",
    "home.why.trusted.desc":
      "Küresel ortaklar ve kamu kurumlarıyla uzun vadeli iş birliği.",
    "home.why.leadership.title": "Kanıtlanmış Liderlik",
    "home.why.leadership.desc":
      "Büyük ölçekli altyapı projelerinde deneyimli ekip.",

    "home.sectors.title": "Hizmet Verilen Sektörler",
    "home.sectors.power.title": "Güç Üretimi",
    "home.sectors.power.desc":
      "Endüstriyel ve ticari ihtiyaçlar için ileri enerji üretimi.",
    "home.sectors.transmission.title": "Güç İletimi",
    "home.sectors.transmission.desc":
      "Bölgesel ve ulusal enerji dağıtımı için güvenilir altyapı.",
    "home.sectors.renewable.title": "Yenilenebilir Enerji",
    "home.sectors.renewable.desc":
      "Sürdürülebilir gelecek için akıllı yeşil enerji sistemleri.",
    "home.sectors.industrial.title": "Endüstriyel Tesisler",
    "home.sectors.industrial.desc":
      "Petrol & gaz ve ağır sanayi için entegre enerji çözümleri.",
    "home.sectors.datacenter.title": "Veri Merkezi & BT Çözümleri",
    "home.sectors.datacenter.desc":
      "Dijital altyapı için enerji güvenilirliği ve ölçeklenebilirlik.",

    "home.references.title": "Stratejik Projeler & Referanslar",
    "home.references.tender.title": "750 MW Rüzgar İhalesi",
    "home.references.tender.desc":
      "İki büyük ulusal projede 2. sırada yer alarak şebekeye temiz rüzgar enerjisi sağladık.",
    "home.references.jv.title": "Türk-Japon Ortaklığı",
    "home.references.jv.desc":
      "Gaz türbinleri ve CCPP'lerde küresel sanayi liderleriyle stratejik ortaklık.",
    "home.references.transition.title": "Enerji Dönüşüm Projeleri",
    "home.references.transition.desc":
      "Yenilenebilir ve güç iletiminde anahtar teslim çözümler.",

    "home.investment.title": "Yatırım Temalarımız",
    "home.investment.utility.title": "Utility Ölçekli Yenilenebilirler",
    "home.investment.utility.desc":
      "Bölgeleri sürdürülebilir şekilde besleyen güneş, rüzgar ve hidro projeleri.",
    "home.investment.battery.title": "Batarya & Şebeke Çözümleri",
    "home.investment.battery.desc":
      "Modern enerji sistemleri için akıllı depolama ve şebeke teknolojileri.",
    "home.investment.ppa.title": "Kurumsal GES Anlaşmaları",
    "home.investment.ppa.desc":
      "Endüstriyel müşteriler için doğrudan temiz enerji tedarik sözleşmeleri.",
    "home.investment.hydrogen.title": "Yeşil Hidrojen & Açık Deniz Rüzgarı",
    "home.investment.hydrogen.desc":
      "Enerji dönüşümünü hızlandıran yeni nesil teknolojiler.",
    "home.investment.esg.title": "ESG & Net Sıfır Uyum",
    "home.investment.esg.desc":
      "Küresel çevre ve sosyal standartlara uygun projeler.",

    // Homepage Contact Section
    "home.contact.title": "İletişime Geçin",
    "home.contact.subtitle": "Genel Merkez",
    "home.contact.address":
      "Eski Büyükdere Cad. Maslak No:1\nSarıyer/İSTANBUL TÜRKİYE\nGelişmiş Enerji Çözümleri Merkezi",
    "home.contact.phone":
      "+90 212 286 43 84\nİş Saatleri: 09:00 - 18:00 (GMT+3)",
    "home.contact.email":
      "info@futureenerji.com\nGenellikle 24 saat içinde yanıtlıyoruz",
    "home.contact.map": "Google Haritalar'da Gör",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.corporate": "Corporate",
    "nav.about": "About Us",
    "nav.why": "Why Future Enerji",
    "nav.subsidiaries": "Subsidiaries",
    "nav.policies": "Policies",
    "nav.sectors": "Sectors",
    "nav.services": "Services",
    "nav.references": "References",
    "nav.careers": "Careers",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title1": "Welcome to Future Enerji",
    "hero.subtitle1":
      "As Future Enerji, a leading energy company within AYD Capital organization, we are committed to delivering innovative and sustainable solutions tailored to the evolving demands of the Energy and Oil & Gas industries.",
    "hero.title2": "The Reliable Energy of the Future",
    "hero.subtitle2":
      "We are committed to shaping the future of energy by harnessing nature's resources with unparalleled efficiency and dependability. Our advanced technologies and sustainable practices enable us to generate electricity that meets the highest standards of reliability.",
    "hero.title3": "Our Expertise",
    "hero.subtitle3":
      "Our distinguished team of professionals brings unparalleled expertise and extensive industry experience to deliver transformative solutions in the Energy and Oil & Gas sectors. With a proven track record of managing complex, high-stakes projects.",

    // About Us
    "about.title": "About Us",
    "about.subtitle":
      "Leading the energy sector with innovation, sustainability, and uncompromising quality standards.",
    "about.who.title": "Who We Are",
    "about.who.desc1":
      "As Future Enerji, we are a premier leader in the energy sector, distinguished by our expertise and commitment to innovation. Leveraging our advanced engineering capabilities and state-of-the-art technological infrastructure, we spearhead transformative projects in electricity generation, transmission and energy efficiency.",
    "about.who.desc2":
      "By harnessing renewable resources, such as solar energy, we optimize energy utilization while adhering to the highest standards of quality and reliability in energy distribution. Guided by our vision to shape a sustainable future, Future Enerji is dedicated to providing dependable energy solutions that drive progress and foster environmental stewardship.",
    "about.solution.title": "More Than a Solution Partner",
    "about.solution.desc1":
      "Future Enerji is more than a partner; we are a forward-looking company beyond that. Our customer-centric approach ensures that each project is executed with precision, integrity, and expectations in mind.",
    "about.solution.desc2":
      "From exploration and production to energy transformation and optimization, Future Enerji provides measurable value through customized solutions, allowing us to act as a reliable partner.",
    "about.expertise.title": "Result-Oriented Expertise",
    "about.expertise.desc1":
      "Our comprehensive expertise covers various disciplines, including renewable energy, power generation, transmission, and distribution, as well as energy market operations.",
    "about.expertise.desc2":
      "This enables us to navigate the complexities of large-scale infrastructure projects and provide customer-focused services in the evolving energy landscape.",
    "about.expertise.desc3":
      "Future Enerji provides specialized solutions that contribute to a sustainable energy future by aligning with customer strategic goals and delivering dependable services.",
    "about.global.title": "Bridge Between Global and Local",
    "about.global.desc":
      "We also represent reliable producers by showcasing high-capacity production centers worldwide. At the same time, we actively support Turkish products by expanding local producers' access and boosting exports.",
    "about.future.title": "We Power the Future",
    "about.future.desc":
      "We continue to provide reliable energy today while inviting you to partner with us for long-term success. Future Enerji is dedicated to strengthening its partners by building a robust and agile supply chain adapted to the needs of the renewable energy, power transmission, and distribution sectors.",

    // Why Future Enerji
    "why.title": "Why Future Enerji?",
    "why.subtitle": "Our values that make a difference in the energy sector",
    "why.intro":
      "As Future Enerji, we continuously improve ourselves and focus on providing the best service to our customers to maintain our leadership in the energy sector.",
    "why.experience": "Experienced Team",
    "why.experience.desc": "Our team of expert engineers and technicians",
    "why.innovation": "Innovative Solutions",
    "why.innovation.desc":
      "We provide services with the latest technology and innovative approaches",
    "why.quality": "Quality Assurance",
    "why.quality.desc": "Our international standard quality management systems",
    "why.sustainability": "Sustainability",
    "why.sustainability.desc":
      "We develop environmentally friendly and sustainable energy solutions",
    "why.reliability": "Reliability",
    "why.reliability.desc": "We deliver our projects on time and within budget",
    "why.global": "Global Experience",
    "why.global.desc": "We have successfully completed projects worldwide",

    // Why Partner With Us
    "why.partner.title": "Why Partner With Us",
    "why.partner.regional.title": "Regional Market Understanding",
    "why.partner.regional.desc":
      "Deep knowledge of Turkey's dynamic energy markets and regulatory environment, enabling swift and effective project execution.",
    "why.partner.experience.title": "Cross-Industry Experience",
    "why.partner.experience.desc":
      "Leveraging insights from various sectors to create innovative energy solutions and value-added services.",
    "why.partner.partnerships.title": "Strategic Partnerships",
    "why.partner.partnerships.desc":
      "Strong relationships with leading conglomerates and government institutions facilitate smooth project development.",
    "why.partner.track.title": "Proven Track Record",
    "why.partner.track.desc":
      "Demonstrated success in delivering complex energy projects on time and within budget, with uncompromising quality standards.",

    // Sectors
    "sectors.title": "Sectors",
    "sectors.subtitle": "Main sectors we serve",
    "sectors.grid.title": "Industry Expertise",
    "sectors.grid.desc":
      "Our comprehensive sector knowledge enables us to deliver specialized solutions across the energy value chain.",
    "sectors.key_capabilities": "Key Capabilities:",

    // Power Generation
    "sectors.power": "Power Generation",
    "sectors.power.desc":
      "Delivering advanced power generation solutions, leveraging cutting-edge technology to ensure reliable and efficient energy production. Our expertise spans a wide range of generation methods, meeting the diverse needs of industrial and commercial clients.",
    "sectors.power.detail1": "High-efficiency power plants",
    "sectors.power.detail2": "Advanced turbine technology",
    "sectors.power.detail3": "Grid integration solutions",
    "sectors.power.detail4": "Performance optimization",

    // Power Transmission
    "sectors.transmission": "Power Transmission",
    "sectors.transmission.desc":
      "Committed to robust power transmission solutions, ensuring seamless and secure energy delivery across extensive networks in both HVAC and HVDC technology. Our state-of-the-art infrastructure supports optimal performance and reliability for both regional and national grids.",
    "sectors.transmission.detail1": "HVAC transmission systems",
    "sectors.transmission.detail2": "HVDC technology implementation",
    "sectors.transmission.detail3": "Substation design and construction",
    "sectors.transmission.detail4": "Grid modernization projects",

    // Renewable Energy
    "sectors.renewable": "Renewable Energy",
    "sectors.renewable.desc":
      "Committed to a sustainable future, we specialize in renewable energy solutions, harnessing sources like solar and wind to deliver eco-friendly power. Our innovative approaches maximize energy efficiency while adhering to the highest environmental standards.",
    "sectors.renewable.detail1": "Solar photovoltaic systems",
    "sectors.renewable.detail2": "Wind farm development",
    "sectors.renewable.detail3": "Hydroelectric projects",
    "sectors.renewable.detail4": "Energy storage integration",

    // Industrial Facilities
    "sectors.industrial": "Industrial Facilities",
    "sectors.industrial.desc":
      "Designing and implementing tailored solutions for industrial facilities including but not limited to Oil & Gas industry enhancing operational efficiency and sustainability. Our engineering expertise ensures high-performance systems that meet the unique demands of industrial applications.",
    "sectors.industrial.detail1": "Oil & Gas facility infrastructure",
    "sectors.industrial.detail2": "Industrial power systems",
    "sectors.industrial.detail3": "Process optimization",
    "sectors.industrial.detail4": "Safety and compliance systems",

    // Data Center & IT Solutions
    "sectors.datacenter": "Data Center & IT Solutions",
    "sectors.datacenter.desc":
      "Offering specialized energy and infrastructure solutions for data centers and IT operations, ensuring uninterrupted performance and scalability. Our advanced systems support the critical needs of modern digital environments with reliability and efficiency.",
    "sectors.datacenter.detail1": "Critical power infrastructure",
    "sectors.datacenter.detail2": "Redundant system design",
    "sectors.datacenter.detail3": "Cooling and environmental control",
    "sectors.datacenter.detail4": "24/7 monitoring and support",

    // Call to Action
    "sectors.cta.title": "Ready to Transform Your Energy Infrastructure?",
    "sectors.cta.desc":
      "Our sector expertise combined with cutting-edge technology delivers sustainable, efficient, and reliable energy solutions tailored to your specific industry needs.",
    "sectors.cta.tech.title": "Advanced Technology",
    "sectors.cta.tech.desc":
      "State-of-the-art solutions for optimal performance",
    "sectors.cta.sustainable.title": "Sustainable Solutions",
    "sectors.cta.sustainable.desc":
      "Environmentally responsible energy systems",
    "sectors.cta.expertise.title": "Industry Expertise",
    "sectors.cta.expertise.desc": "Deep knowledge across multiple sectors",

    // Services
    "services.title": "Services",
    "services.subtitle": "Professional services we provide",
    "services.integrated.title": "Integrated Energy Solutions",
    "services.integrated.desc":
      "We provide integrated solutions across the entire energy and infrastructure value chain — from power generation to turn-key installations, with a strong focus on efficiency, reliability, and sustainability. Future Enerji with its dynamic subsidiaries, Future Enerji and Enkol Enerji is transforming the energy sector through innovative and efficient energy solutions that drive sustainable development.",
    "services.key_services": "Key Services:",

    // EPC Management
    "services.epc.title": "EPC Management, Contracting Operations",
    "services.epc.desc":
      "Comprehensive EPC Solutions for Energy and Infrastructure Projects. Future Enerji, a subsidiary of Future Enerji excels in providing end-to-end Engineering, Procurement, and Construction (EPC) contracting, execution, and operational services, delivering turnkey solutions for energy and infrastructure projects globally.",
    "services.epc.feature1":
      "Full-Scope EPC Contracting: Managing the entire project lifecycle",
    "services.epc.feature2":
      "Project Execution Excellence: Delivering complex projects on time and within budget",
    "services.epc.feature3":
      "Operational Support: Providing ongoing operational and maintenance services",
    "services.epc.feature4":
      "Renewable Energy and Power Infrastructure: Specializing in solar, wind, battery storage",
    "services.epc.feature5":
      "Data Centers: Designing and delivering state-of-the-art data center facilities",
    "services.epc.feature6":
      "Industrial and Utility-Scale Developments: Executing large-scale projects",
    "services.epc.feature7":
      "Supply Chain and Procurement Optimization: Streamlining sourcing processes",
    "services.epc.feature8":
      "Regulatory Compliance and HSE Standards: Upholding rigorous safety standards",

    // Renewable Energy
    "services.renewable.title": "Renewable Energy",
    "services.renewable.desc":
      "The rapid rise of renewable energy solutions, distributed energy generation and digitalization is transforming the energy sector at an unprecedented pace. By harnessing the power of clean energy sources such as solar, wind, and hydroelectricity, we deliver eco-friendly and efficient power generation systems.",
    "services.renewable.feature1":
      "Utility-Scale Renewable Energy: Large-scale solar, wind, and hydro projects",
    "services.renewable.feature2":
      "Energy Storage & Grid Solutions: Battery storage and smart grid investments",
    "services.renewable.feature3":
      "Corporate & Industrial PPAs: Supporting businesses with direct renewable energy supply",
    "services.renewable.feature4":
      "Emerging Technologies: Investments in green hydrogen, offshore wind",
    "services.renewable.feature5":
      "Sustainable Infrastructure: Developing projects that align with ESG and net-zero goals",

    // Power Transmission
    "services.transmission.title": "Power Transmission",
    "services.transmission.desc":
      "Future Enerji specialize in delivering robust power transmission solutions, ensuring seamless and secure energy delivery across extensive networks using both High Voltage Alternating Current (HVAC) and High Voltage Direct Current (HVDC) technologies.",
    "services.transmission.feature1":
      "HVAC and HVDC Transmission Systems: Meeting diverse grid requirements",
    "services.transmission.feature2":
      "HVDC Converter Stations: Enabling efficient long-distance transmission",
    "services.transmission.feature3":
      "Transformer Substations: Critical infrastructure for voltage transformation",
    "services.transmission.feature4":
      "Interconnections: Enhancing global energy networks and cross-border exchange",

    // Energy Aggregation
    "services.aggregation.title": "Energy Aggregation",
    "services.aggregation.desc":
      "The increase in renewable energy production and the proliferation of prosumers and storage systems bring about a major change in energy management. Future Enerji leverages advanced technologies and in-depth market knowledge to provide comprehensive balancing solutions.",
    "services.aggregation.feature1":
      "Demand Forecasting & Management: Sophisticated forecasting models",
    "services.aggregation.feature2":
      "Demand Response Aggregation: Creating powerful grid balancing resources",
    "services.aggregation.feature3":
      "Real-Time Load Management: Real-time monitoring and control",
    "services.aggregation.feature4":
      "Generation Forecasting & Optimization: Advanced weather models",
    "services.aggregation.feature5":
      "Portfolio Optimization: Minimizing imbalance penalties and maximizing profitability",

    // Energy Trading
    "services.trading.title": "Energy Trading",
    "services.trading.desc":
      "As Enkol Enerji, we specialize in electricity retail and trading, delivering cost-effective and flexible energy solutions for businesses of all sizes. As a trusted partner in the energy market, we provide tailored electricity supply contracts and risk management strategies.",
    "services.trading.feature1":
      "Electricity Retail: Competitive energy supply plans designed for business needs",
    "services.trading.feature2":
      "Energy Trading: Optimized procurement, hedging, and market participation strategies",
    "services.trading.feature3":
      "Risk Management: Protect your business from energy price volatility",
    "services.trading.feature4":
      "Renewable Energy Solutions: Green energy, Power Purchase Agreements (PPAs)",
    "services.trading.feature5":
      "Advanced Market Insights: Data-driven strategies to maximize energy efficiency",

    // Carbon Trading
    "services.carbon.title": "Carbon Trading",
    "services.carbon.desc":
      "Carbon trading allows businesses to reduce their carbon emissions while also generating economic gains. With its expertise in carbon markets, Enkol Enerji supports its customers in achieving their sustainability goals.",
    "services.carbon.feature1":
      "Emission Reduction Projects: Developing carbon offset initiatives",
    "services.carbon.feature2":
      "Carbon Credit Trading: Facilitating carbon market participation",
    "services.carbon.feature3":
      "Innovative Carbon Solutions: Advanced decarbonization strategies",
    "services.carbon.feature4":
      "Sustainability Strategy: Turning environmental responsibility into competitive advantage",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Get in touch with us",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.form.name": "Full Name",

    // Footer
    "footer.about": "About Us",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.rights": "© 2024 Future Enerji. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.description":
      "Leading the energy sector with innovative and sustainable solutions for a better future.",
    "footer.corporate": "Corporate",
    "footer.quicklinks": "Quick Links",

    // Policies
    "policies.title": "Policies",
    "policies.subtitle": "Our corporate policies and commitments",
    "policies.hero.title": "Our Policies",
    "policies.hero.desc":
      "Quality, environmental stewardship, and safety are the foundations of our operations.",
    "policies.commitment.title": "Our Commitment",
    "policies.commitment.desc":
      "Our policies guide every aspect of our operations, ensuring excellence, sustainability, and safety in all our endeavors.",

    // Quality Policy
    "policies.quality.title": "Quality Policy",
    "policies.quality.point1":
      "Commitment to deliver high-quality services and products, ensuring excellence in every aspect of the work.",
    "policies.quality.point2":
      "Create and nurture people of quality by continuous education and training.",
    "policies.quality.point3":
      "Flexibility and customization approach for customers who seek services that align exactly with their personal preferences and desires.",
    "policies.quality.point4":
      "Commitment to continuous improvement and quality policy statement.",
    "policies.quality.point5":
      "Commitment to work towards zero defects, best defect management structure.",
    "policies.quality.point6": "Maintain & improve standards of our services.",

    // Environmental Policy
    "policies.environment.title": "Environmental Policy",
    "policies.environment.point1":
      "Commitment to work towards minimal waste generation and environmental impact.",
    "policies.environment.point2":
      "Consideration of social responsibilities to ecosystem, and natural resources.",
    "policies.environment.point3":
      "Best waste management structure and recycling practices.",
    "policies.environment.point4":
      "Commitment to quality in terms of environmental practices and sustainability.",
    "policies.environment.button": "Read Full Environmental Policy",

    // Health & Safety Policy
    "policies.safety.title": "Health & Safety Policy",
    "policies.safety.point1":
      "Commitment to work in a healthy and safe working environment with high quality and efficiency.",
    "policies.safety.point2":
      "Assessment and identification of potential emergencies and accident cases.",
    "policies.safety.point3":
      "Statement of Health & Safety targets and sharing with related parties.",
    "policies.safety.point4":
      "Commitment to establish safe working areas and environments.",
    "policies.safety.point5":
      "Commitment to execute the activities inline with the HSE management system.",
    "policies.safety.point6":
      "Create and nurture people of Health and Safety policies and standards by continuous education and training.",
    "policies.safety.point7":
      "Commitment to keep the target of zero accidents.",
    "policies.safety.point8":
      "Commitment to managing a balanced division of duties and responsibilities to staff to prevent work accidents.",
    "policies.safety.point9":
      "Maintain & improve standards of Health and Safety management.",
    "policies.safety.button": "Read Full Health & Safety Policy",

    // Implementation
    "policies.implementation.title": "Policy Implementation",
    "policies.implementation.desc":
      "Our policies are not just statements of intent but are actively implemented through comprehensive management systems, regular training programs, and continuous monitoring to ensure compliance and effectiveness across all our operations.",
    "policies.implementation.quality.title": "Quality Management",
    "policies.implementation.quality.desc":
      "ISO certified processes and continuous improvement",
    "policies.implementation.env.title": "Environmental Management",
    "policies.implementation.env.desc":
      "Sustainable practices and environmental protection",
    "policies.implementation.safety.title": "Safety Management",
    "policies.implementation.safety.desc":
      "Zero accident culture and risk prevention",

    "policies.environment": "Environmental Policy",
    "policies.safety": "Health & Safety Policy",
    "policies.view": "View",

    // Environment Policy Page
    "environment.hero.title": "Environmental Policy",
    "environment.hero.desc":
      "Our commitment to environmental stewardship and sustainable practices in all operations.",
    "environment.policy.title": "Our Environmental Policy",
    "environment.policy.desc":
      "At Future Enerji, we recognize our responsibility to protect the environment and promote sustainable practices throughout our operations. Our environmental policy guides our commitment to reducing our environmental impact while delivering exceptional energy solutions.",

    // Policy Points
    "environment.point1.title": "Minimal Waste Commitment",
    "environment.point1.desc":
      "Commitment to work towards minimal waste generation across all our operations and projects.",
    "environment.point2.title": "Social Responsibilities",
    "environment.point2.desc":
      "Consideration of social responsibilities to ecosystem and natural resources in all business decisions.",
    "environment.point3.title": "Best Waste Management",
    "environment.point3.desc":
      "Implementation of best waste management structure throughout our organization.",
    "environment.point4.title": "Quality Environmental Practices",
    "environment.point4.desc":
      "Commitment to quality in terms of environmental practices and sustainable operations.",

    // Environmental Commitments
    "environment.commitments.title": "Environmental Commitments",
    "environment.commitments.desc":
      "Our environmental policy is built on four core principles that guide our decision-making and operational practices.",
    "environment.commitment1.title": "Waste Minimization",
    "environment.commitment1.desc":
      "We are committed to working towards minimal waste generation through efficient processes and resource optimization.",
    "environment.commitment2.title": "Ecosystem Responsibility",
    "environment.commitment2.desc":
      "We consider our social responsibilities to the ecosystem and natural resources in all business decisions.",
    "environment.commitment3.title": "Advanced Waste Management",
    "environment.commitment3.desc":
      "We implement the best waste management structure to ensure responsible disposal and recycling practices.",
    "environment.commitment4.title": "Quality Environmental Practices",
    "environment.commitment4.desc":
      "Our commitment to quality extends to all environmental practices and sustainable operations.",

    // Environmental Impact
    "environment.impact.title": "Environmental Impact",
    "environment.impact.desc":
      "Through our environmental policy, we aim to make a positive impact on the environment while delivering innovative energy solutions for our clients.",
    "environment.impact.renewable.title": "Renewable Focus",
    "environment.impact.renewable.desc":
      "Prioritizing renewable energy solutions that reduce environmental impact.",
    "environment.impact.circular.title": "Circular Economy",
    "environment.impact.circular.desc":
      "Implementing circular economy principles in our operations and projects.",
    "environment.impact.protection.title": "Environmental Protection",
    "environment.impact.protection.desc":
      "Protecting natural resources and ecosystems through responsible practices.",

    // Call to Action
    "environment.cta.title": "Committed to a Sustainable Future",
    "environment.cta.desc":
      "Our environmental policy reflects our dedication to creating a sustainable future for generations to come. We continuously strive to improve our environmental performance and contribute to global sustainability efforts.",

    // Health & Safety Policy Page
    "healthsafety.hero.title": "Health & Safety Policy",
    "healthsafety.hero.desc":
      "Our unwavering commitment to the health and safety of our workforce and communities.",
    "healthsafety.policy.title": "Our Health and Safety Policy",
    "healthsafety.policy.desc":
      "At Future Enerji, the health and safety of our employees, contractors, and communities is our top priority. Our comprehensive health and safety policy ensures that we maintain the highest standards in all our operations.",

    // Policy Points (8 cards)
    "healthsafety.point1.title": "Healthy & Safe Working Environment",
    "healthsafety.point1.desc":
      "Commitment to work in a healthy and safe working environment with high quality and efficiency.",
    "healthsafety.point2.title": "Emergency Assessment",
    "healthsafety.point2.desc":
      "Assessment and identification of potential emergencies and accident cases with proactive measures.",
    "healthsafety.point3.title": "Health & Safety Targets",
    "healthsafety.point3.desc":
      "Statement of Health & Safety targets and sharing with related parties for transparency.",
    "healthsafety.point4.title": "Safe Working Areas",
    "healthsafety.point4.desc":
      "Commitment to establish safe working areas across all our operations and project sites.",
    "healthsafety.point5.title": "HSE Management System",
    "healthsafety.point5.desc":
      "Commitment to execute the activities in line with the HSE management system standards.",
    "healthsafety.point6.title": "Continuous Education",
    "healthsafety.point6.desc":
      "Create and nurture people of Health and Safety policies and standards by continuous education and training.",
    "healthsafety.point7.title": "Zero Accidents Target",
    "healthsafety.point7.desc":
      "Commitment to keep the target of zero accidents through comprehensive safety measures.",
    "healthsafety.point8.title": "Balanced Responsibilities",
    "healthsafety.point8.desc":
      "Commitment to managing a balanced division of duties and responsibilities to staff to prevent work accidents.",

    // Core Safety Principles
    "healthsafety.principles.title": "Core Safety Principles",
    "healthsafety.principles.desc":
      "Our health and safety policy is built on comprehensive principles that guide every aspect of our operations.",
    "healthsafety.principle1.title": "Safe Working Environment",
    "healthsafety.principle1.desc":
      "Commitment to maintaining a healthy and safe working environment with high quality and efficiency standards.",
    "healthsafety.principle2.title": "Proactive Risk Management",
    "healthsafety.principle2.desc":
      "Assessment and identification of potential emergencies and accident cases through comprehensive risk analysis.",
    "healthsafety.principle3.title": "Clear Safety Targets",
    "healthsafety.principle3.desc":
      "Statement of Health & Safety targets with transparent communication to all stakeholders.",
    "healthsafety.principle4.title": "Zero Accidents Goal",
    "healthsafety.principle4.desc":
      "Commitment to achieving and maintaining the target of zero accidents through comprehensive safety measures.",

    // Safety Standards & Implementation
    "healthsafety.standards.title": "Safety Standards & Implementation",
    "healthsafety.standards.desc":
      "Our comprehensive approach to health and safety encompasses training, management systems, and continuous improvement.",
    "healthsafety.standard1.title": "Training & Education",
    "healthsafety.standard1.desc":
      "Continuous education and training programs to develop safety awareness and competence.",
    "healthsafety.standard2.title": "HSE Management",
    "healthsafety.standard2.desc":
      "Executing all activities in line with comprehensive HSE management system standards.",
    "healthsafety.standard3.title": "Continuous Improvement",
    "healthsafety.standard3.desc":
      "Maintaining and improving standards of Health and Safety management systems.",

    // Responsibility Framework
    "healthsafety.framework.title": "Responsibility Framework",
    "healthsafety.framework.desc":
      "Our commitment to balanced division of duties and responsibilities ensures comprehensive safety coverage.",
    "healthsafety.responsibility1.title": "Balanced Responsibilities",
    "healthsafety.responsibility1.desc":
      "Managing a balanced division of duties and responsibilities to prevent work accidents and ensure comprehensive safety coverage.",
    "healthsafety.responsibility2.title": "Safe Working Areas",
    "healthsafety.responsibility2.desc":
      "Establishing and maintaining safe working areas across all operational sites and project locations.",
    "healthsafety.responsibility3.title": "Emergency Preparedness",
    "healthsafety.responsibility3.desc":
      "Comprehensive assessment and identification of potential emergencies with detailed response procedures.",
    "healthsafety.responsibility4.title": "Target Achievement",
    "healthsafety.responsibility4.desc":
      "Clear Health & Safety targets with transparent communication and regular monitoring of progress.",

    // Call to Action
    "healthsafety.cta.title": "Safety is Our Priority",
    "healthsafety.cta.desc":
      "Our comprehensive Health & Safety policy reflects our commitment to protecting our workforce, communities, and stakeholders. We continuously strive to maintain the highest safety standards and achieve our goal of zero accidents.",

    // References Page
    "references.hero.title": "References",
    "references.hero.desc":
      "Strategic achievements and partnerships demonstrating our expertise in the energy sector.",
    "references.achievements.title": "Strategic Achievements and Partnerships",
    "references.achievements.desc":
      "Since its launch in 2025, Future Enerji with its subsidiaries Enkol Enerji and Future Enerji has swiftly established itself as a key player in the region's landscape, leveraging strong industry connections and credibility with stakeholders to drive success.",

    // Wind Energy Achievement
    "references.wind.title": "Wind Energy Achievement",
    "references.wind.date": "January 2025",
    "references.wind.desc":
      "In January 2025, Future Enerji participated in a landmark feed-in tariff (FiT) tender for 1,200 MW of wind capacity across five projects in Turkey.",
    "references.wind.highlights": "Achievement Highlights:",
    "references.wind.highlight1": "Secured second place in two major projects",
    "references.wind.highlight2": "Combined installed capacity of 750 MW",
    "references.wind.highlight3":
      "Competed alongside eight prominent conglomerates",

    // Strategic Joint Venture
    "references.venture.title": "Strategic Joint Venture",
    "references.venture.date": "2025",
    "references.venture.desc":
      "Future Enerji has established a strategic joint venture with a leading Turkish construction conglomerate and a globally recognized Japanese industrial conglomerate.",
    "references.venture.strengths": "Partnership Strengths:",
    "references.venture.strength1":
      "Turkish conglomerate renowned for major infrastructure projects including nuclear power and gas storage facilities",
    "references.venture.strength2":
      "Japanese industrial conglomerate specializing in gas turbines, generators, and related equipment",
    "references.venture.strength3":
      "Well-positioned to bid for upcoming Combined Cycle Power Plant (CCPP) projects",

    // Key Performance Indicators
    "references.kpi.title": "Key Performance Indicators",
    "references.kpi.desc":
      "Our achievements reflect our commitment to excellence and our capability to deliver large-scale energy projects.",
    "references.kpi.capacity": "MW Capacity",
    "references.kpi.capacity_desc": "Secured wind energy projects",
    "references.kpi.place": "Place Achievement",
    "references.kpi.place_desc": "In major tender competition",
    "references.kpi.established": "Established",
    "references.kpi.established_desc": "Company foundation year",
    "references.kpi.partnerships": "Strategic Partnerships",
    "references.kpi.partnerships_desc": "Global industry leaders",

    // Future Outlook
    "references.future.title": "Looking Forward",
    "references.future.desc":
      "Building on our early success, Future Enerji continues to pursue strategic opportunities across the energy value chain. Our strong partnerships and proven execution capability position us well for upcoming projects in renewable energy, power generation, and energy infrastructure.",
    "references.future.ccpp": "CCPP Projects",
    "references.future.ccpp_desc": "Combined Cycle Power Plant opportunities",
    "references.future.renewable": "Renewable Expansion",
    "references.future.renewable_desc": "Additional wind and solar projects",
    "references.future.alliances": "Strategic Alliances",
    "references.future.alliances_desc": "Expanding partnership network",

    // Subsidiaries Page
    "subsidiaries.hero.title": "Our Subsidiaries",
    "subsidiaries.hero.desc":
      "Dynamic subsidiaries expanding our presence and expertise across the energy sector.",
    "subsidiaries.leadership.title": "Strengthening Our Leadership",
    "subsidiaries.leadership.desc":
      "Future Enerji is proud to be supported by its dynamic subsidiaries, Future Enerji and Enkol Enerji, which play a pivotal role in expanding our presence and expertise across the energy sector. These subsidiaries are integral to our mission of delivering innovative, sustainable, and efficient energy solutions, reflecting our commitment to excellence and growth.",

    // Future Enerji Subsidiary
    "subsidiaries.future.title": "Future Enerji",
    "subsidiaries.future.subtitle": "EPC & Renewable Energy",
    "subsidiaries.future.desc1":
      "Future Enerji specializes in comprehensive EPC (Engineering, Procurement, and Construction) management and contracting operations, driving the development of renewable energy projects and power transmission infrastructure.",
    "subsidiaries.future.desc2":
      "With a focus on large-scale solar, wind, and hydroelectric initiatives, as well as advanced transmission systems, Future Enerji ensures the seamless execution of complex projects, delivering reliable and environmentally responsible energy solutions to meet the needs of a rapidly evolving market.",
    "subsidiaries.future.solar.title": "Solar Projects",
    "subsidiaries.future.solar.desc": "Large-scale photovoltaic systems",
    "subsidiaries.future.wind.title": "Wind Energy",
    "subsidiaries.future.wind.desc": "Advanced turbine installations",
    "subsidiaries.future.hydro.title": "Hydroelectric",
    "subsidiaries.future.hydro.desc": "Sustainable water-based power",
    "subsidiaries.future.transmission.title": "Transmission",
    "subsidiaries.future.transmission.desc": "Advanced grid infrastructure",

    // Enkol Enerji Subsidiary
    "subsidiaries.enkol.title": "Enkol Enerji",
    "subsidiaries.enkol.subtitle": "Energy Trading & Aggregation",
    "subsidiaries.enkol.desc1":
      "Enkol Enerji excels in energy aggregation, energy trading, and carbon trading, leveraging cutting-edge technologies to optimize energy portfolios and support a sustainable energy ecosystem.",
    "subsidiaries.enkol.desc2":
      "By aggregating flexible demand and generation resources, facilitating efficient energy trading, and pioneering carbon trading initiatives, Enkol Enerji enhances grid stability, maximizes financial returns, and contributes to global decarbonization efforts.",
    "subsidiaries.enkol.aggregation.title": "Energy Aggregation",
    "subsidiaries.enkol.aggregation.desc": "Portfolio optimization",
    "subsidiaries.enkol.trading.title": "Energy Trading",
    "subsidiaries.enkol.trading.desc": "Market participation",
    "subsidiaries.enkol.carbon.title": "Carbon Trading",
    "subsidiaries.enkol.carbon.desc": "Decarbonization initiatives",
    "subsidiaries.enkol.grid.title": "Grid Stability",
    "subsidiaries.enkol.grid.desc": "Advanced balancing",

    // Collaborative Strength
    "subsidiaries.together.title": "Together, Stronger",
    "subsidiaries.together.desc":
      "Together, these subsidiaries strengthen Future Enerji's leadership in the energy industry. Their combined expertise in EPC management, renewable energy development, energy trading, and carbon markets positions our group as a comprehensive solution provider capable of addressing the full spectrum of energy challenges and opportunities.",
    "subsidiaries.integrated.title": "Integrated Solutions",
    "subsidiaries.integrated.desc": "End-to-end energy project delivery",
    "subsidiaries.market.title": "Market Leadership",
    "subsidiaries.market.desc": "Regional expertise and global reach",
    "subsidiaries.innovation.title": "Innovation Focus",
    "subsidiaries.innovation.desc": "Cutting-edge technology adoption",

    // Contact Page
    "contact.hero.title": "Contact Us",
    "contact.hero.desc":
      "Get in touch with our team to discuss your energy solutions and partnership opportunities.",

    // Contact Information
    "contact.get_in_touch": "Get In Touch",
    "contact.headquarters.title": "Headquarters",
    "contact.headquarters.desc":
      "Eski Büyükdere Cad. Maslak No:1\nSarıyer/ISTANBUL TURKEY\nAdvanced Energy Solutions Center",
    "contact.phone.title": "Phone",
    "contact.phone.desc":
      "+90 212 286 43 84\nBusiness Hours: 09:00 - 18:00 (GMT+3)",
    "contact.email.title": "Email",
    "contact.email.desc":
      "info@futureenerji.com\nWe usually respond within 24 hours",
    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.desc":
      "Connect with us on LinkedIn for updates\nand industry insights",
    "contact.website.title": "Website",
    "contact.website.desc":
      "www.futureenerji.com\nVisit our website for detailed information",

    // Contact Form
    "contact.form.title": "Send us a Message",
    "contact.form.first_name": "First Name *",
    "contact.form.last_name": "Last Name *",
    "contact.form.email": "Email Address *",
    "contact.form.company": "Company",
    "contact.form.subject": "Subject *",
    "contact.form.message": "Message *",
    "contact.form.first_name_placeholder": "John",
    "contact.form.last_name_placeholder": "Doe",
    "contact.form.email_placeholder": "john@company.com",
    "contact.form.company_placeholder": "Your Company",
    "contact.form.subject_placeholder": "Select a subject",
    "contact.form.message_placeholder":
      "Please describe your inquiry, project requirements, or how we can help you...",
    "contact.form.send": "Send Message",
    "contact.form.privacy":
      "By submitting this form, you agree to our privacy policy and terms of service.",

    // Subject Options
    "contact.subject.general": "General Inquiry",
    "contact.subject.consultation": "Project Consultation",
    "contact.subject.partnership": "Partnership Opportunity",
    "contact.subject.career": "Career Inquiry",
    "contact.subject.epc": "EPC Services",
    "contact.subject.renewable": "Renewable Energy Solutions",
    "contact.subject.transmission": "Power Transmission",
    "contact.subject.trading": "Energy Trading & Aggregation",

    // How Can We Help
    "contact.help.title": "How Can We Help?",
    "contact.help.desc":
      "Whether you're looking for energy solutions, partnership opportunities, or career prospects, our team is ready to assist you.",
    "contact.help.consultation.title": "Project Consultation",
    "contact.help.consultation.desc":
      "Discuss your energy infrastructure needs and explore customized solutions for your business.",
    "contact.help.partnerships.title": "Strategic Partnerships",
    "contact.help.partnerships.desc":
      "Explore collaboration opportunities and joint ventures in the energy sector.",
    "contact.help.investment.title": "Investment Opportunities",
    "contact.help.investment.desc":
      "Learn about investment prospects in renewable energy and infrastructure projects.",

    // Common
    "common.read_more": "Read More",
    "common.learn_more": "Learn More",
    "common.contact_us": "Contact Us",
    "common.view_all": "View All",
    "common.back_to_top": "Back to Top",

    // Homepage Sections
    "home.services.title": "Our Services",
    "home.services.subtitle":
      "Showcasing our areas of expertise clearly and powerfully.",
    "home.services.epc.title": "EPC Management & Contracting",
    "home.services.epc.desc":
      "From design to execution, we deliver turnkey energy projects with precision, safety, and cost-efficiency.",
    "home.services.renewable.title": "Renewable Energy",
    "home.services.renewable.desc":
      "Harnessing solar, wind, and hydro to build a low-carbon future with sustainable energy solutions.",
    "home.services.transmission.title": "Power Transmission",
    "home.services.transmission.desc":
      "Ensuring seamless power flow with robust HVAC & HVDC infrastructure for modern grids.",
    "home.services.aggregation.title": "Energy Aggregation",
    "home.services.aggregation.desc":
      "Smart portfolio optimization for producers and consumers through digital balancing and demand forecasting.",
    "home.services.trading.title": "Energy Trading",
    "home.services.trading.desc":
      "Empowering businesses with flexible supply contracts, risk hedging, and market-driven energy solutions.",
    "home.services.carbon.title": "Carbon Trading",
    "home.services.carbon.desc":
      "Turning emissions into economic value via innovative carbon offset and sustainability strategies.",
    "home.services.learn_more": "Learn more",

    "home.why.title": "Why İleri Enerji?",
    "home.why.regional.title": "Regional Expertise",
    "home.why.regional.desc":
      "Deep insight into Türkiye's energy landscape and cross-border investment opportunities.",
    "home.why.synergies.title": "Sector Synergies",
    "home.why.synergies.desc":
      "Multi-industry know-how to create integrated and high-impact solutions.",
    "home.why.sustainable.title": "Sustainable Impact",
    "home.why.sustainable.desc":
      "Commitment to ESG-aligned investments and environmental responsibility.",
    "home.why.trusted.title": "Trusted Relationships",
    "home.why.trusted.desc":
      "Long-term collaboration with global partners and public institutions.",
    "home.why.leadership.title": "Proven Leadership",
    "home.why.leadership.desc":
      "Experienced team with a history of executing large-scale infrastructure projects.",

    "home.sectors.title": "Sectors We Serve",
    "home.sectors.power.title": "Power Generation",
    "home.sectors.power.desc":
      "Advanced energy generation for industrial and commercial needs.",
    "home.sectors.transmission.title": "Power Transmission",
    "home.sectors.transmission.desc":
      "Reliable infrastructure for regional and national energy distribution.",
    "home.sectors.renewable.title": "Renewable Energy",
    "home.sectors.renewable.desc":
      "Smart green energy systems tailored for a sustainable future.",
    "home.sectors.industrial.title": "Industrial Facilities",
    "home.sectors.industrial.desc":
      "Integrated energy solutions for oil & gas and heavy industries.",
    "home.sectors.datacenter.title": "Data Center & IT Solutions",
    "home.sectors.datacenter.desc":
      "Energy reliability and scalability for digital infrastructure.",

    "home.references.title": "Strategic Projects & References",
    "home.references.tender.title": "750 MW Wind Tender",
    "home.references.tender.desc":
      "Ranked 2nd in two major national projects, delivering clean wind energy to the grid.",
    "home.references.jv.title": "Turkish-Japanese Joint Venture",
    "home.references.jv.desc":
      "Strategic partnership with top global industrial players in gas turbines & CCPPs.",
    "home.references.transition.title": "Energy Transition Projects",
    "home.references.transition.desc":
      "Successful execution of turnkey solutions in renewables and power transmission.",

    "home.investment.title": "Investment Focus",
    "home.investment.utility.title": "Utility-Scale Renewables",
    "home.investment.utility.desc":
      "Solar, wind, and hydroelectric projects that power regions sustainably.",
    "home.investment.battery.title": "Battery & Grid Solutions",
    "home.investment.battery.desc":
      "Smart storage and grid technologies for modern energy systems.",
    "home.investment.ppa.title": "Corporate PPAs",
    "home.investment.ppa.desc":
      "Direct clean energy supply contracts for industrial clients.",
    "home.investment.hydrogen.title": "Green Hydrogen & Offshore Wind",
    "home.investment.hydrogen.desc":
      "Next-gen technologies driving the energy revolution.",
    "home.investment.esg.title": "ESG & Net Zero Alignment",
    "home.investment.esg.desc":
      "Projects that meet global environmental and social standards.",

    // Homepage Contact Section
    "home.contact.title": "Contact Us",
    "home.contact.subtitle": "Headquarters",
    "home.contact.address":
      "Eski Büyükdere Cad. Maslak No:1\nSarıyer/ISTANBUL TURKEY\nAdvanced Energy Solutions Center",
    "home.contact.phone":
      "+90 212 286 43 84\nBusiness Hours: 09:00 - 18:00 (GMT+3)",
    "home.contact.email":
      "info@futureenerji.com\nWe usually respond within 24 hours",
    "home.contact.map": "View on Google Maps",
  },
};
