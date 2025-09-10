import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageContainer from '@/components/PageContainer';
import TabsGroup from '@/components/TabsGroup';
import { filterExpenseTransactions, filterIncomeTransactions, filterTransactionsByDateRange } from '@/utils/transactions';
import { getDateRange } from '@/utils/date';
import FloatingAddButton from '@/components/FloatingAddButton';
import Button from '@/components/Button';
import TogglerGroup from '@/components/TogglerGroup';
import TransactionsList from './TransactionsList';
import { CalendarView } from './CalendarView';
import { periodTabs, MODES } from './tabs';
import { useGetTransaction } from '../../hooks/useGetTransaction';

// TODO support desktop view (button add)
export default function Transactions() {
  const { t } = useTranslation();
  const { loading, transactions} = useGetTransaction();
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

  if (loading) {
    return <p>fetching transactions</p>; //TODO add sceleton here
  }

  return (
    <PageContainer hideBackButton linkTo="/calendar" title={t("my-budget")}>
      <div className="flex flex-row gap-4 justify-end">
        {mode === 'list' && 
          <TabsGroup tabs={periodTabs(t)} selectedTabId={selectedTab} onTabChange={setSelectedTab}/>
        }
        <TogglerGroup
          className="h-10 gap-1"
          items={MODES}
          selectedItem={mode}
          onChange={(mode) => setMode(mode)}
        />
      </div>
      {transactions.length === 0 &&
        <div className="text-center text-gray-500">{t("no-records-added")}</div>
      }
      {mode === 'list' &&
        <>
          <TransactionsList incomeItems={incomeItems} expenseItems={expenseItems} />
          <FloatingAddButton onClick={() => { navigate(`/calendar`);}}/>
          {!!transactions.length && 
            <Button variant="primary" onClick={handleBudgetCalculate}>{t("calculate-budget")}</Button>
          }
        </>
      }
      {mode === 'calendar' && <CalendarView transactions={transactions} />}
    </PageContainer>
  );
}