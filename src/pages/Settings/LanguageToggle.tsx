import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  return (
    <ToggleGroup.Root
      type="single"
      value={i18n.language}
      onValueChange={(lang) => {
        if (lang) i18n.changeLanguage(lang);
      }}
      className="space-x-2 rounded-lg bg-gray-100 p-1"
    >
      <ToggleGroup.Item
        value="en-US"
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          i18n.language === "en-US" ? "bg-green-500 text-white" : "bg-white text-gray-700"
        }`}
      >
        EN
      </ToggleGroup.Item>

      <ToggleGroup.Item
        value="ru-RU"
        className={`px-3 py-1 rounded-md text-sm font-medium ${
          i18n.language === "ru-RU" ? "bg-green-500 text-white" : "bg-white text-gray-700"
        }`}
      >
        RU
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
