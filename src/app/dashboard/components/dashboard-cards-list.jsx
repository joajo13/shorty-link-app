import {
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineUserPlus,
} from "react-icons/hi2";
import { DashboardCard } from "./dashboard-card";
import { dashboardRoutes } from "@/constants/routes";

const cardData = [
  {
    Icon: (
      <HiOutlineUserGroup
        size={20}
        className="text-gray-500 dark:text-gray-400"
      />
    ),
    title: "Total de usuarios",
    value: "1242",
    description: "+10% desde el último mes",
    href: dashboardRoutes.allUsers,
  },
  {
    Icon: (
      <HiOutlineChartBar
        size={20}
        className="text-gray-500 dark:text-gray-400"
      />
    ),
    title: "Usuarios Activos",
    value: "890",
    description: "+5% desde la semana pasada",
    href: dashboardRoutes.activeUsers,
  },
  {
    Icon: (
      <HiOutlineUserPlus
        size={20}
        className="text-gray-500 dark:text-gray-400"
      />
    ),
    title: "Nuevos Registros",
    value: "45",
    description: "En las últimas 24 horas",
    href: dashboardRoutes.newUsers,
  },
];

export const DashboardCardsList = () => {
  return (
    <div className="grid gap-2 lg:grid-cols-3">
      {cardData.map((card, index) => (
        <DashboardCard
          key={index}
          Icon={card.Icon}
          title={card.title}
          value={card.value}
          description={card.description}
          href={card.href || ""}
        />
      ))}
    </div>
  );
};