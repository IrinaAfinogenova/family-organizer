import { useNavigate } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useStore } from "../store";
import './calendar.css'; // TODO Should be fixed by Tailwind version update

export function Calendar() {
  const navigate = useNavigate();
  const { transactions } = useStore(); // TODO this should not be in this component
  const highlightedDays = transactions.map((transaction) => new Date(transaction.date));

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      navigate("/add-transaction", { state: { date: date } })
    }
  };

  return (
    <div className="mb-6">
      <DayPicker
        animate
        navLayout="around"
        mode="single"
        modifiers={{
          highlighted: highlightedDays,
        }}
        modifiersClassNames={{
          highlighted: "dot-top-right", // TODO make different colors for different types of transactions
        }}
        onSelect={handleSelect}
      />
    </div>
  );
}