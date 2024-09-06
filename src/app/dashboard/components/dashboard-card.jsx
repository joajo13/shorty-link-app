'use client'
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const DashboardCard = ({ Icon, title, value, description, href }) => {
  const router = useRouter();
  
  const handleOnClick = () => {
    router.push(href);
  }

  return (
    <Card
      onClick={handleOnClick}
      className="cursor-pointer hover:shadow-lg transition-all duration-200 group hover:text-app-accent"
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
