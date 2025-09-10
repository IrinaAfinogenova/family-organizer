import type { ITransaction } from "@/definitions";
import { request } from "../api";
import { CREATE_TRANSACTION_URL, GET_TRANSACTION_URL } from "../urls";

type serverGeneratedKeys = "id" | "user_id" | "createdAt" | "updatedAt" | "repeat";
type createTransactionParamsType = Omit<ITransaction, serverGeneratedKeys>;

export const createTransaction = (params: createTransactionParamsType): Promise<ITransaction> => {
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

export const fetchTransaction = ():Promise<ITransaction[]> => request(GET_TRANSACTION_URL);