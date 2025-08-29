import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageContainer from "@/components/PageContainer";
import { transactionByDay } from "@/utils/transactions";
import { formatDateShortView } from "@/utils/date";
import { useStore } from "@/store";
import Transaction from "./Transaction";

export default function DayExpense() {
	const { transactions, locale } = useStore();
	const { t } = useTranslation();
	const location = useLocation();
	
  const date = location.state?.date;
  const dayTransactions = transactionByDay(transactions, new Date(date).toISOString());

  return (
		<PageContainer linkTo="/calendar" title={`${t("day-expense")} ${formatDateShortView(date, locale)}`}>
			<div className="flex flex-col">
				{dayTransactions.map((transaction) => (
					<Transaction key={transaction.id} transaction={transaction}/>
				))}
			</div>
		</PageContainer>
  );
}
