import { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconArrowLeft } from '@tabler/icons-react';
import Input from '../components/Input';
import Button from '../components/Button';
import TogglerGroup from '../components/TogglerGroup';
import { useStore } from "../store";
import { TransactionType } from '../definitions';
import Textarea from '../components/Textarea';

const TRANSACTION_TYPES = [
  {type: "income", label: "Доход", classNameSelected: "bg-green-300 text-white"},
  {type: "outcome", label: "Расход", classNameSelected: "bg-red-300 text-white"},
] as {type: TransactionType; label: string, classNameSelected: string}[];

export default function AddTransaction() {
  const { addTransaction } = useStore();
  const [type, setType] = useState<TransactionType>("income");
  const [amount, setAmount] = useState<string>('');
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
      date: date ? new Date(date) : new Date(),
      createdAt: new Date(),
    });
    navigate(`/calendar`);
  }

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-row items-center gap-2 mb-6">
        <Link to="/calendar" className="">
          <IconArrowLeft />
        </Link>
        <span className="text-lg font-bold text-center w-full">
          Add transaction {date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric'})}
        </span>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div>
          <TogglerGroup
            className="mb-4"
            items={TRANSACTION_TYPES}
            selectedItem={type}
            onChange={(value: TransactionType) => setType(value)}
          />
          <Input className="mb-4" placeholder="amount" type="number" onChange={(e) => setAmount(e.target.value)} />
          <Textarea className="mb-4" placeholder="Notes" onChange={(e) => setNotes(e.target.value)}/>
        </div>
        <Button variant="primary" onClick={handleAddTransaction}>Add transaction</Button>
      </div>
    </div>
  );
}