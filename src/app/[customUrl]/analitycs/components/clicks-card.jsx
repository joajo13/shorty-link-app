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
import { DateRangeSelect } from "./date-range-select";
import { useState } from "react";
import { HiArrowTrendingUp } from "react-icons/hi2";

export const ClicksCard = ({ customUrl }) => {
  const { data: session } = useSession();
  const [range, setRange] = useState("7");
  const { isLoading, clicks, totalClicks, isError } = useGetClicks(
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

          <DateRangeSelect onChange={handleRangeChange} value={range} />
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
        <div className="flex justify-between w-full items-center">
          {isLoading ? (
            <Skeleton className="w-[125px] h-[65px]" />
          ) : (
            <div className="flex justify-between items-center gap-2 border rounded-lg p-3 bg-gradient-to-t from-app-accent/10 to-transparent">
              <div className="flex flex-col gap-1 ">
                <CardTitle>{totalClicks}</CardTitle>
                <CardDescription>Total clicks</CardDescription>
              </div>

              <div>
                <HiArrowTrendingUp className="text-app-accent h-6 w-6" />
              </div>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};
