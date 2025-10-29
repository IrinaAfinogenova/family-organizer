import { useIMask } from "react-imask";
import IMask from "imask";
import Input from "./Input";

const getMaskParams = (today: Date) => ({
  mask: Date,
  pattern: "d.`m.`Y",
  blocks: {
    d: { mask: IMask.MaskedRange, from: 1, to: 31 },
    m: { mask: IMask.MaskedRange, from: 1, to: 12 },
    Y: { mask: IMask.MaskedRange, from: 1900, to: 2099 },
  },
  autofix: true,
  min: today
})

interface DateInputProps {
  onChange: (v: string) => void;
  placeholder?: string;
  errorMessage?: string;
  hasError?: boolean
}

export default function DateInput({ onChange, placeholder, hasError, errorMessage }: DateInputProps) {
  const { ref, value } = useIMask(getMaskParams(new Date()), { onAccept: onChange });

  return (
    <Input
      ref={ref as React.Ref<HTMLInputElement>}
      value={value}
      className="mb-4"
      placeholder={placeholder}
      hasError={hasError}
      errorMessage={errorMessage}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
