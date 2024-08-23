import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { RegisterForm } from "./register-form";
import { GoogleButton } from "@/components/custom/buttons/google-button";

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
          <DialogTitle>Register</DialogTitle>
          <DialogDescription>
            Keep track of your permanent links by join us!
          </DialogDescription>
        </DialogHeader>

        <RegisterForm />

        <DialogFooter>
          <GoogleButton/>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
