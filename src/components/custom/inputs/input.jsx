"use client";
import { Input as ShadcnInput } from "@/components/ui/input";
import React from "react";
import { twMerge } from "tailwind-merge";

export const Input = React.forwardRef((props, ref) => {
  return (
    <ShadcnInput
      ref={ref}
      {...props}
      className={twMerge('focus-visible:ring-offset-0 focus-visible:ring-0', props.className)}
    />
  );
});

// Set the display name for the component
Input.displayName = "Input";