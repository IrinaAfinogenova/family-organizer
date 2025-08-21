interface ITotalLegend {
  totalIncome: number;
  totalExpense: number;
}

const TotalLegend = ({ totalIncome, totalExpense }: ITotalLegend) => {
  return (
    <div className="flex flex-col space-y-2 mb-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-green-300 w-4 h-4" />
          <span>Income</span>
        </div>
        <span>{totalIncome}$</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-red-300 w-4 h-4" />
          <span>Expense</span>
        </div>
        <span>{totalExpense}$</span>
      </div>
    </div>
  );
};

export default TotalLegend;
