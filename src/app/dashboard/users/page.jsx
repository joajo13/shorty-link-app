import { PageContainer } from "@/components/custom/container/page-container";
import { UsersTableCard } from "./components/users-table-card";
import { PageTitle } from "@/components/custom/page-title";

export default function UsersPage() {
  return (
    <PageContainer>
      <PageTitle title='Users' />
      <UsersTableCard />
    </PageContainer>
  );
}
