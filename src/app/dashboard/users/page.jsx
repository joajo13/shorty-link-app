import { PageContainer } from "@/components/custom/container/page-container";
import { UsersTable } from "./components/users-table";

export default function UsersPage() {
  return (
    <PageContainer>
      <h1>Users</h1>
      
      <UsersTable />
    </PageContainer>
  );
}