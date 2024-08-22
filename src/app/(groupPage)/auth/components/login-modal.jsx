import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "./login-form";
import { FaGoogle } from "react-icons/fa";

export const LoginModal = () => {
  return (
    <Dialog className>
      <DialogTrigger asChild>
        <Button className="w-full bg-app-secondary-accent hover:bg-app-secondary-accent/90">
          Login
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Keep track of your permanent links by logging in.
          </DialogDescription>
        </DialogHeader>
        <LoginForm />

        <DialogFooter>
          <Button className="w-full bg-app-secondary-accent hover:bg-app-secondary-accent/90 flex justify-start items-center gap-2 mt-2">
            <FaGoogle></FaGoogle>
            Login with Google
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
