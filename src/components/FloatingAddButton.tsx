import { IconPlus } from "@tabler/icons-react";
import Button from "./Button";

interface IFloatingAddButton {
  onClick: () => void;
}

export default function FloatingAddButton({onClick}: IFloatingAddButton) {
  return (
    <Button
      className="
        fixed bottom-8 right-6 w-16 h-16 mb-8
        bg-green-500 text-white
        text-3xl shadow-lg md:hidden
        hover:bg-green-600
        focus:outline-none focus:ring-2 focus:ring-green-400
        transition rounded-full !rounded-full
      "
      onClick={onClick}
    >
      <IconPlus size={32}/>
    </Button>
  );
}
