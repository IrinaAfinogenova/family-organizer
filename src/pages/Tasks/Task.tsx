import * as Checkbox from "@radix-ui/react-checkbox";
import { IconCheck, IconChevronRight  } from '@tabler/icons-react';

interface ITask {
  title: string;
  completed?: boolean;
  onToggle?: () => void;
  onEdit?: () => void;
}

export default function Task({ title, onToggle, completed = false, onEdit }: ITask) {
  return (
    <div className="flex items-center justify-between p-2">
      <label className="flex items-center gap-4">
        <Checkbox.Root
          className="h-5 w-5 rounded border-[#d5e7d0] border-2 focus:outline-none"
          checked={completed}
          onCheckedChange={onToggle}
        >
          <Checkbox.Indicator>
            <IconCheck size={15} className="text-green-700"/>
          </Checkbox.Indicator>
        </Checkbox.Root>
        <div className="flex flex-col justify-center">
          <span className="text-[#111b0e] text-base">{title}</span>
          {/* TODO make it as a prop */}
          <span className="text-[#5f994d] text-sm">Due Today</span> 
        </div>
      </label>
      <div
        onClick={onEdit}
      >
        <IconChevronRight size={32} stroke={1} className="text-gray-700"/>
      </div>
    </div>
  );
}
