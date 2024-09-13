import { PageContainer } from "@/components/custom/container/page-container";
import { NewUsersTableCard } from "./components/new-users-table-card";
import { PageTitle } from "@/components/custom/page-title";

export default function NewUsersPage() {
  
  return (
    <PageContainer>
      <PageTitle title='Users' />

      <NewUsersTableCard />
    </PageContainer>
  );
}
