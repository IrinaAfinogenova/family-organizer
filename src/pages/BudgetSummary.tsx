import { useStore } from "../store";
import { ITransaction, TransactionType } from "../definitions";
import CircleChart from "../components/CircleChart";
import TotalLegend from "./BudgetSummaryPage/BudgetTotalLegend";

const countTotalAmount = (transactions: ITransaction[], type: TransactionType) => {
  return transactions
    .filter(transaction => transaction.type === type)
    .reduce((total, transaction) => total + transaction.amount, 0);
}

export default function BudgetSummary() {
  const { transactions } = useStore();
	const totalIncome = countTotalAmount(transactions, "income");
	const totalExpense = countTotalAmount(transactions, "outcome");

  return (
		<div className="flex flex-col h-full mb-4">
			<TotalLegend totalIncome={totalIncome} totalExpense={totalExpense} />
			<CircleChart totalIncome={totalIncome} totalExpense={totalExpense} />
		</div>
  );
}
