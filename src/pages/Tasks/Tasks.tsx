import FloatingAddButton from "@/components/FloatingAddButton";
import PageContainer from "@/components/PageContainer";
import { useGetTasks } from "@/hooks/useGetTasks";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { loading, tasks} = useGetTasks();

  if (loading) {
    return <p>fetching tasks</p>; //TODO add sceleton here
  }

  return (
    <PageContainer hideBackButton linkTo="/calendar" title={t("task-list")}>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
      <div className="flex flex-row gap-4 justify-end">
        <FloatingAddButton onClick={() => { navigate(`/create-task`); }}/>
      </div>
    </PageContainer>
  );
}