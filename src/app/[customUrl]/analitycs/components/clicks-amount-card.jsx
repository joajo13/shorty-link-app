import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { trends } from "@/constants/trends";
import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";

export const ClicksAmountCard = ({ totalClicks, trend }) => {
  return (
    <Card className="flex justify-between items-center gap-2 border rounded-lg p-3 bg-gradient-to-b from-transparent to-app-accent/10 shadow-none">
      <div className="flex flex-col gap-1 ">
        <CardTitle>{totalClicks}</CardTitle>
        <CardDescription>Total clicks</CardDescription>
      </div>

      <div>
        {trend === trends.UP ? (
          <HiArrowTrendingUp className="text-green-500" size={20} />
        ) : trend === trends.DOWN ? (
          <HiArrowTrendingDown className="text-red-500" size={20} />
        ) : null}
      </div>
    </Card>
  );
};
