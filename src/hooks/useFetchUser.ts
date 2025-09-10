import { getUser } from "@/api/actions/auth";
import { useStore } from "@/store";
import { useCallback, useEffect, useState } from "react";

export const useFetchUser = () => {
  const {user, addUser} = useStore();
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async() => {
    try {
      const user = await getUser();
      addUser(user);
    } catch(err) {
      console.error(err) //TODO error handler here
    } finally {
      setLoading(false);
    }
  }, [addUser])

  useEffect(() => {
    if (!user) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [user, fetchUser]);

  return { user, loading }
};