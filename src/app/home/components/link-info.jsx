/* eslint-disable @next/next/no-img-element */
import { CardDescription, CardTitle } from "@/components/ui/card";

export const LinkInfo = ({ faviconSrc, customLink, originalLink }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-start items-center gap-5">
        <img src={faviconSrc} alt="favicon" className="w-6 h-6 rounded-md" />

        <div className="flex flex-col gap-2">
          <CardTitle
            className="text-lg font-semibold truncate"
          >{customLink}</CardTitle>
        </div>
      </div>
      <CardDescription className="max-w-[200px] md:max-w-[450px] truncate">
        {originalLink}
      </CardDescription>
    </div>
  );
};