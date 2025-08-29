import { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "@/components/Input";
import PageContainer from "@/components/PageContainer";
import CircleChart from "@/components/CircleChart";
import ToggleGroup from "@/components/TogglerGroup";
import { getTotalByDateRange } from "@/utils/transactions";
import { useStore } from "@/store";
import { getDateRange } from "@/utils/date";

type PeriodTypesLabels = "week" | "month" | "custom";
type PeriodTypesType = {type: PeriodTypesLabels; label: string}[]

const getPeriodTypes = (t: (a: string) => string): PeriodTypesType => ([
  {type: "week", label: t("week")},
  {type: "month", label: t("month")},
  {type: "custom", label: t("custom")},
]);

export default function BudgetCalculationPage() {
  const {t} = useTranslation();
  const {transactions} = useStore();
  const [amount, setAmount] = useState<string>("");
  const [period, setPeriod] = useState<PeriodTypesLabels>("month");

  const {start, end} = getDateRange(period);
  const {totalIncome, totalExpense} = getTotalByDateRange(transactions, start, end)

  return (
    <PageContainer linkTo="/transactions" title={t("calculate-budget")}>
      <div className="flex flex-col items-center">
        <div className="flex flex-col w-full gap-2">
          <ToggleGroup items={getPeriodTypes(t)} selectedItem={period} onChange={(value) => setPeriod(value)}/>
          <Input 
            className="mb-4"
            placeholder={t("add-current-amount-money")}
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