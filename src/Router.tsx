import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import CalendarPage from "./pages/CalendarPage";
import Profile from "./pages/Profile";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
