import { fetchTasks } from "@/api/actions/task";
import { useStore } from "@/store";
import { useEffect, useState } from "react";

export const useGetTasks = () => {
  const { setTasks, tasks } = useStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTasks().then((taskList) => {
      setTasks(taskList)
    }).catch((error) => {
      console.error(error); // TODO ERROR HANDLER
    }).finally(() => setLoading(false))
  }, [setTasks]);

  return { loading, tasks };
};