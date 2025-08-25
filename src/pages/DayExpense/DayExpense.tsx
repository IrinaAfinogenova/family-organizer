import { useLocation } from "react-router-dom";
import { useStore } from "../../store";
import { transactionByDay } from "../../utils/transactions";
import PageContainer from "../../components/PageContainer";
import Transaction from "./Transaction";
import { formatDate } from "../../utils/date";

export default function DayExpense() {
	const { transactions } = useStore();
	const location = useLocation();
	
  const date = location.state?.date;
  const dayTransactions = transactionByDay(transactions, new Date(date).toISOString());

  return (
		<PageContainer linkTo="/calendar" title={`Day Expense ${formatDate(date)}`}>
			<div className="flex flex-col">
				{dayTransactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction}/>
				))}
			</div>
		</PageContainer>
  );
}
