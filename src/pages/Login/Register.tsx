import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Button";
import Input from "@/components/Input";
import TextLink from "@/components/TextLink";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, type IRegisterForm } from "@/schemas/Register.schema";
import PageContainer from "@/components/PageContainer";
import { registerUser } from "@/api/actions/auth";
import type { ErrorApiType } from "@/definitions";

const initialFormState = {
  name: "",
  email: "",
  password: ""
};

export default function Register() {
  const {register, handleSubmit, formState: { errors }} = useForm<IRegisterForm>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: initialFormState
  });
  const [apiError, setApiError] = useState<ErrorApiType>(null);
  const {t} = useTranslation();
  const navigate = useNavigate();
  const handleRegister = async ({name, email, password}: IRegisterForm) => {
    try {
      await registerUser({name, email, password});
      navigate(`/login`)
    } catch(err) {
      const error = err as ErrorApiType;
      if (error?.message) {
        setApiError({message: error.message})
      }
    }
  };

  // TODO make universal container for Login, Register and RestorePassword
  return (
    <PageContainer hideBackButton title={t("create-account")}>
      <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col h-full justify-between">
        <div className="flex flex-col w-full gap-4">
          <Input
            {...register("name")}
            placeholder={t("name")}
            hasError={!!errors.email || !!apiError}
            errorMessage={errors.email?.message ? t(errors.email.message) : ""}
          />
          <Input
            {...register("email")}
            placeholder={t("email")}
            hasError={!!errors.email || !!apiError}
            errorMessage={errors.email?.message ? t(errors.email.message) : ""}
          />
          <Input
            {...register("password")}
            type="password"
            placeholder={t("password")}
            hasError={!!errors.email || !!apiError}
            errorMessage={errors.email?.message ? t(errors.email.message) : ""}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Button type="submit">{t("create-account-btn")}</Button>
          <TextLink
            className="text-center"
            hrefTo="/login"
            text={t("already-have-account")}
          />
        </div>
      </form>
    </PageContainer>
  );
};
