const API = import.meta.env.VITE_API_URL || "";

export const LOGIN_URL = `${API}/auth/login`;

export const REGISTER_URL = `${API}/auth/register`;

export const GET_USER_URL = `${API}/auth/user`;
