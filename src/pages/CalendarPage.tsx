import { useNavigate } from "react-router-dom";
import { Calendar } from "../components/Calendar";
import PageContainer from "../components/PageContainer";
import { useStore } from "../store";
import { filterExpenseTransactions, filterIncomeTransactions } from "../utils/transactions";

export default function CalendarPage() {
  const navigate = useNavigate();
  const { transactions } = useStore(); // TODO this should not be in this component
  const highlightedDaysRed = filterExpenseTransactions(transactions).map((transaction) => new Date(transaction.date));
  const highlightedDaysGreen = filterIncomeTransactions(transactions).map((transaction) => new Date(transaction.date));

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      navigate("/add-transaction", { state: { date: date } })
    }
  };

  return (
    <PageContainer isShowBackButton linkTo="/transactions" title="Pick a transaction date">
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