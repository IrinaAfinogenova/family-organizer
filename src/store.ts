import { create } from "zustand";
import type { ITransaction, languageType } from "@/definitions";

interface AppState {
  transactions: ITransaction[];
  locale: languageType;
  addTransaction: (item: ITransaction) => void;
  removeTransaction: (item: ITransaction) => void;
  changeLocale: (lang: languageType) => void
}

export const useStore = create<AppState>((set) => ({
  transactions: [],
  locale: "ru-RU",
  addTransaction: (item: ITransaction) => set((state) => ({ transactions: state.transactions.concat([item]) })),
  removeTransaction: (item: ITransaction) => set((state) => ({ transactions: state.transactions.filter((transaction) => transaction.id !== item.id) })),
  changeLocale: (newLocale: languageType) => set(() => ({ locale: newLocale }))
}));
