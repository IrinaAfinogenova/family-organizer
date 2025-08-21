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
    <div>
      <DayPicker
        animate
        navLayout="around"
        mode="single"
        modifiers={{
          highlighted: highlightedDays,
        }}
        modifiersClassNames={{
          highlighted: "bg-red-500 text-white rounded-full", // TODO make different colors for different types of transactions
        }}
        onSelect={handleSelect}
      />
      <div className="flex flex-col gap-2">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`
              p-2 w-full flex flex-row justify-between border rounded
              ${transaction.type === "income" ? "bg-green-100" : "bg-red-100"}`
            }
          >
            <p>{transaction.amount}</p>
            <p>{new Date(transaction.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}