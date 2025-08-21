import { Calendar } from "../components/Calendar";
import BudgetSummary from "./BudgetSummary";

export default function CalendarPage() {
  return (
    <div className="flex flex-col">
      <Calendar />
      <BudgetSummary />
    </div>);
}