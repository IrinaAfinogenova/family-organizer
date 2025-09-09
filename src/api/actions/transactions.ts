import type { ITransaction } from "@/definitions";
import { request } from "../api";
import { CREATE_TRANSACTION_URL } from "../urls";

type omitKeys = "id" | "user_id" | "createdAt" | "updatedAt" | "repeat";
type createTransactionParamsType = Omit<ITransaction, omitKeys>;

export const createTransaction = async (params: createTransactionParamsType): Promise<ITransaction> => {
  const {date, amount} = params;

  return request<createTransactionParamsType & { repeat: string, date: string }, ITransaction>(CREATE_TRANSACTION_URL, {
    method: "POST",
    body: {
      ...params,
      amount: Number(amount),
      repeat: "once",
      date: (date ? new Date(date) : new Date()).toISOString(),
    }
  })
}