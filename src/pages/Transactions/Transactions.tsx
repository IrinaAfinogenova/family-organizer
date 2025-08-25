import { useState } from 'react';
import { IconCalendar, IconList } from '@tabler/icons-react';
import PageContainer from '../../components/PageContainer';
import TabsGroup from '../../components/TabsGroup';
import { filterExpenseTransactions, filterIncomeTransactions, filterTransactionsByDateRange } from '../../utils/transactions';
import { useStore } from '../../store';
import { getDateRange } from '../../utils/date';
import FloatingAddButton from '../../components/FloatingAddButton';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import TogglerGroup from '../../components/TogglerGroup';
import TransactionsList from './TransactionsList';
import { CalendarView } from './CalendarView';

// TODO support desktop view (button add)
const TABS = [
  {id: 'month', title: 'Month'},
  {id: 'week', title: 'Week'},
  {id: 'last-month', title: 'Last month'},
//  {id: 'custom', title: 'Custom'}, // TODO add custom date range functionality
];

const MODES = [
  {type: 'list', label: <IconList />},
  {type: 'calendar', label: <IconCalendar />},
]

export default function Transactions() {
  const { transactions } = useStore();
  const [selectedTab, setSelectedTab] = useState<string>('month');
  const [mode, setMode] = useState<string>('list');

  const { start, end } = getDateRange(selectedTab);
  const filteredTransactions = filterTransactionsByDateRange(transactions, start, end);
  const incomeItems  = filterIncomeTransactions(filteredTransactions);
  const expenseItems  = filterExpenseTransactions(filteredTransactions);

  const navigate = useNavigate();
  const handleBudgetCalculate = () => {
    navigate(`/budget-calculate`);
  };

  return (
    <PageContainer linkTo="/calendar" title="Transactions">
      <div className="flex flex-row gap-4 justify-end">
        {mode === 'list' && 
          <TabsGroup tabs={TABS} selectedTabId={selectedTab} onTabChange={setSelectedTab}/>
        }
        <TogglerGroup
          className="h-10 gap-1"
          items={MODES}
          selectedItem={mode}
          onChange={(mode) => setMode(mode)}
        />
      </div>
      {transactions.length === 0 &&
        <div className="text-center text-gray-500">No transactions found</div>
      }
      {mode === 'list' &&
        <>
          <TransactionsList incomeItems={incomeItems} expenseItems={expenseItems} />
          <FloatingAddButton onClick={() => { navigate(`/calendar`);}}/>
          <Button variant="primary" onClick={handleBudgetCalculate}>Calculate budget</Button>
        </>
      }
      {mode === 'calendar' && 
        <CalendarView transactions={transactions} />
      }
    </PageContainer>
  );
}