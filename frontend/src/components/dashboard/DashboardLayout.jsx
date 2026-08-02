import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dashboardSearch, setDashboardSearch] = useState("");

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="dashboard-main-area">
        <Topbar
          searchTerm={dashboardSearch}
          onSearchChange={setDashboardSearch}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />

        <main className="dashboard-content-body">
          <Outlet context={{ dashboardSearch, setDashboardSearch }} />
        </main>
      </div>
    </div>
  );
}