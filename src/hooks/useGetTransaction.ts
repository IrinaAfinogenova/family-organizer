import { fetchTransactions } from "@/api/actions/transactions";
import { useStore } from "@/store";
import { useEffect, useState } from "react";

export const useGetTransaction = () => {
  const { setTransactions, transactions } = useStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTransactions().then((transactionList) => {
      setTransactions(transactionList)
    }).catch((error) => {
      console.error(error); // TODO ERROR HANDLER
    }).finally(() => setLoading(false))
  }, [setTransactions]);

  return { loading, transactions };
};