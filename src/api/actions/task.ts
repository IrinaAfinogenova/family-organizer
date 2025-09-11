import type { ITask } from "@/definitions";
import { request } from "../api";
import { CREATE_TASK_URL, GET_TASKS_URL } from "../urls";

type createTransactionParamsType = Omit<ITask, "id" | "date" | "completed">;

export const createTask = (params: createTransactionParamsType): Promise<ITask> => {
  return request<createTransactionParamsType & { repeat: string, date: string }, ITask>(CREATE_TASK_URL, {
    method: "POST",
    body: {
      ...params,
      repeat: "once",
      date: (new Date()).toISOString(),
    }
  })
};

export const fetchTasks = ():Promise<ITask[]> => request(GET_TASKS_URL);