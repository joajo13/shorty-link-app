import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

export const DeleteButton = ({ buttonClassName, handleOnClick }) => {
  return (
    <Button
      variant="ghost"
      onClick={handleOnClick}
      className={twMerge(
        "text-destructive hover:bg-destructive/10 hover:text-destructive",
        buttonClassName
      )}
    >
      Delete
    </Button>
  );
};
