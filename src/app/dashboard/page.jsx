"use client";
import { PageContainer } from "@/components/custom/container/page-container";
import { ActivityChartCard } from "./components/activity-chart-card";
import { NewUsersCard } from "./components/new-users-card";
import {DashboardCardsList} from './components/dashboard-cards-list';

export default function UserDashboard() {
  return (
    <PageContainer sectionClassName={"gap-2 flex flex-col"}>

      <DashboardCardsList />

      <div className="flex justify-between items-center w-full flex-col gap-2 lg:flex-row">
        <ActivityChartCard />

        <NewUsersCard />
      </div>
    </PageContainer>
  );
}
