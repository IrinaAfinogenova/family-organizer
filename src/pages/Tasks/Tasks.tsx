import FloatingAddButton from "@/components/FloatingAddButton";
import PageContainer from "@/components/PageContainer";
import { useGetTasks } from "@/hooks/useGetTasks";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Task from "./Task";

export default function Tasks() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { loading, tasks} = useGetTasks();

  if (loading) {
    return <p>fetching tasks</p>; //TODO add sceleton here
  }

  return (
    <PageContainer hideBackButton linkTo="/calendar" title={t("task-list")}>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            completed={task.completed}
            onToggle={() => {}}
          />
        ))}
      </div>
      <div className="flex flex-row gap-4 justify-end">
        <FloatingAddButton onClick={() => { navigate(`/create-task`); }}/>
      </div>
    </PageContainer>
  );
}