import { useNavigate } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useStore } from "../store";

export function Calendar() {
  const navigate = useNavigate();
  const { transactions } = useStore();
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
          highlighted: "bg-green-300 text-white rounded-full", // TODO make different colors for different types of transactions
        }}
        onSelect={handleSelect}
      />
    </div>
  );
}