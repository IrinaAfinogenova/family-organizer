export type TransactionType = 'income' | 'outcome';

export interface ITransaction {
  id: string;
  type: TransactionType;
  amount: number;
  notes?: string;
  date: Date;
  createdAt: Date;
  updatedAt?: Date;
}
