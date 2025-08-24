import * as ToggleGroupRadix from "@radix-ui/react-toggle-group";
import type { TransactionType } from "../definitions";

interface IToggleGroup {
  className: string;
  items: { type: TransactionType; label: string, classNameSelected: string }[]; //TODO switch to generic
  selectedItem: string;
  onChange: (value: TransactionType) => void;
}

export default function ToggleGroup({className, items, selectedItem, onChange}: IToggleGroup) {
	return (
		<ToggleGroupRadix.Root
      className={`${className} flex w-full gap-2`}
			type="single"
			value={selectedItem}
			onValueChange={onChange}
		>
      {items.map((toggler) => (
        <ToggleGroupRadix.Item
          className={`flex-1 px-3 py-2 text-center rounded-md ${
            selectedItem === toggler.type
              ? (toggler.classNameSelected || "bg-green-300 text-white")
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } focus:outline-none`}
          key={toggler.type}
          value={toggler.type}
        >
          {toggler.label}
        </ToggleGroupRadix.Item>
      ))}
		</ToggleGroupRadix.Root>
	);
};
