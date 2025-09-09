import { create } from "zustand";
import type { ITransaction, IUser, languageType } from "@/definitions";

interface AppState {
  transactions: ITransaction[];
  locale: languageType;
  user: IUser | null;
  addTransaction: (item: ITransaction) => void;
  removeTransaction: (item: ITransaction) => void;
  changeLocale: (lang: languageType) => void;
  addUser: (user: IUser) => void
}

export const useStore = create<AppState>((set) => ({
  transactions: [],
  locale: "ru-RU",
  user: null,
  addTransaction: (item) => set((state) => ({ transactions: state.transactions.concat([item]) })),
  removeTransaction: (item) => set((state) => ({ transactions: state.transactions.filter((transaction) => transaction.id !== item.id) })),
  changeLocale: (newLocale) => set(() => ({ locale: newLocale })),
  addUser: (user) => set(() => ({ user })),
}));
