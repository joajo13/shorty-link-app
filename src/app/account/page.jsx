"use client";
import { useSession } from "next-auth/react";
import { AuthPage } from "./components/auth-page";
import { UserPage } from "./components/user-page";
import { PageContainer } from "@/components/custom/container/page-container";

export default function AccountPage() {
  const { data: session } = useSession();

  return (
    <PageContainer>
      <div className="h-full w-full px-3 ">
        {session ? <UserPage /> : <AuthPage />}
      </div>
    </PageContainer>
  );
}
