import { useState } from 'react';
import PageContainer from '../../components/PageContainer';
import TabsGroup from '../../components/TabsGroup';
import { countTotalAmount, filterExpenseTransactions, filterIncomeTransactions } from '../../utils/transactions';
import { useStore } from '../../store';
import TransactionsCollapsible from './TransactionsCollapsible';

const TABS = [
  {id: 'month', title: 'Month'},
  {id: 'week', title: 'Week'},
  {id: 'last-month', title: 'Last month'},
  {id: 'custom', title: 'Custom'},
];

export default function Transactions() {
  const { transactions } = useStore();
  const [selectedTab, setSelectedTab] = useState<string>('month');

  const incomeItems  = filterIncomeTransactions(transactions)
  const expenseItems  = filterExpenseTransactions(transactions)
  const totalIncome = countTotalAmount(incomeItems);
  const totalExpense = countTotalAmount(expenseItems);


  return (
    <PageContainer linkTo="/calendar" title="Transactions">
      <TabsGroup tabs={TABS} selectedTabId={selectedTab} onTabChange={setSelectedTab}/>
      <div>
        {transactions.length === 0 &&
          <div className="text-center text-gray-500">No transactions found</div>
        }
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
      </div>
    </PageContainer>
  );
}