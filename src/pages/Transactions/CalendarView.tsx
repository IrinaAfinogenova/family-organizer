import { filterExpenseTransactions, filterIncomeTransactions } from "../../utils/transactions";
import { Calendar } from "../../components/Calendar";
import type { ITransaction } from "../../definitions";

interface ICalendarView {
	transactions: ITransaction[]
}

export function CalendarView({transactions}: ICalendarView) {
	const highlightedDaysRed = filterExpenseTransactions(transactions).map((transaction) => new Date(transaction.date));
	const highlightedDaysGreen = filterIncomeTransactions(transactions).map((transaction) => new Date(transaction.date));
    
  return (
    <Calendar
			classNames={{
				months: "flex flex-col items-center w-full",
			}}
			modifiersClassNames={{
				highlightedRed: "dot-top-right", 
				highlightedGreen: "dot-green",
			}}
			modifiers={{
				highlightedRed: highlightedDaysRed,
				highlightedGreen: highlightedDaysGreen
			}}
			onSelect={() => {  }} // TODO open day view 
    />
  );
}