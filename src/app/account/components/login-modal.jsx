import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "./login-form";
import { FaGoogle } from "react-icons/fa";
import { LoginButton } from "@/components/custom/buttons/login-button";
import { GoogleButton } from "../../../components/custom/buttons/google-button";

export const LoginModal = () => {
  return (
    <Dialog className>
      {/* Login button */}
      <DialogTrigger asChild>

        <LoginButton/>

      </DialogTrigger>

      {/* Modal */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Keep track of your permanent links by logging in.
          </DialogDescription>
        </DialogHeader>

        {/* Login form */}
        <LoginForm />

        {/* Google login button */}
        <DialogFooter>
          <GoogleButton/>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
