export type TransactionType = 'income' | 'expense';

export interface ITransaction {
  id: string;
  type: TransactionType;
  amount: number;
  repeat: string; // TODO update types
  notes?: string;
  date: string; // ISO date string
  createdAt: string; // ISO date string
  updatedAt?: string; // ISO date string
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export type TaskType = "once" | "daily" | "monthly";

export type languageType = "ru-RU" | "en-US";

export type TranslationType = (key: string) => string;

export type HttpMethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ErrorApiType = { message: string } | null;