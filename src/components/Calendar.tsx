import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import './calendar.css'; // TODO Should be fixed by Tailwind version update

interface ICalendar {
  modifiers?: {[key : string]: Date[]};
  modifiersClassNames?: {[key : string]: string};
  classNames?: {[key : string]: string};
  onSelect?: (date: Date | undefined) => void;
}

export function Calendar({modifiers, modifiersClassNames, onSelect, classNames}: ICalendar) {
  return (
    <DayPicker
      animate
      navLayout="around"
      mode="single"
      classNames={{
        today: "font-bold",
        chevron: `fill-gray-500`,
        ...classNames
      }}
      modifiers={modifiers}
      modifiersClassNames={modifiersClassNames}
      onSelect={onSelect}
    />
  );
}