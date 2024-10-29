import { PageContainer } from "@/components/custom/container/page-container";
import { UsersTableCard } from "./components/users-table-card";
import { PageTitle } from "@/components/custom/page-title";
import { Suspense } from "react";

export default function UsersPage() {
  return (
    <PageContainer>
      <PageTitle title="Users" />
      
      <Suspense>
        <UsersTableCard />
      </Suspense>
    </PageContainer>
  );
}
