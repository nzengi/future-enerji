"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Linkedin, Globe } from "lucide-react";
import Image from "next/image";

// Helper function for subject options
const getSubjectOptions = (t: (key: string) => string) => [
  { value: "general", label: t("contact.subject.general") },
  { value: "consultation", label: t("contact.subject.consultation") },
  { value: "partnership", label: t("contact.subject.partnership") },
  { value: "career", label: t("contact.subject.career") },
  { value: "epc", label: t("contact.subject.epc") },
  { value: "renewable", label: t("contact.subject.renewable") },
  { value: "transmission", label: t("contact.subject.transmission") },
  { value: "trading", label: t("contact.subject.trading") },
];

// Helper function for help cards
const getHelpCards = (t: (key: string) => string) => [
  {
    title: t("contact.help.consultation.title"),
    description: t("contact.help.consultation.desc"),
    icon: MapPin,
    color: "bg-primary",
  },
  {
    title: t("contact.help.partnerships.title"),
    description: t("contact.help.partnerships.desc"),
    icon: Phone,
    color: "bg-green-600",
  },
  {
    title: t("contact.help.investment.title"),
    description: t("contact.help.investment.desc"),
    icon: Mail,
    color: "bg-orange-600",
  },
];

export default function ContactPage() {
  const { t } = useLanguage();
  const subjectOptions = getSubjectOptions(t);
  const helpCards = getHelpCards(t);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t("contact.hero.title")}
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                {t("contact.hero.desc")}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {t("contact.get_in_touch")}
                </h2>
                <div className="space-y-8 mb-12">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                        {t("contact.headquarters.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("contact.headquarters.desc")
                          .split("\n")
                          .map((line, i) => (
                            <span key={i}>
                              {line}
                              {i <
                                t("contact.headquarters.desc").split("\n")
                                  .length -
                                  1 && <br />}
                            </span>
                          ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                        {t("contact.phone.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("contact.phone.desc")
                          .split("\n")
                          .map((line, i) => (
                            <span key={i}>
                              {line}
                              {i <
                                t("contact.phone.desc").split("\n").length -
                                  1 && <br />}
                            </span>
                          ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Mail className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                        {t("contact.email.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("contact.email.desc")
                          .split("\n")
                          .map((line, i) => (
                            <span key={i}>
                              {line}
                              {i <
                                t("contact.email.desc").split("\n").length -
                                  1 && <br />}
                            </span>
                          ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Linkedin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                        {t("contact.linkedin.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("contact.linkedin.desc")
                          .split("\n")
                          .map((line, i) => (
                            <span key={i}>
                              {line}
                              {i <
                                t("contact.linkedin.desc").split("\n").length -
                                  1 && <br />}
                            </span>
                          ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Globe className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                        {t("contact.website.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("contact.website.desc")
                          .split("\n")
                          .map((line, i) => (
                            <span key={i}>
                              {line}
                              {i <
                                t("contact.website.desc").split("\n").length -
                                  1 && <br />}
                            </span>
                          ))}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Image */}
                <div className="mt-8">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                    alt="Modern office building in Istanbul"
                    width={800}
                    height={400}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="p-8 shadow-lg">
                  <CardContent className="p-0">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                      {t("contact.form.title")}
                    </h2>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label
                            htmlFor="firstName"
                            className="text-sm font-medium text-gray-700 mb-2 block"
                          >
                            {t("contact.form.first_name")}
                          </Label>
                          <Input
                            id="firstName"
                            placeholder={t(
                              "contact.form.first_name_placeholder"
                            )}
                            className="w-full"
                            required
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="lastName"
                            className="text-sm font-medium text-gray-700 mb-2 block"
                          >
                            {t("contact.form.last_name")}
                          </Label>
                          <Input
                            id="lastName"
                            placeholder={t(
                              "contact.form.last_name_placeholder"
                            )}
                            className="w-full"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700 mb-2 block"
                          >
                            {t("contact.form.email")}
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={t("contact.form.email_placeholder")}
                            className="w-full"
                            required
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="company"
                            className="text-sm font-medium text-gray-700 mb-2 block"
                          >
                            {t("contact.form.company")}
                          </Label>
                          <Input
                            id="company"
                            placeholder={t("contact.form.company_placeholder")}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <Label
                          htmlFor="subject"
                          className="text-sm font-medium text-gray-700 mb-2 block"
                        >
                          {t("contact.form.subject")}
                        </Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t(
                                "contact.form.subject_placeholder"
                              )}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {subjectOptions.map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label
                          htmlFor="message"
                          className="text-sm font-medium text-gray-700 mb-2 block"
                        >
                          {t("contact.form.message")}
                        </Label>
                        <Textarea
                          id="message"
                          rows={6}
                          placeholder={t("contact.form.message_placeholder")}
                          className="w-full"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90"
                        size="lg"
                      >
                        {t("contact.form.send")}
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        {t("contact.form.privacy")}
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("contact.help.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t("contact.help.desc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {helpCards.map((card, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 ${card.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      <card.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
