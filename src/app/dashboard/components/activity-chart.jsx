import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";



export const ActivityChart = ({chartConfig, data}) => {
  return (
    <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            className="h-[200px] md:h-[350px] lg:h-[500px]"
          >
            <XAxis
              dataKey="name"
              stroke={chartConfig.total.color}
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke={chartConfig.total.color}
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Bar
              dataKey="total"
              fill={chartConfig.total.color}
              stroke={chartConfig.total.color}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
  )
}