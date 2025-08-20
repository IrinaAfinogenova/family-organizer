import * as ToggleGroupRadix from "@radix-ui/react-toggle-group";

interface IToggleGroup {
  items: { type: string; label: string }[];
  selectedItem: string;
  onChange: (value: string) => void;
}

export default function ToggleGroup({items, selectedItem, onChange}: IToggleGroup) {
	return (
		<ToggleGroupRadix.Root
      className="flex w-full gap-2"
			type="single"
			value={selectedItem}
			onValueChange={onChange}
		>
      {items.map((toggler) => (
        <ToggleGroupRadix.Item
          className={`flex-1 px-3 py-2 text-center rounded-md ${
            selectedItem === toggler.type
              ? "bg-green-300 text-white"
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
