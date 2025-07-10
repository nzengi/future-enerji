"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-500" />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
        className="text-sm font-medium"
      >
        {language === "tr" ? "TR" : "EN"}
        </Button>
    </div>
  );
}
