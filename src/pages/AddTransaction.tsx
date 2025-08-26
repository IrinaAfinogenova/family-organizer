import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Input from '../components/Input';
import Button from '../components/Button';
import TogglerGroup from '../components/TogglerGroup';
import { useStore } from "../store";
import type { TransactionType } from '../definitions';
import Textarea from '../components/Textarea';
import PageContainer from '../components/PageContainer';
import { formatDateFullView } from '../utils/date';

type transactionType = {type: TransactionType; label: string, classNameSelected: string};

const getTransactionType = (t: (a: string) => string): transactionType[] => ([
  {type: "income", label: t("income"), classNameSelected: "bg-green-300 text-white"},
  {type: "outcome", label: t("expense"), classNameSelected: "bg-red-300 text-white"},
]);

export default function AddTransaction() {
  const { t } = useTranslation();
  const { addTransaction, locale } = useStore();
  const [type, setType] = useState<TransactionType>("income");
  const [amount, setAmount] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const date = location.state?.date;
  const handleAddTransaction = () => {
    addTransaction({
      id: crypto.randomUUID(),
      type,
      amount: parseFloat(amount),
      notes,
      date: (date ? new Date(date) : new Date()).toISOString(),
      createdAt: new Date().toISOString(),
    });
    navigate(`/transactions`);
  };
  const formattedDate = formatDateFullView(date, locale);

  return (
    <PageContainer
      isShowBackButton
      linkTo="/transactions"
      title={`${t("new-entry")} ${formattedDate}`}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <TogglerGroup
            className="mb-4 gap-2"
            items={getTransactionType(t)}
            selectedItem={type}
            onChange={(value: TransactionType) => setType(value)}
          />
          <Input className="mb-4" placeholder={t("type-amount")} type="number" onChange={(e) => setAmount(e.target.value)} />
          <Textarea className="mb-4" placeholder={t("notes")} onChange={(e) => setNotes(e.target.value)}/>
        </div>
        <Button variant="primary" onClick={handleAddTransaction}>{t("add-entry")}</Button>
      </div>
    </PageContainer>
  );
}