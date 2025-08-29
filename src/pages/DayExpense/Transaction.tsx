import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { IconChevronDown } from "@tabler/icons-react";
import type { ITransaction } from '@/definitions';

// TODO make a Accordion as universal component

export default function Transaction({transaction}: {transaction: ITransaction}) {
	const [open, setOpen] = useState<boolean>(false);
	const {type} = transaction;
	const isIncome = type === 'income';

  return (
    <Accordion.Root 
			type="single"
			collapsible
			className="flex flex-col rounded-xl border border-[#d5e7d0] px-4 py-4 mb-4"
			onValueChange={(val) => setOpen(!!val)}
		>
			<Accordion.Item value="item-1">
				<Accordion.Header>
					<Accordion.Trigger className="flex cursor-pointer items-center w-full justify-between gap-6 py-2">
						<span className={isIncome ? "text-green-600" : "text-red-800" }>
							{`${isIncome ? '+' : '-'} ${transaction.amount}`}
						</span>
						<IconChevronDown
							className={`block transform transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${
								open ? "rotate-180" : ""
							}`}
						/>
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<div>
						{transaction.notes}
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
  );
}