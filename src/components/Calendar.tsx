import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import './calendar.css'; // TODO Should be fixed by Tailwind version update
import { useTranslation } from "react-i18next";
import { enUS, ru } from "react-day-picker/locale";
import type { languageType } from "../definitions";

interface ICalendar {
  modifiers?: {[key : string]: Date[]};
  modifiersClassNames?: {[key : string]: string};
  classNames?: {[key : string]: string};
  onSelect?: (date: Date | undefined) => void;
}

const dayPickerLocales = {
  ["ru-RU"]: ru,
  ["en-US"]: enUS
};

export function Calendar({modifiers, modifiersClassNames, onSelect, classNames}: ICalendar) {
  const { i18n } = useTranslation();
  const locale = i18n.language as languageType;

  return (
    <DayPicker
      animate
      navLayout="around"
      mode="single"
      locale={dayPickerLocales[locale]}
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