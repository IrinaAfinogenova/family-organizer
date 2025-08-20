import { useNavigate } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export function Calendar() {
  const navigate = useNavigate();
  const handleSelect = (date: Date | undefined) => {
    if (date) {
      navigate("/add-transaction", { state: { date: date } })
    }
  };

  return (
    <DayPicker
      animate
      mode="single"
      onSelect={handleSelect}
    />
  );
}