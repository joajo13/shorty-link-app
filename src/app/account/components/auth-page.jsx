import { GoogleButton } from "@/components/custom/buttons/google-button";

export const AuthPage = () => {
  return (
    <div className="w-full px-3 bg-white flex flex-col justify-between">
      <Header />
      <AuthOptions />
    </div>
  );
};

function Header() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h2 className="text-6xl h-20 mb-10 font-bold bg-gradient-to-r from-slate-900 via-40% via-green-700 to-app-accent text-transparent bg-clip-text">
          ShortyLink
        </h2>
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
    <div className="flex flex-col items-center justify-center gap-2 py-16">
      <div className="w-full pb-4 flex flex-col items-center gap-2">
        <GoogleButton />
        {/* <RegisterModal /> */}
      </div>
      {/* <LoginModal /> */}
    </div>
  );
}
