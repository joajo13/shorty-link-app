/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

export const QrCard = ({ qrSrc }) => {
  return (
    <Card className="flex">
      <CardContent
        className="p-6"
      >
        <img alt="QR Code" width={256} height={256} src={qrSrc} />
      </CardContent>

      <CardHeader
        className="flex items-center justify-center w-full"
      >
        <h1 className="text-xl font-semibold">QR Code</h1>
      </CardHeader>
    </Card>
  );
};

