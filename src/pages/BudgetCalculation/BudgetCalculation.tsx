import { useState } from "react";
import Input from "../../components/Input";
import PageContainer from "../../components/PageContainer";
import CircleChart from "../../components/CircleChart";
import ToggleGroup from "../../components/TogglerGroup";
import { getTotalByDateRange } from "../../utils/transactions";
import { useStore } from "../../store";
import { getDateRange } from "../../utils/date";

type PeriodTypes = "week" | "month" | "custom";

const PERIOD_TYPES = [
  {type: "week", label: "Week"},
  {type: "month", label: "Month"},
  {type: "custom", label: "Custom"},
] as {type: PeriodTypes; label: string}[];

export default function BudgetCalculationPage() {
  const {transactions} = useStore();
  const [amount, setAmount] = useState<string>("");
  const [period, setPeriod] = useState<PeriodTypes>("month");

  const {start, end} = getDateRange(period);
  const {totalIncome, totalExpense} = getTotalByDateRange(transactions, start, end)
 
  return (
    <PageContainer isShowBackButton linkTo="/transactions" title="Calculate your budget">
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-full gap-2">
          <ToggleGroup items={PERIOD_TYPES} selectedItem={period} onChange={(value) => setPeriod(value)}/>
          <Input 
            className="mb-4"
            placeholder="Add your current amount of money"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {amount && <CircleChart totalIncome={totalIncome + parseFloat(amount)} totalExpense={totalExpense} />}
      </div>
    </PageContainer>
  );
}