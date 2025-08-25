import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions/Transactions";
import CalendarPage from "./pages/CalendarPage";
import Profile from "./pages/Profile";
import AddTransaction from "./pages/AddTransaction";
import BudgetCalculation from "./pages/BudgetCalculation/BudgetCalculation";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/budget-calculate" element={<BudgetCalculation />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/add-transaction" element={<AddTransaction />} />
    </Routes>
  );
}
