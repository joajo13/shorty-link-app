"use client";
import { Controller, useForm } from "react-hook-form";
import { GenerateLinkButton } from "./generate-link-button";
import { linkValidationRules } from "@/utils/link/formValidations";
import { Input } from "@/components/custom/inputs/input";
import { CustomLinkInput } from "./custom-link-input";
import { useSession } from "next-auth/react";
import { useUpdateLink } from "@/hooks/link/useUpdateLink";
import { toast } from "sonner";

export const UpdateLinkForm = ({ url, customUrl, linkId }) => {
  const { data: session } = useSession();
  const { callUpdateLinkMutation } = useUpdateLink();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      url,
      customUrl,
    },
  });

  const onSubmit = async ({ url, customUrl }) => {
    if (!session) return;

    const loadingToast = toast.loading("Updating link...");
    const response = await callUpdateLinkMutation({
      userId: session.user.id,
      url,
      customUrl,
      linkId,
    });
    toast.dismiss(loadingToast);

    if (response.error) {
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 py-2"
    >
      <UrlInput control={control} errors={errors} />
      <CustomLinkInput control={control} errors={errors} />

      <GenerateLinkButton text="Update Link" />
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
