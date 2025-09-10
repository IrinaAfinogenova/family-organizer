import { Routes, Route } from "react-router-dom";
import Tasks from "@/pages/Tasks/Tasks";
import Home from "@/pages/Home";
import Transactions from "@/pages/Transactions/Transactions";
import CalendarPage from "@/pages/CalendarPage";
import AddTransaction from "@/pages/AddTransaction";
import BudgetCalculation from "@/pages/BudgetCalculation/BudgetCalculation";
import DayExpense from "@/pages/DayExpense/DayExpense";
import Settings from "@/pages/Settings/Settings";
import Register from "@/pages/Login/Register";
import Login from "@/pages/Login/Login";
import RestorePassword from "@/pages/Login/RestorePassword";
import PrivateRoute from "./PrivateRoute";
import CreateTask from "./pages/Tasks/CreateTask";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/restore-password" element={<RestorePassword />} />
      <Route path="/transactions" element={<PrivateRoute><Transactions /></PrivateRoute>} />
      <Route path="/budget-calculate" element={<PrivateRoute><BudgetCalculation /></PrivateRoute>} />
      <Route path="/calendar" element={<PrivateRoute><CalendarPage /></PrivateRoute>} />
      <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
      <Route path="/add-transaction" element={<PrivateRoute><AddTransaction /></PrivateRoute>} />
      <Route path="/day-expense" element={<PrivateRoute><DayExpense /></PrivateRoute>} />
      <Route path="/tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
      <Route path="/create-task" element={<PrivateRoute><CreateTask /></PrivateRoute>} />
    </Routes>
  );
}
