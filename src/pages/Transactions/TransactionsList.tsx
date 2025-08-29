import TransactionsCollapsible from './TransactionsCollapsible';
import type { ITransaction } from '@/definitions';
import { countTotalAmount } from '@/utils/transactions';

interface ITransactionsList {
	incomeItems: ITransaction[];
	expenseItems: ITransaction[];
}

export default function TransactionsList({ incomeItems, expenseItems }: ITransactionsList) {
	const totalIncome = countTotalAmount(incomeItems);
	const totalExpense = countTotalAmount(expenseItems);
	
  return (
    <>
      {!!incomeItems.length && 
        <TransactionsCollapsible
          title={`Income ($${totalIncome})`}
          transactions={incomeItems}
          type="income"
        />
      }
      {!!expenseItems.length && 
        <TransactionsCollapsible
          title={`Expense ($${totalExpense})`}
          transactions={expenseItems}
          type="outcome"
        />
      }
    </>
  );
}