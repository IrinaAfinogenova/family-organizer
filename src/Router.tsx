import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Transactions from "@/pages/Transactions/Transactions";
import CalendarPage from "@/pages/CalendarPage";
import AddTransaction from "@/pages/AddTransaction";
import BudgetCalculation from "@/pages/BudgetCalculation/BudgetCalculation";
import DayExpense from "@/pages/DayExpense/DayExpense";
import Settings from "@/pages/Settings/Settings";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/budget-calculate" element={<BudgetCalculation />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/add-transaction" element={<AddTransaction />} />
      <Route path="/day-expense" element={<DayExpense />} />
    </Routes>
  );
}
