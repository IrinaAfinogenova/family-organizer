import { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconArrowLeft } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import Input from '../components/Input';
import Button from '../components/Button';
import TogglerGroup from '../components/TogglerGroup';
import { useStore } from "../store";
import type { TransactionType } from '../definitions';

import Textarea from '../components/Textarea';

type transactionType = {type: TransactionType; label: string, classNameSelected: string};

const getTransactionType = (t: (a: string) => string): transactionType[] => ([
  {type: "income", label: t("income"), classNameSelected: "bg-green-300 text-white"},
  {type: "outcome", label: t("expense"), classNameSelected: "bg-red-300 text-white"},
]);

export default function AddTransaction() {
  const { t, i18n } = useTranslation();
  const { addTransaction } = useStore();
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
  }

  // TODO use page container
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-row items-center gap-2 mb-6">
        <Link to="/calendar" className="">
          <IconArrowLeft />
        </Link>
        <span className="text-lg font-bold text-center w-full">
          {t("new-entry")} {date.toLocaleDateString(i18n.language, { day: 'numeric', month: 'long', year: 'numeric'})}
        </span>
      </div>
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
    </div>
  );
}