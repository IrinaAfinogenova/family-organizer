import type { HttpMethodType } from "@/definitions";
import { ErrorApi } from "@/utils/error";

const UNKNOWN_ERROR = "unknown-error-message";

interface IRequestParams<T> {
  method?: HttpMethodType;
  body?: T;
  baseUrl?: string;
}

type requestType = <T, B>(url: string, params?: IRequestParams<T>) => Promise<B>

export const request: requestType = async (url, params = {}) => {
  const { method = "GET", body } = params;
  let result = null;

  try {
    result = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
     throw new ErrorApi(500, UNKNOWN_ERROR);
  }
  const data = await result.json();

  if (!result.ok) {
    throw new ErrorApi(result.status, data.message || UNKNOWN_ERROR);
  }

  return data;
}