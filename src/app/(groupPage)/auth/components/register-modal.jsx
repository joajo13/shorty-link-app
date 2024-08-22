import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "./login-form";
import { FaGoogle } from "react-icons/fa";

export const RegisterModal = () => {
  return (
    <Dialog className>
      <DialogTrigger asChild>
        <Button className="w-full bg-primary text-secondary hover:bg-primary/80">
          Join us!
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
          <Button className="w-full bg-primary text-secondary hover:bg-primary/80 flex justify-start items-center gap-2">
            <FaGoogle></FaGoogle>
            Login with Google
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
