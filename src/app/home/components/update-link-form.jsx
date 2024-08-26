"use client";

import { Separator } from "@/components/ui/separator";
import { Controller, useForm } from "react-hook-form";
import { GenerateLinkButton } from "./generate-link-button";
import { linkValidationRules } from "@/utils/link/formValidations";
import { Input } from "@/components/custom/inputs/input";
import { CustomLinkInput } from "./custom-link-input";

export const UpdateLinkForm = () => {
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
    console.log(url, customUrl);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 py-2"
    >
      <UrlInput control={control} errors={errors} />
      <CustomLinkInput control={control} errors={errors} />

      <GenerateLinkButton
        text="Update Link"
      />
    </form>
  );
};

const UrlInput = ({ control, errors }) => {
  return (
    <Controller
      name="url"
      control={control}
      rules={linkValidationRules.url}
      render={({ field }) => (
        <Input
          {...field}
          label="URL"
          placeholder="https://example.com"
          error={errors.url}
        />
      )}
    />
  );
};