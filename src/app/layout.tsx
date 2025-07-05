import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Future Enerji - Geleceğin Enerji Çözümleri",
    template: "%s | Future Enerji",
  },
  description: "Sürdürülebilir enerji çözümleri ile geleceği şekillendiriyoruz. Güneş enerjisi, rüzgar enerjisi ve yenilenebilir enerji teknolojileri.",
  keywords: ["enerji", "güneş enerjisi", "rüzgar enerjisi", "yenilenebilir enerji", "sürdürülebilir", "teknoloji"],
  authors: [{ name: "Future Enerji" }],
  creator: "Future Enerji",
  publisher: "Future Enerji",
  openGraph: {
    title: "Future Enerji - Geleceğin Enerji Çözümleri",
    description: "Sürdürülebilir enerji çözümleri ile geleceği şekillendiriyoruz.",
    url: "https://future-enerji.com",
    siteName: "Future Enerji",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Enerji - Geleceğin Enerji Çözümleri",
    description: "Sürdürülebilir enerji çözümleri ile geleceği şekillendiriyoruz.",
    creator: "@future_enerji",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
