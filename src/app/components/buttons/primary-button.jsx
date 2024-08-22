'use client';
import { Button } from "@/components/ui/button"

export const PrimaryButton = ({text, className, handleOnClick = () => {}}) => {
  const buttonClass = `w-full bg-app-primary text-app-secondary hover:bg-app-primary/80 ${className}`;

  return (
    <Button className={buttonClass} onClick={handleOnClick}>
        {text}
    </Button>
  )
}