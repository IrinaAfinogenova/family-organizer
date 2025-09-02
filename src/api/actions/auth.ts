import { request } from "../api";
import { LOGIN } from "../urls";

interface ILoginResponse {
  token: string
}

interface IParamsLogin {
  email: string,
  password: string
};

export const login = async (params: IParamsLogin): Promise<void> => 
 request<IParamsLogin, ILoginResponse>(LOGIN, { method: "POST", body: params })
    .then((data) => {
      localStorage.setItem("token", data.token);
    });
