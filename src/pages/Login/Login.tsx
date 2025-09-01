import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PageContainer from "@/components/PageContainer";
import { useTranslation } from "react-i18next";

const API = import.meta.env.VITE_API_URL || "";

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO add it to api.ts
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      const data = await res.json();

      localStorage.setItem("token", data.token); // TODO keep it in Cookie
      navigate(`/transactions`); //TODO set up default route
    } catch(err) {
      console.error('error:', err);
    }
  };

  return (
    <PageContainer
      hideBackButton
      title={t("sign-in-system")}
    >
      <form onSubmit={handleLogin} className="flex flex-col h-full justify-between">
        <div className="flex flex-col w-full gap-4">
          <Input className="bg-green-50" placeholder={t("Email")} value={email} onChange={e => setEmail(e.target.value)} />
          <Input className="bg-green-50" type="Password" placeholder={t("Password")} value={password} onChange={e => setPassword(e.target.value)} />
          <a className="text-green-500 text-sm underline">{t("forgot-password")}</a>
        </div>
        <Button type="submit">{t("sign-in")}</Button>
      </form>
    </PageContainer>
  );
};

export default Login;
