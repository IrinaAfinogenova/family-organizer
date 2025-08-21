// store.ts
import { create } from "zustand";
import { ITransaction } from "./definitions";

interface AppState {
  transactions: ITransaction[];
  addTransaction: (item: ITransaction) => void;
  removeTransaction: (item: ITransaction) => void;
}

export const useStore = create<AppState>((set) => ({
  transactions: [],
  addTransaction: (item: ITransaction) => set((state) => ({ transactions: state.transactions.concat([item]) })),
  removeTransaction: (item: ITransaction) => set((state) => ({ transactions: state.transactions.filter((transaction) => transaction.id !== item.id) })),
}));
