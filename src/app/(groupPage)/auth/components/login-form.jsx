"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";

export const LoginForm = () => {
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col justify-center gap-2"
    >
      <Controller
        name="emailOrUsername"
        control={control}
        render={({ field }) => (
          <Input
            placeholder="Email or Username"
            type="text"
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

      <Button
        type="submit"
        className="w-full bg-app-accent text-secondary hover:bg-app-accent/80"
      >
        Login
      </Button>
    </form>
  );
};
