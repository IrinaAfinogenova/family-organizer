import FloatingAddButton from "@/components/FloatingAddButton";
import PageContainer from "@/components/PageContainer";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <PageContainer hideBackButton linkTo="/calendar" title={t("task-list")}>
      <div className="flex flex-row gap-4 justify-end">
        <FloatingAddButton onClick={() => { navigate(`/create-task`); }}/>
      </div>
    </PageContainer>
  );
}