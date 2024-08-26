import { PageContainer } from "@/components/custom/container/page-container";
import { LinkManager } from "./components/link-manager";
import { getServerSession } from "next-auth";
import { authOptions } from "@/constants/authOptions";
import { fetchUserLinks } from "@/lib/data";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  let initialLinks = [];
  if (session) {
    initialLinks = await fetchUserLinks(session.user.id);
  }

  return (
    <PageContainer sectionClassName="px-2">
      <LinkManager initialLinks={initialLinks}/>
    </PageContainer>
  );
}
