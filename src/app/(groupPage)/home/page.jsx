import { Input } from "@/components/ui/input";

export default function HomePage() {
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
          <Input
            placeholder="Shorten your link"
            className="w-full"
            />
        </div>
      </div>
    </main>
  );
}