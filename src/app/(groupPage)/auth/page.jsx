'use client'
import { LoginModal } from "./components/login-modal";
import { RegisterModal } from "./components/register-modal";
import { GoogleButton } from "./components/google-button";
import { useSession } from "next-auth/react";

export default function AuthPage() {
  const session = useSession();
  console.log(session);

  return (
    <main className="flex min-h-screen max-h-screen justify-center">
      <div className="h-full bg-white w-full px-3">
        <div className="flex flex-col justify-center py-44 items-center">
          <h1 className="text-primary text-5xl font-semibold">
            Shorty
            <span className="text-app-accent">Link</span>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <h4
            className="text-md font-normal text-slate-500"
          >
            Create an account to start shortening your links
          </h4>
          <div className="flex flex-col justify-center items-center w-full gap-2 pb-4">

          <GoogleButton />
          <RegisterModal />
          </div>
          <LoginModal />
        </div>
      </div>
    </main>
  );
}
