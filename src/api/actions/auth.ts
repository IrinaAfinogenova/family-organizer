import type { IUser } from "@/definitions";
import { request } from "../api";
import { LOGIN_URL, REGISTER_URL, GET_USER_URL } from "../urls";

interface ILoginResponse {
  token: string;
  user: IUser;
}

interface IParamsLogin {
  email: string;
  password: string;
};

interface IParamsRegister extends IParamsLogin {
  name: string;
};

export const loginUser = async (params: IParamsLogin): Promise<IUser> => 
 request<IParamsLogin, ILoginResponse>(LOGIN_URL, { method: "POST", body: params })
    .then(({ user }) => user);

export const registerUser = async (params: IParamsRegister): Promise<void> => 
 request<IParamsRegister, void>(REGISTER_URL, { method: "POST", body: params });

export const getUser = async (): Promise<IUser> => 
 request<IParamsRegister, IUser>(GET_USER_URL, { method: "GET" });
