import { PageContainer } from "@/components/custom/container/page-container";
import { ClicksCard } from "./components/clicks-card";

export default function AnalitycsPage({ params }) {
  const { customUrl } = params;

  return (
    <PageContainer>
      <ClicksCard customUrl={customUrl}/>
    </PageContainer>
  );
}
