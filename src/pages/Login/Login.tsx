import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PageContainer from "@/components/PageContainer";
import { login } from "@/api/actions/auth";

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    login({email, password})
      .then(() => navigate(`/transactions`))
      .catch((error) => {
        setError(error.message)
      });
  };

  return (
    <PageContainer
      hideBackButton
      title={t("sign-in-system")}
    >
      <form onSubmit={handleLogin} className="flex flex-col h-full justify-between">
        <div className="flex flex-col w-full gap-4">
          <Input className="text-green-500" placeholder={t("Email")} value={email} onChange={e => setEmail(e.target.value)} />
          <Input className="text-green-500" type="Password" placeholder={t("Password")} value={password} onChange={e => setPassword(e.target.value)} />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {/* TODO make textButtonComponent */}
          <a className="text-green-500 text-sm underline">{t("forgot-password")}</a>
        </div>
        <Button type="submit">{t("sign-in")}</Button>
      </form>
    </PageContainer>
  );
};

export default Login;
