"use client";
import { PageContainer } from "@/components/custom/container/page-container";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import QRCode from "qrcode";
import { useEffect, useState, Suspense } from "react";

const LoadingFallback = () => <Skeleton className="w-64 h-64" />;

export default function QrPage({ params }) {
  const [qrCodeSrc, setQrCodeSrc] = useState("");

  useEffect(() => {
    generateQrCode();
  }, [qrCodeSrc]);

  const generateQrCode = async () => {
    QRCode.toDataURL(`${process.env.NEXT_PUBLIC_URL}/${params.customUrl}`)
      .then((url) => {
        setQrCodeSrc(url);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <PageContainer>
      <Suspense fallback={<LoadingFallback />}>
        <Image src={qrCodeSrc} alt="QR Code" width={256} height={256} />
      </Suspense>
    </PageContainer>
  );
}
