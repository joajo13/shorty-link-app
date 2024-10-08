import { PageContainer } from "@/components/custom/container/page-container";
import { PageTitle } from "@/components/custom/page-title";
import { UsersTableCard } from "./new/components/new-users-table-card";

export default function UsersPage() {
  return (
    <PageContainer>
      <PageTitle title="New Users" />

      <UsersTableCard />
    </PageContainer>
  );
}
