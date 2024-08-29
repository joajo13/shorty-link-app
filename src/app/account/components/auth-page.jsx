import { GoogleButton } from "../../../components/custom/buttons/google-button";
import { RegisterModal } from "./register-modal";
import { LoginModal } from "./login-modal";

export const AuthPage = () => {
  return (
    <div className="h-app w-full px-3 bg-white flex flex-col justify-between">
      <Header />
      <AuthOptions />
    </div>
  );
};

function Header() {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <h1 className="text-5xl font-bold text-primary py-2">
        Shorty<span className="text-app-accent">Link</span>
      </h1>
      <p className="text-md text-center text-gray-500">
        Keep track of your permanent links by joining us!
      </p>
      <p className="mt-2 text-md text-center text-app-accent/70">
        You can also try it out without signing up.
      </p>
    </div>
  );
}

function AuthOptions() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-full pb-4 flex flex-col items-center gap-2">
        <GoogleButton />
        <RegisterModal />
      </div>
      <LoginModal />
    </div>
  );
}
