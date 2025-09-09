import { useTranslation } from "react-i18next";
import { useStore } from "@/store";
import PageContainer from "@/components/PageContainer";
import { LanguageToggle } from "./LanguageToggle";

export default function Settings() {
  const {user} = useStore();
	const {t} = useTranslation();

  return (
    <PageContainer hideBackButton title={t("profile")}>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
          {user?.name ? user.name[0].toUpperCase() : "?"}
        </div>
        <p className="text-[22px] font-bold text-[#111b0e]">{user?.name}</p>
        <span className="text-[#5f994d]">{user?.email}</span>
      </div>
      <div className="flex flex-col">
        <h3 className="text-[#111b0e] text-lg font-bold pb-2 pt-4">{t("settings")}</h3>
        <div>
          <div className="flex flex-row justify-between">
            <p>{t("language")}</p>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}