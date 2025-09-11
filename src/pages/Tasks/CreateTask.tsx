import Button from "@/components/Button";
import Input from "@/components/Input";
import PageContainer from "@/components/PageContainer";
import Textarea from "@/components/Textarea";
import TogglerGroup from "@/components/TogglerGroup";
import type { TaskType, TranslationType } from "@/definitions";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTaskSchema, type ICreateTaskForm } from "@/schemas/create-task.schema";
import { createTask } from "@/api/actions/task";
import { useStore } from "@/store";
import { useNavigate } from "react-router-dom";

type transactionType = {type: TaskType; label: string};

const getTaskType = (t: TranslationType): transactionType[] => ([
  {type: "once", label: t("once")},
  {type: "daily", label: t("daily")},
  {type: "monthly", label: t("monthly")},
]);

const initialFormState = {
  title: "",
  note: "",
  repeat: "once"
} as ICreateTaskForm;

export default function CreateTask() {
  const {control, register, handleSubmit, formState: { errors }} = useForm<ICreateTaskForm>({
    resolver: zodResolver(CreateTaskSchema),
    defaultValues: initialFormState
  });
  const { t } = useTranslation();
  const { addTask } = useStore();
  const navigate = useNavigate();
  const handleCreateTask = async (forms: ICreateTaskForm) => {
    const task = await createTask(forms);
    addTask(task);
    navigate(`/tasks`);
  };

  return (
    <PageContainer
      hideBackButton
      linkTo="/transactions"
      title={t("new-task")}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <Controller // TODO check docs (forward ref can help)
            name="repeat"
            control={control}
            defaultValue="once"
            render={({ field }) => (
              <TogglerGroup
                {...field}
                className="mb-4 gap-2"
                items={getTaskType(t)}
                selectedItem={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Input
            {...register("title")}
            className="mb-4"
            placeholder={t("title")}
            hasError={!!errors.title}
            errorMessage={errors.title?.message ? t(errors.title.message) : ""}
          />
          <Textarea
            {...register("note")}
            className="mb-4"
            placeholder={t("description")}
          />
        </div>
        <Button variant="primary" onClick={handleSubmit(handleCreateTask)}>{t("add-entry")}</Button>
      </div>
    </PageContainer>
  );
} 