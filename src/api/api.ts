import type { HttpMethodType } from "@/definitions";
import { ErrorApi } from "@/utils/error";

interface IRequestParams<T> {
  method?: HttpMethodType;
  body?: T;
  baseUrl?: string;
}

type requestType = <T, B>(url: string, params?: IRequestParams<T>) => Promise<B>

export const request: requestType = async (url, params = {}) => {
  const { method = "GET", body } = params;

  try {
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();

    if (!res.ok) {
      throw new ErrorApi(res.status, data.message || "unknown error");
    }

    return data;
  } catch {
    throw new Error("unknown error")
  }
}