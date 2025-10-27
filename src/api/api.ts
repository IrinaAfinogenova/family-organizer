import type { HttpMethodType } from "@/definitions";
import { ErrorApi } from "@/utils/error";

const UNKNOWN_ERROR = "unknown-error-message";

interface IRequestParams<T> {
  method?: HttpMethodType;
  body?: T;
  baseUrl?: string;
}

type requestType = <T, B>(url: string, params?: IRequestParams<T>) => Promise<B>

const handleUnauthorized = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
}

export const request: requestType = async (url, params = {}) => {
  const token = localStorage.getItem("token");
  const { method = "GET", body } = params;
  let result = null;

  try {
    result = await fetch(url, {
      method,
      headers: { 
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(body),
      credentials: "include",
    });
  } catch {
     throw new ErrorApi(500, UNKNOWN_ERROR);
  }

  if (result.status === 401 || result.status === 403) {
    handleUnauthorized();
    throw new ErrorApi(result.status, "unauthorized");
  }

  const data = await result.json();

  if (!result.ok) {
    throw new ErrorApi(result.status, data.message || UNKNOWN_ERROR);
  }

  return data;
}