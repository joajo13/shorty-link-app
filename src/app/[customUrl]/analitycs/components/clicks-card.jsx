"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetClicks } from "@/hooks/clicks/useGetClicks";
import { useSession } from "next-auth/react";
import { ClicksChart } from "./clicks-chart";
import { DateRangeSelect } from "./date-range-select";
import { useState } from "react";

export const ClicksCard = ({ customUrl }) => {
  const [range, setRange] = useState("7D");

  const chartConfig = {
    count: {
      label: "Clicks",
      color: "#27937e",
    },
  };
  const { data: session } = useSession();

  const { isLoading, clicks, fetchClicks } = useGetClicks(
    session?.user.id,
    customUrl,
    range
  );

  const handleRangeChange = (value) => {
    setRange(value);
    fetchClicks();
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col gap-1">
            <CardTitle>Clicks</CardTitle>
            <CardDescription>Clicks on your link</CardDescription>
          </div>

          <DateRangeSelect onChange={handleRangeChange} value={range} />
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="min-h-[300px] w-full" />
        ) : (
          <ClicksChart clicks={clicks} chartConfig={chartConfig} />
        )}
      </CardContent>
    </Card>
  );
};
