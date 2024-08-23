import { Input } from "@/components/custom/inputs/input";

import { PageContainer } from "@/components/custom/container/page-container";
import { NewLinkForm } from "./components/new-link-form";
import { LinkList } from "./components/link-list";

export default function HomePage() {
  return (
    <PageContainer sectionClassName="px-2">
      <NewLinkForm />

      <LinkList />
    </PageContainer>
  );
}
