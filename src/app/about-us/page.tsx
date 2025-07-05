import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Eye, Award } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🏢 Kurumsal
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl text-muted-foreground">
            Future Enerji olarak, sürdürülebilir enerji çözümleri ile geleceğin dünyasını şekillendiriyoruz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-energy-100 text-energy-600 flex items-center justify-center mb-4">
                <Target className="h-6 w-6" />
              </div>
              <CardTitle>Misyonumuz</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Yenilenebilir enerji teknolojileri ile çevre dostu, sürdürülebilir ve ekonomik enerji çözümleri sunarak, 
                daha temiz bir gelecek inşa etmek.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-solar-100 text-solar-600 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6" />
              </div>
              <CardTitle>Vizyonumuz</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Enerji sektöründe lider konumda, dünya çapında tanınan ve sürdürülebilir enerji dönüşümüne 
                öncülük eden bir şirket olmak.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-energy-500 to-solar-500 flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-muted-foreground">Uzman Ekip</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-energy-500 to-solar-500 flex items-center justify-center">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">1000+</h3>
            <p className="text-muted-foreground">Tamamlanan Proje</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-energy-500 to-solar-500 flex items-center justify-center">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">15+</h3>
            <p className="text-muted-foreground">Yıllık Deneyim</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Değerlerimiz</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-2">Sürdürülebilirlik</h4>
                <p className="text-sm text-muted-foreground">
                  Çevre dostu teknolojiler ile gelecek nesillere yaşanabilir bir dünya bırakma sorumluluğu.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">İnovasyon</h4>
                <p className="text-sm text-muted-foreground">
                  Sürekli araştırma ve geliştirme ile enerji teknolojilerinde öncü çözümler geliştirme.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Güvenilirlik</h4>
                <p className="text-sm text-muted-foreground">
                  Müşterilerimize karşı dürüst, şeffaf ve güvenilir iş ortaklığı.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Kalite</h4>
                <p className="text-sm text-muted-foreground">
                  Uluslararası standartlarda, yüksek kaliteli ürün ve hizmet sunumu.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 