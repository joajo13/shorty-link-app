import { Button } from "@/components/ui/button";
import { forwardRef } from "react";

export const LoginButton = forwardRef(function LoginButton(props, ref) {
  return (
    <Button
      className="w-full bg-app-secondary-accent hover:bg-app-secondary-accent/90"
      ref={ref}
      {...props}
    >
      Login
    </Button>
  );
});
