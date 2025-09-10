import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Input from '@/components/Input';
import Button from '@/components/Button';
import TogglerGroup from '@/components/TogglerGroup';
import { useStore } from "@/store";
import type { TransactionType, TranslationType } from '@/definitions';
import Textarea from '@/components/Textarea';
import PageContainer from '@/components/PageContainer';
import { formatDateFullView } from '@/utils/date';
import { createTransaction } from '@/api/actions/transactions';

type transactionType = {type: TransactionType; label: string, classNameSelected: string};

const getTransactionType = (t: TranslationType): transactionType[] => ([
  {type: "income", label: t("income"), classNameSelected: "bg-green-300 text-white"},
  {type: "expense", label: t("expense"), classNameSelected: "bg-red-300 text-white"},
]);

// TODO use import { useForm } from "react-hook-form"; for error handling
export default function AddTransaction() {
  const { t } = useTranslation();
  const { addTransaction, locale } = useStore();
  const [type, setType] = useState<TransactionType>("income");
  const [amount, setAmount] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const date = location.state?.date;
  const handleAddTransaction = async () => {
    const transaction = await createTransaction({
      type,
      amount: Number(amount),
      notes,
      date: location.state?.date
    });
    addTransaction(transaction);
    navigate(`/transactions`);
  };
  const formattedDate = formatDateFullView(date, locale);

  return (
    <PageContainer
      hideBackButton
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