"use client";
import { PageContainer } from "@/components/custom/container/page-container";
import { useGetLinksByCustomUrl } from "@/hooks/link/useGetLinkByCustomUrl";
import { redirect } from "next/navigation";

export default function CustomUrlPage({ params }) {
  const { customUrl } = params;
  const { isLoading, isError, data } = useGetLinksByCustomUrl(customUrl);

  if (isError || data?.error) {
    return (
      <PageContainer>
        <h1 className="text-3xl font-bold text-center">
          The link you are looking for does not exist.
        </h1>
      </PageContainer>
    );
  }

  if (isLoading) {
    return (
      <PageContainer>
        <h1 className="text-3xl font-bold text-center">
          You are being redirected...
        </h1>
      </PageContainer>
    );
  }

  if (data.url) {
    redirect(data.url); 
  }
}
