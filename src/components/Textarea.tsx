interface ITextarea {
  className?: string;
  placeholder?: string;
  value?: string;
  rows?: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({ className = "", rows = 5, value, onChange, placeholder, ...props }: ITextarea) {
    return (
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder-gray-400 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
          disabled:cursor-not-allowed disabled:opacity-50
          ${className}`}
        {...props}
      />
    );
}
