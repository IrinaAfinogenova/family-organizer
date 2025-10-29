import { updateTasks } from "@/api/actions/task";
import { useStore } from "@/store";
import { formatDateShortView } from "@/utils/date";
import * as Checkbox from "@radix-ui/react-checkbox";
import { IconCheck, IconChevronRight  } from '@tabler/icons-react';

interface ITask {
  id: string;
  title: string;
  completed?: boolean;
  date: string;
  onEdit?: () => void;
}

export default function Task({ id, title, completed = false, date, onEdit }: ITask) {
  const { updateTask } = useStore();
  const handleOnToggle = async() => {
    const task = await updateTasks(id, { completed: !completed });
    updateTask(task);
  };

  return (
    <div className="flex items-center justify-between p-2">
      <label className="flex items-center gap-4">
        <Checkbox.Root
          className="h-5 w-5 rounded border-[#d5e7d0] border-2 focus:outline-none"
          checked={completed}
          onCheckedChange={handleOnToggle}
        >
          <Checkbox.Indicator>
            <IconCheck size={15} className="text-green-700"/>
          </Checkbox.Indicator>
        </Checkbox.Root>
        <div className="flex flex-col justify-center">
          <span className="text-[#111b0e] text-base">{title}</span>
          <span className="text-[#5f994d] text-sm">Due {formatDateShortView(date)}</span> 
        </div>
      </label>
      <div onClick={onEdit}>
        <IconChevronRight size={32} stroke={1} className="text-gray-700"/>
      </div>
    </div>
  );
}
