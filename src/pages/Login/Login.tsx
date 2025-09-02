import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PageContainer from "@/components/PageContainer";
import { login } from "@/api/actions/auth";
import { LoginSchema, type ILoginForm } from "@/schemas/login.schema";
import { useState } from "react";
import TextLink from "@/components/TextLink";

type ErrorApiType = { message: string } | null;

const initialFormState = {
  email: "",
  password: ""
};

const Login = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<ILoginForm>({
    resolver: zodResolver(LoginSchema),
    defaultValues: initialFormState
  });
  const [apiError, setApiError] = useState<ErrorApiType>(null);
  const navigate = useNavigate();
  const {t} = useTranslation();

  const handleLogin = async ({email, password}: ILoginForm) => {
    try {
      await login({email, password});
      navigate(`/transactions`);
    } catch(err) {
      const error = err as ErrorApiType;
      if (error?.message) {
        setApiError({message: error.message})
      }
    }
  };

  return (
    <PageContainer hideBackButton title={t("sign-in-system")}>
      <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col h-full justify-between">
        <div className="flex flex-col w-full gap-4">
          <Input
            {...register("email")}
            className="text-green-500"
            placeholder={t("Email")}
            hasError={!!errors.email || !!apiError}
            errorMessage={errors.email?.message ? t(errors.email.message) : ""}
          />
          <Input
            {...register("password")}
            className="text-green-500"
            type="Password"
            placeholder={t("Password")}
            hasError={!!errors.password || !!apiError}
            errorMessage={errors.password?.message ? t(errors.password.message) : ""}
          />
          {apiError && <p className="text-rose-700 text-sm">{t(apiError.message)}</p>}
          <TextLink hrefTo="/restore-password" text={t("forgot-password")} />
        </div>
        <div className="flex flex-col gap-2">
          <Button type="submit">{t("sign-in")}</Button>
          <TextLink
            className="text-center"
            hrefTo="/register"
            text={t("do-not-have-account")}
          />
        </div>
      </form>
    </PageContainer>
  );
};

export default Login;
