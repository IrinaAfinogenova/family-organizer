import { request } from "../api";
import { LOGIN_URL, REGISTER_URL} from "../urls";

interface ILoginResponse {
  token: string;
}

interface IParamsLogin {
  email: string;
  password: string;
};

interface IParamsRegister extends IParamsLogin {
  name: string;
};

export const loginUser = async (params: IParamsLogin): Promise<void> => 
 request<IParamsLogin, ILoginResponse>(LOGIN_URL, { method: "POST", body: params })
    .then((data) => {
      localStorage.setItem("token", data.token);
    });

export const registerUser = async (params: IParamsRegister): Promise<void> => 
 request<IParamsRegister, void>(REGISTER_URL, { method: "POST", body: params })
