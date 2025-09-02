interface InputProps {
  className?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  errorMessage?: string;
  hasError?: boolean
}

export default function Input({ className, label, type = 'text', hasError, errorMessage, ...props }: InputProps) {
  return (
    <div className={`${className} flex flex-col gap-1`}>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        className={`
          w-full border ${hasError ? "text-rose-300" : "border-gray-300"}
          rounded-md px-3 py-2 ${hasError ? "text-rose-700" : "text-gray-800"}
          placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
          focus:border-blue-500 transition duration-150 ease-in-out`}
        {...props}
      />
      {errorMessage && <p className="text-rose-700 text-sm">{errorMessage}</p>}
    </div>
  );
}