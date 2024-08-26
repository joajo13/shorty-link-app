import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const LinksEmptyCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="w-full flex justify-center items-center">
          <p className="text-slate-600">You don&apos;t have any links yet</p>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
