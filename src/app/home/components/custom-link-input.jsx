import { InfoPopover } from "@/components/custom/popovers/info-popover";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { linkValidationRules } from "@/utils/link/formValidations";
import { Controller } from "react-hook-form";

export const CustomLinkInput = ({ control, errors }) => (
  <div className="w-full flex justify-start items-center gap-1 py-1 relative">
    <span className="text-app-accent font-semibold ml-1">ShortyLink.com/</span>
    <Separator orientation="vertical" className="h-8 mx-3 w-[1px]" />
    <Controller
      name="customUrl"
      control={control}
      rules={linkValidationRules.customUrl}
      render={({ field }) => (
        <Input
          placeholder="Customize your link"
          {...field}
          className={`border-none shadow-none pl-1
              ${errors.customUrl ? "border border-red-500" : ""}`}
        />
      )}
    />
    {errors.customUrl && (
      <span className="text-red-500 text-xs font-semibold absolute -bottom-2 left-[155px]">
        {errors.customUrl.message}
      </span>
    )}
    <InfoPopover />
  </div>
);
