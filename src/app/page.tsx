"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Sun, 
  Wind, 
  Leaf, 
  TrendingUp, 
  Shield, 
  Globe, 
  ArrowRight,
  BarChart3,
  Users,
  Award
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    icon: Sun,
    title: "Güneş Enerjisi",
    description: "Güneşin sonsuz gücünden yararlanarak temiz ve sürdürülebilir enerji üretimi.",
    color: "solar"
  },
  {
    icon: Wind,
    title: "Rüzgar Enerjisi",
    description: "Rüzgarın doğal gücünü elektrik enerjisine dönüştüren modern teknolojiler.",
    color: "energy"
  },
  {
    icon: Leaf,
    title: "Çevre Dostu",
    description: "Karbon ayak izini minimize eden yeşil enerji çözümleri.",
    color: "energy"
  },
  {
    icon: TrendingUp,
    title: "Yüksek Verimlilik",
    description: "En son teknoloji ile maksimum enerji verimi ve minimum kayıp.",
    color: "solar"
  },
  {
    icon: Shield,
    title: "Güvenilir Sistem",
    description: "7/24 kesintisiz enerji sağlayan dayanıklı altyapı çözümleri.",
    color: "energy"
  },
  {
    icon: Globe,
    title: "Küresel Etki",
    description: "Dünya çapında sürdürülebilir enerji dönüşümüne katkı.",
    color: "solar"
  }
];

const stats = [
  {
    icon: Users,
    label: "Aktif Kullanıcı",
    value: "50,000+",
    description: "Enerji çözümlerimizden faydalanan kullanıcı sayısı"
  },
  {
    icon: Zap,
    label: "Üretilen Enerji",
    value: "1.2 TWh",
    description: "Toplam yenilenebilir enerji üretimi"
  },
  {
    icon: Leaf,
    label: "CO₂ Tasarrufu",
    value: "850,000 ton",
    description: "Önlenen karbon emisyonu"
  },
  {
    icon: Award,
    label: "Tamamlanan Proje",
    value: "500+",
    description: "Başarıyla tamamlanan enerji projeleri"
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-energy-50 via-solar-50 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container py-20 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4">
                🌟 Geleceğin Enerji Teknolojileri
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
                <span className="text-gradient">Future Enerji</span>
                <br />
                <span className="text-foreground">ile Geleceği Şekillendirin</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Sürdürülebilir enerji çözümleri ile çevreye dost, ekonomik ve verimli 
                enerji sistemleri sunuyoruz. Geleceğin teknolojisi bugün sizinle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-bg text-white hover:opacity-90">
                  Hemen Başlayın
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Projelerimizi Keşfedin
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Neden Future Enerji?
            </h2>
            <p className="text-lg text-muted-foreground">
              Modern teknoloji ve sürdürülebilirlik ilkelerini birleştiren 
              kapsamlı enerji çözümlerimizi keşfedin.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full card-hover">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                        feature.color === 'solar' ? 'bg-solar-100 text-solar-600' : 'bg-energy-100 text-energy-600'
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Rakamlarla Future Enerji
            </h2>
            <p className="text-lg text-muted-foreground">
              Başarılarımızı ve etkimizi gösteren güncel veriler
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-energy-500 to-solar-500 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gradient mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-foreground mb-1">
                        {stat.label}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Sürdürülebilir Geleceğe Adım Atın
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Enerji ihtiyaçlarınız için özel çözümler geliştiriyoruz. 
              Uzmanlarımızla iletişime geçin ve projenizi hayata geçirin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90">
                Ücretsiz Konsültasyon
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/analytics">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Enerji Analizi
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
