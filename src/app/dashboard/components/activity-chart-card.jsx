import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ActivityChart } from "./activity-chart";
import { colors } from "@/constants/colors";

const data = [
    {
      name: "Lun",
      total: 400,
    },
    {
      name: "Mar",
      total: 300,
    },
    {
      name: "Mié",
      total: 500,
    },
    {
      name: "Jue",
      total: 280,
    },
    {
      name: "Vie",
      total: 450,
    },
    {
      name: "Sáb",
      total: 200,
    },
    {
      name: "Dom",
      total: 150,
    },
  ];

const chartConfig = {
    total: {
      label: "Total",
      color: colors.accent,
    },
  };

export const ActivityChartCard = () => {
  return (
    <Card className="w-full md:w-1/2">
      <CardHeader>
        <CardTitle>Actividad de Usuarios</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ActivityChart chartConfig={chartConfig}
            data={data}
        />
      </CardContent>
    </Card>
  );
};
