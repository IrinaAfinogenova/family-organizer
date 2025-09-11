import { create } from "zustand";
import type { ITask, ITransaction, IUser, languageType } from "@/definitions";

export interface IAppState {
  transactions: ITransaction[];
  tasks: ITask[];
  locale: languageType;
  user: IUser | null;
  setTransactions: (items: ITransaction[]) => void;
  addTransaction: (item: ITransaction) => void;
  removeTransaction: (item: ITransaction) => void;
  setTasks: (items: ITask[]) => void;
  addTask: (item: ITask) => void;
  changeLocale: (lang: languageType) => void;
  addUser: (user: IUser) => void;
}

export const useStore = create<IAppState>((set) => ({
  transactions: [],
  tasks: [],
  locale: "ru-RU",
  user: null,
  setTransactions: (items) => set(() => ({ transactions: items })),
  addTransaction: (item) => set((state) => ({ transactions: state.transactions.concat([item]) })),
  removeTransaction: (item) => set((state) => ({ transactions: state.transactions.filter((transaction) => transaction.id !== item.id) })),
  setTasks: (items) => set(() => ({ tasks: items })),
  addTask: (item) => set((state) => ({ tasks: state.tasks.concat([item]) })),
  changeLocale: (newLocale) => set(() => ({ locale: newLocale })),
  addUser: (user) => set(() => ({ user })),
}));
