import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";

export default function Settings() {
	const { t } = useTranslation();
  return (
    <div className="flex flex-row items-center h-fit gap-2">
      <p>{t("language")}</p>
			<LanguageToggle />
    </div>
  );
}