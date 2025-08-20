import { useState } from 'react';
import { useLocation } from "react-router-dom";
import Input from '../components/Input';
import Button from '../components/Button';
import ToggleGroup from '../components/TooglerGroup';

const TRANSACTION_TYPES = [
  {type: "income", label: "Доход"},
  {type: "outcome", label: "Расход"},
]

export default function AddTransaction() {
  const [type, setType] = useState<string>("income");
  const [amount, setAmount] = useState<string>('');
  const [notes, setNotes] = useState<string>("");
  const location = useLocation();
  const date = location.state?.date;

  return (
    <div className="flex flex-col gap-2">
      <span>Add transaction {date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric'})}</span>
      <Input placeholder="amount" type="number" onChange={(e) => setAmount(e.target.value)} />
      <ToggleGroup
        items={TRANSACTION_TYPES}
        selectedItem={type}
        onChange={(value: string) => setType(value)}
      />
      <Input placeholder="Notes" onChange={(e) => setNotes(e.target.value)}/>

      <Button variant="primary">Add transaction</Button>
    </div>
  );
}