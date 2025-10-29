interface CircleChartProps {
  totalIncome: number;
  totalExpense: number;
  size?: number;
  strokeWidth?: number;
}

const CircleChart = ({ totalIncome, totalExpense, size = 150, strokeWidth = 15 }: CircleChartProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate the percentage of expenses relative to income
  const expensePercent = Math.min(totalExpense / totalIncome, 1);
  const expenseOffset = circumference * (1 - expensePercent);

  return (
    <div className="flex justify-center w-full space-x-4">
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#86efac"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#fca5a5" 
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={expenseOffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotate to start from the top
        />
      </svg>
    </div>
  );
};

export default CircleChart;
