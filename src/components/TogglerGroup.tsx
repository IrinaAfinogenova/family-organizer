import * as ToggleGroupRadix from "@radix-ui/react-toggle-group";

interface IToggleGroup<T> {
  className?: string;
  items: { type: T; label: string | React.ReactNode, classNameSelected?: string }[]; //TODO switch to generic
  selectedItem?: string;
  onChange?: (value: T) => void;
}

export default function ToggleGroup<T extends string>({className = "", items, selectedItem, onChange}: IToggleGroup<T>) {
	return (
		<ToggleGroupRadix.Root
      className={`${className} flex`}
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
