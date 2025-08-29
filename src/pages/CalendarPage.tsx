import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar } from "@/components/Calendar";
import PageContainer from "@/components/PageContainer";
import { useStore } from "@/store";
import { filterExpenseTransactions, filterIncomeTransactions } from "@/utils/transactions";

export default function CalendarPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { transactions } = useStore();
  const highlightedDaysRed = filterExpenseTransactions(transactions).map((transaction) => new Date(transaction.date));
  const highlightedDaysGreen = filterIncomeTransactions(transactions).map((transaction) => new Date(transaction.date));

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      navigate("/add-transaction", { state: { date: date } })
    }
  };

  return (
    <PageContainer linkTo="/transactions" title={t("pick-date")}>
      <div className="flex flex-col items-center">
        <Calendar
          modifiersClassNames={{
            highlightedRed: "dot-top-right", 
            highlightedGreen: "dot-green",
          }}
          modifiers={{
            highlightedRed: highlightedDaysRed,
            highlightedGreen: highlightedDaysGreen
          }}
          onSelect={handleSelect}
        />
      </div>
    </PageContainer>);
}