import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            📞 İletişim
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            İletişim
          </h1>
          <p className="text-xl text-muted-foreground">
            Enerji çözümleriniz için bizimle iletişime geçin. Uzman ekibimiz size yardımcı olmak için hazır.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-6">Bize Ulaşın</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-energy-100 text-energy-600 flex items-center justify-center">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Adres</h3>
                      <p className="text-muted-foreground">
                        Enerji Mahallesi, Güneş Caddesi No:123<br />
                        Teknokent, Ankara / Türkiye
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-solar-100 text-solar-600 flex items-center justify-center">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Telefon</h3>
                      <p className="text-muted-foreground">
                        +90 312 555 0123<br />
                        +90 312 555 0124
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-energy-100 text-energy-600 flex items-center justify-center">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">E-posta</h3>
                      <p className="text-muted-foreground">
                        info@futureenerji.com<br />
                        satis@futureenerji.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-solar-100 text-solar-600 flex items-center justify-center">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Çalışma Saatleri</h3>
                      <p className="text-muted-foreground">
                        Pazartesi - Cuma: 09:00 - 18:00<br />
                        Cumartesi: 09:00 - 13:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Bize Mesaj Gönderin</CardTitle>
                <CardDescription>
                  Sorularınızı ve taleplerinizi aşağıdaki form aracılığıyla bize iletebilirsiniz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ad</label>
                      <Input placeholder="Adınız" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Soyad</label>
                      <Input placeholder="Soyadınız" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">E-posta</label>
                    <Input type="email" placeholder="ornek@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Telefon</label>
                    <Input type="tel" placeholder="+90 xxx xxx xx xx" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Konu</label>
                    <Input placeholder="Mesaj konusu" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Mesaj</label>
                    <textarea 
                      className="w-full min-h-[120px] px-3 py-2 border border-input rounded-md bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>
                  <Button className="w-full gradient-bg text-white">
                    Mesajı Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 