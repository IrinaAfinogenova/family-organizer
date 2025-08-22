import { useState } from 'react';
import PageContainer from '../../components/PageContainer';
import TabsGroup from '../../components/TabsGroup';
import { countTotalAmount, filterExpenseTransactions, filterIncomeTransactions, filterTransactionsByDateRange } from '../../utils/transactions';
import { useStore } from '../../store';
import TransactionsCollapsible from './TransactionsCollapsible';
import { getDateRange } from '../../utils/date';
import FloatingAddButton from '../../components/FloatingAddButton';
import { useNavigate } from 'react-router-dom';
import CircleChart from '../../components/CircleChart';

// TODO support desktop view (button add)
const TABS = [
  {id: 'month', title: 'Month'},
  {id: 'week', title: 'Week'},
  {id: 'last-month', title: 'Last month'},
  {id: 'custom', title: 'Custom'}, // TODO add custom date range functionality
];

export default function Transactions() {
  const { transactions } = useStore();
  const [selectedTab, setSelectedTab] = useState<string>('month');
  const { start, end } = getDateRange(selectedTab);
  const filteredTransactions = filterTransactionsByDateRange(transactions, start, end);

  const incomeItems  = filterIncomeTransactions(filteredTransactions)
  const expenseItems  = filterExpenseTransactions(filteredTransactions)
  const totalIncome = countTotalAmount(incomeItems);
  const totalExpense = countTotalAmount(expenseItems);

  const navigate = useNavigate();

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
      {transactions.length !== 0 && <CircleChart totalIncome={totalIncome} totalExpense={totalExpense} />}
      <FloatingAddButton onClick={() => { navigate(`/calendar`);}}/>
    </PageContainer>
  );
}