import type { ITransaction, TransactionType } from "@/definitions";

export const countTotalAmount = (transactions: ITransaction[]) => 
  transactions.reduce((total, transaction) => total + transaction.amount, 0);

export const filterTransactions = (transactions: ITransaction[], type: TransactionType) =>
   transactions.filter(transaction => transaction.type === type);

export const transactionByDay = (transactions: ITransaction[], date: string) => {
  const target = new Date(date);

  return transactions.filter(transaction => {
    const tx = new Date(transaction.date);

    return tx.getFullYear() === target.getFullYear() && tx.getMonth() === target.getMonth() && tx.getDate() === target.getDate();
  });
};

export const filterExpenseTransactions = (transactions: ITransaction[]) =>
  filterTransactions(transactions, "expense");

export const filterIncomeTransactions = (transactions: ITransaction[]) =>
  filterTransactions(transactions, "income");

export const countTotalExpense = (transactions: ITransaction[]) => 
  countTotalAmount(filterExpenseTransactions(transactions));

export const countTotalIncome = (transactions: ITransaction[]) => 
  countTotalAmount(filterIncomeTransactions(transactions));

export const filterTransactionsByDateRange  = (transactions: ITransaction[], startDate: Date | string, endDate: Date | string) => {
  const startDateObj = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const endDateObj = typeof endDate === 'string' ? new Date(endDate) : endDate;

  return transactions.filter(transaction => {
    const transactionDate = new Date(transaction.date);
    return transactionDate >= startDateObj && transactionDate <= endDateObj;
  });
};

export const getTotalByDateRange = (transactions: ITransaction[], startDate: Date | string, endDate: Date | string) => {
  const filteredTransactions = filterTransactionsByDateRange(transactions, startDate, endDate);

  const incomeItems  = filterIncomeTransactions(filteredTransactions);
  const expenseItems  = filterExpenseTransactions(filteredTransactions);
  const totalIncome = countTotalAmount(incomeItems);
  const totalExpense = countTotalAmount(expenseItems);

  return { totalIncome, totalExpense };
}