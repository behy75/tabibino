"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FormValuesDto } from "@/features/auth/models/dto/form-values.dto";
import { useLoginRedirect } from "../../hooks/login-redirect.hook";

export const LoginForm = () => {
  const t = useTranslations("auth");
  const { register, handleSubmit } = useForm<FormValuesDto>();
  const [submitted, setSubmitted] = useState(false);

  useLoginRedirect(submitted);

  const onSubmit = async (data: FormValuesDto) => {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    if (res?.ok) {
      setSubmitted(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-sm mx-auto">
      <input
        {...register("email", { required: true })}
        placeholder={t("login.email")}
        className="w-full border p-2 mb-2"
      />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder={t("login.password")}
        className="w-full border p-2 mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        {t("login.submit")}
      </button>
    </form>
  );
};
