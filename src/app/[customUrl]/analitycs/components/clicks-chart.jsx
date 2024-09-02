import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const ClicksChart = ({clicks, chartConfig}) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <AreaChart accessibilityLayer data={clicks || []}>
        <XAxis dataKey="date" tickLine={false} axisLine={false} />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <CartesianGrid vertical={false} />
        <Area
          dataKey="count"
          type="natural"
          stroke={chartConfig.count.color}
          fill={chartConfig.count.color}
        />
      </AreaChart>
    </ChartContainer>
  );
};
