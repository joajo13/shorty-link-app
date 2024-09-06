import { DashboardCard } from "./dashboard-card";

const cardData = [
  {
    Icon: <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />,
    title: "Total de usuarios",
    value: "1242",
    description: "+10% desde el último mes",
    href: "/dashboard/users",
  },
  {
    Icon: <ActivityIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />,
    title: "Usuarios Activos",
    value: "890",
    description: "+5% desde la semana pasada",
  },
  {
    Icon: <UserPlusIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />,
    title: "Nuevos Registros",
    value: "45",
    description: "En las últimas 24 horas",
  },
  {
    Icon: <PercentIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />,
    title: "Tasa de Retención",
    value: "85%",
    description: "+2% desde el último trimestre",
  },
];

export const DashboardCardsList = () => {
  return (
    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
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

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}

function PercentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}

function UserPlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
