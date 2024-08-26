"use client";
import { Input } from "@/components/custom/inputs/input";
import { GenerateLinkButton } from "./generate-link-button";
import { useForm, Controller } from "react-hook-form";
import { useCreateLink } from "@/hooks/link/useCreateLink";
import { useSession } from "next-auth/react";
import { linkValidationRules } from "@/utils/link/formValidations";
import { CustomLinkInput } from "./custom-link-input";

export const NewLinkForm = () => {
  const { data: session } = useSession();
  const { callCreateLinkMutation } = useCreateLink();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      url: "",
      customUrl: "",
    },
  });

  const onSubmit = async ({ url, customUrl }) => {
    if (!session) return;

    const response = await callCreateLinkMutation({
      userId: session.user.id,
      url,
      customUrl,
    });

    if (response.error) {
      return;
    }
  };

  return (
    <form
      className="flex flex-col gap-3 py-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <UrlInput control={control} errors={errors} />
      <CustomLinkInput control={control} errors={errors} />
      <GenerateLinkButton text={"Generate Link"} />
    </form>
  );
};

// Componente reutilizable para mostrar errores
const ErrorMessage = ({ message }) => (
  <span className="text-red-500 text-xs font-semibold absolute -bottom-5 left-1">
    {message}
  </span>
);

const UrlInput = ({ control, errors }) => (
  <div className="relative">
    <Controller
      name="url"
      control={control}
      rules={linkValidationRules.url}
      render={({ field }) => (
        <Input
          placeholder="Enter your link here"
          {...field}
          className={`w-full ${errors.url ? "border border-red-500" : ""}`}
        />
      )}
    />
    {errors.url && <ErrorMessage message={errors.url.message} />}
  </div>
);
