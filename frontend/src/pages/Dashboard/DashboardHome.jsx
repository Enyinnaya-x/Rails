import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import StatCard from "../../components/dashboard/Statcard";
import Table from "../../components/dashboard/Table";
import RecentActivity from "../../components/dashboard/RecentActivity";
import AnnouncementCard from "../../components/dashboard/AnnouncementCard";

import { Users, Briefcase, Calendar, UserPlus } from "lucide-react";
import './DashboardHome.css';

export default function DashboardHome() {
  return (
    <DashboardLayout>

       <div className="stats-grid">

        <StatCard
          title="Total Employees"
          value="207"
          trend="+3"
          icon={Users}
          variant="blue"
          isPositive={true}
        />

        <StatCard
          title="Active Employees"
          value="164"
          trend="+2"
          icon={Briefcase}
          variant="green"
          isPositive={true}
        />

        <StatCard
          title="On Leave"
          value="12"
          trend="-2"
          icon={Calendar}
          variant="red"
          isPositive={false}
        />

        <StatCard
          title="New This Month"
          value="3"
          trend="+2"
          icon={UserPlus}
          variant="purple"
          isPositive={true}
        />

      </div>

      <Table />

      <div className="dashboard-bottom-grid">

      <RecentActivity />
      <AnnouncementCard />
      </div>

    </DashboardLayout>
  );
}