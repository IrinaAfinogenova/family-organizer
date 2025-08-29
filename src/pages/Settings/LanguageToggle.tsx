import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useStore } from "@/store";
import type { languageType } from "@/definitions";

export function LanguageToggle() {
  const { locale, changeLocale } = useStore();
  const { i18n } = useTranslation();
  const handleChangeLanguage = useCallback((lang: languageType) => {
    if (lang) i18n.changeLanguage(lang);
    changeLocale(lang)
  }, [changeLocale, i18n]);

  return (
    <ToggleGroup.Root
      type="single"
      value={locale}
      onValueChange={handleChangeLanguage}
      className="space-x-2 rounded-lg bg-gray-100 p-1"
    >
      <ToggleGroup.Item
        value="en-US"
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          locale === "en-US" ? "bg-green-500 text-white" : "bg-white text-gray-700"
        }`}
      >
        EN
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="ru-RU"
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          locale === "ru-RU" ? "bg-green-500 text-white" : "bg-white text-gray-700"
        }`}
      >
        RU
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
