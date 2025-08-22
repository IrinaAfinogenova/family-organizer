import { ITransaction, TransactionType } from "../definitions";

export const countTotalAmount = (transactions: ITransaction[]) => 
  transactions.reduce((total, transaction) => total + transaction.amount, 0);

export const filterTransactions = (transactions: ITransaction[], type: TransactionType) => {
  return transactions.filter(transaction => transaction.type === type);
}

export const filterExpenseTransactions = (transactions: ITransaction[]) =>
  filterTransactions(transactions, "outcome");

export const filterIncomeTransactions = (transactions: ITransaction[]) =>
  filterTransactions(transactions, "income");

export const countTotalExpense = (transactions: ITransaction[]) => 
  countTotalAmount(filterExpenseTransactions(transactions))

export const countTotalIncome = (transactions: ITransaction[]) => 
  countTotalAmount(filterIncomeTransactions(transactions))
