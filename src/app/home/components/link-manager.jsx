"use client";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/custom/inputs/input";
import { InfoPopover } from "@/components/custom/popovers/info-popover";
import { GenerateLinkButton } from "./generate-link-button";
import { useForm, Controller } from "react-hook-form";
import { useCreateLink } from "@/hooks/link/useCreateLink";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { LinkList } from "./link-list";

export const LinkManager = ({initialLinks}) => {
  const [links, setLinks] = useState(initialLinks);
  const { callCreateLinkMutation } = useCreateLink();
  const { data: session } = useSession();
  
  const { handleSubmit, control, formState: { errors } } = useForm({
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
      customUrl 
    })

    if (response.error) {
      return;
    }

    setLinks((prevLinks) => [response, ...prevLinks]);
  };

  return (
    <>
      <form
        className="flex flex-col items-start justify-center gap-3 py-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <UrlInput control={control} errors={errors} />
        <CustomLinkInput control={control} errors={errors} />
        <GenerateLinkButton />
      </form>
    
      <LinkList initialLinks={links} />
    </>
  );
};

const UrlInput = ({ control, errors }) => {
  const urlValidation = {
    required: "Please enter a url",
    pattern: {
      value: /^https?:\/\/.+/,
      message: "Please enter a valid url",
    },
  };

  return (
    <Controller
      name="url"
      control={control}
      rules={urlValidation}
      render={({ field }) => (
        <Input
          placeholder="Enter your link here"
          {...field}
          className={`w-full ${errors.link ? "ring-1 ring-red-500" : ""}`}
        />
      )}
    />
  );
};

const CustomLinkInput = ({ control, errors }) => {
  const customUrlValidation = {
    required: "Custom link is required",
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message: "Only letters and numbers are allowed",
    },
  };

  return (
    <div className="w-full flex justify-start items-center gap-1 py-2">
      <span className="text-app-accent font-semibold ml-1">
        ShortyLink.com/
      </span>
      <Separator orientation="vertical" className="h-8 mx-3 w-[1px]" />
      <Controller
        name="customUrl"
        control={control}
        rules={customUrlValidation}
        render={({ field }) => (
          <Input
            placeholder="Customize your link"
            {...field}
            className={`bg-gray-100 border-none bg-background shadow-none pl-1
              ${errors.customLink ? "ring-1 ring-red-500" : ""}`}
          />
        )}
      />
      <InfoPopover />
    </div>
  );
};
