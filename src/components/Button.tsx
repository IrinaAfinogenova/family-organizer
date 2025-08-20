
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "secondary",
  className = "",
  ...props
}: IButton) {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-green-400 text-white hover:bg-green-500 focus:ring-green-400",
    secondary: "bg-green-200 text-white hover:bg-green-300 focus:ring-green-300",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
