import { PageContainer } from "@/components/custom/container/page-container";
import { NewLinkForm } from "./components/new-link-form";
import { LinkList } from "./components/link-list";
import { getServerSession } from "next-auth";
import { authOptions } from "@/constants/authOptions";
import { PublicLinkList } from "./components/public-link-list";
import { Separator } from "@/components/ui/separator"

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <PageContainer sectionClassName="px-2">
      <NewLinkForm />

      <Separator className="my-4" />

      {session ? <LinkList /> : <PublicLinkList />}
    </PageContainer>
  );
}
