export type TransactionType = 'income' | 'outcome';

export interface ITransaction {
  id: string;
  type: TransactionType;
  amount: number;
  notes?: string;
  date: string; // ISO date string
  createdAt: string; // ISO date string
  updatedAt?: string; // ISO date string
}
