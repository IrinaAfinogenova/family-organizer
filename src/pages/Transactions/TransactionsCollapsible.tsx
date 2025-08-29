import * as Accordion from "@radix-ui/react-accordion";
import { IconChevronDown } from "@tabler/icons-react";
import type { ITransaction, TransactionType } from "@/definitions";
import { formatDateShortView } from "@/utils/date";
import { useState } from "react";

interface ITransactionsCollapsible {
	title: string;
	transactions: ITransaction[];
	type: TransactionType
}

export default function TransactionsCollapsible({title, transactions, type}: ITransactionsCollapsible) {
	const [open, setOpen] = useState<boolean>(false);

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
						<span>{title}</span>
						<IconChevronDown
							className={`block transform transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${
								open ? "rotate-180" : ""
							}`}
						/>
					</Accordion.Trigger>
				</Accordion.Header>
				<Accordion.Content>
					<div>
						{transactions.length !== 0 && transactions.map((transaction) => (
							<div key={transaction.id} className="flex items-center justify-between py-2">
								<span>{formatDateShortView(transaction.date)}</span>
								<span className={`ml-auto ${type === 'income' ? "text-green-600" : "text-red-800"}`}>
									{type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
								</span>
							</div>))
						}
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	);
}
