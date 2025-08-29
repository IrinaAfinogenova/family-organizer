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

export type languageType = "ru-RU" | "en-US";

export type TranslationType = (key: string) => string;