"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const PrimaryInput = ({
  placeholder = "Placeholder",
  className = "",
  value = "",
  type = "text",
}) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <Input
      placeholder={placeholder}
      type={type}
      value={inputValue}
      className="w-full ring-0 focus-visible:ring-offset-0 focus-visible:ring-0"
    />
  );
};
