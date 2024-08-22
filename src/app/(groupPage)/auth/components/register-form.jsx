"use client";

import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  return (
    <form className="flex flex-col gap-4 w-full">
      <Controller
        name="emailOrUsername"
        control={control}
        render={({ field }) => (
          <Input
            placeholder="Email or Username"
            type="email"
            {...field}
            className="w-full ring-0 focus-visible:ring-offset-0 focus-visible:ring-0"
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input
            placeholder="Password"
            type="password"
            {...field}
            className="w-full ring-0 focus-visible:ring-offset-0 focus-visible:ring-0"
          />
        )}
      />
    </form>
  );
};
