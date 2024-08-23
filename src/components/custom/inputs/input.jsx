"use client";
import { Input as ShadcnInput } from "@/components/ui/input";

export const Input = ({classname: inputClassname, ...props}) => {

  return (
    <ShadcnInput
      {...props}
      className={`focus-visible:ring-offset-0 focus-visible:ring-0 ${inputClassname}`}
    />
  );
};
