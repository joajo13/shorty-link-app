"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetClicks } from "@/hooks/clicks/useGetClicks";
import { useSession } from "next-auth/react";
import { ClicksChart } from "./clicks-chart";
import { DateRangeSelect } from "@/components/custom/date-range-select";
import { useState } from "react";
import { ClicksAmountCard } from "./clicks-amount-card";
import { RANGES } from "@/constants/rangeDates";

export const ClicksCard = ({ customUrl }) => {
  const { data: session } = useSession();
  const [range, setRange] = useState(RANGES.LAST_7_DAYS);

  const { isLoading, clicks, totalClicks, trend } = useGetClicks(
    session?.user.id,
    customUrl,
    range
  );

  const chartConfig = {
    count: {
      label: "Clicks",
      color: "#27937e",
    },
  };

  const handleRangeChange = async (value) => {
    setRange(value);
  };

  return (
    <Card className="shadow-none">
      <CardHeader>
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col gap-1">
            <CardTitle>Clicks</CardTitle>
            <CardDescription>Clicks on your link</CardDescription>
          </div>

          <DateRangeSelect onChange={handleRangeChange} placeholder="Select a range..." range={range} setRange={setRange}/>
        </div>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <Skeleton className="w-full h-[200px] md:h-[350px] lg:h-[500px]" />
        ) : (
          <ClicksChart clicks={clicks} chartConfig={chartConfig} />
        )}
      </CardContent>

      <CardFooter>
        {isLoading ? (
          <Skeleton className="w-[125px] h-[65px]" />
        ) : (
          <ClicksAmountCard totalClicks={totalClicks} trend={trend} />
        )}
      </CardFooter>
    </Card>
  );
};
