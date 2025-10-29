import type { ITask } from "@/definitions";
import { request } from "../api";
import { CREATE_TASK_URL, GET_TASKS_URL } from "../urls";

type createTransactionParamsType = Omit<ITask, "id" | "completed">;
type TaskUpdateParams = Partial<Omit<ITask, "id">>;

export const createTask = (params: createTransactionParamsType): Promise<ITask> => {
  return request<createTransactionParamsType & { repeat: string, date: string }, ITask>(CREATE_TASK_URL, {
    method: "POST",
    body: {
      ...params,
      repeat: "once"
    }
  })
};

export const fetchTasks = ():Promise<ITask[]> => request(GET_TASKS_URL);

export const updateTasks = (id: string, params: TaskUpdateParams):Promise<ITask> =>
  request(`${GET_TASKS_URL}/${id}`, {
    method: "PATCH",
    body: params
  });
