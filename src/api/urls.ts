const API = import.meta.env.VITE_API_URL || "";

export const LOGIN_URL = `${API}/auth/login`;
export const REGISTER_URL = `${API}/auth/register`;
export const GET_USER_URL = `${API}/auth/user`;

export const CREATE_TRANSACTIONS_URL = `${API}/transactions/create`;
export const GET_TRANSACTION_URL = `${API}/transactions`;

export const CREATE_TASK_URL = `${API}/tasks/create`;
export const GET_TASKS_URL = `${API}/tasks`;
