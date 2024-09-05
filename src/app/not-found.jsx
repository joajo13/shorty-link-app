import { PageContainer } from "@/components/custom/container/page-container";

export default function NotFound() {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-app-accent to-slate-900 text-transparent bg-clip-text h-14">
        404 - Page Not Found
      </h1>
    </PageContainer>
  );
}
