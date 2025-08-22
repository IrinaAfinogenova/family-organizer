import { useStore } from "../../store";
import CircleChart from "../../components/CircleChart";
import TotalLegend from "./BudgetTotalLegend";
import { countTotalExpense, countTotalIncome } from "../../utils/transactions";

export default function BudgetSummary() {
  const { transactions } = useStore();

	const totalIncome = countTotalIncome(transactions);
	const totalExpense = countTotalExpense(transactions);

  return (
		<div className="flex flex-col h-full mb-4">
			<TotalLegend totalIncome={totalIncome} totalExpense={totalExpense} />
			<CircleChart totalIncome={totalIncome} totalExpense={totalExpense} />
		</div>
  );
}
