import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";

export default function DashboardLayout({ onAddEmployee }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dashboardSearch, setDashboardSearch] = useState("");
  const [exportData, setExportData] = useState([]);

  const handleExport = () => {
    if (!exportData.length) return;

    const rows = [
      ["Employee ID", "Name", "Role", "Department", "Location", "Email", "Phone", "Status", "Start Date"],
      ...exportData.map((employee) => [
        employee.employeeId || employee.id,
        `${employee.firstName || ""} ${employee.lastName || ""}`.trim(),
        employee.role || "",
        employee.department || "",
        employee.location || "",
        employee.email || "",
        employee.phone || "",
        employee.status || "",
        employee.startDate || "",
      ]),
    ];

    const csvContent = rows
      .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "employees.csv";
    link.click();
    window.URL.revokeObjectURL(url);
  };

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
          <div className="dashboard-overview-bar">
            <h1 className="overview-title">Dashboard Overview</h1>

            <div className="overview-actions">
              <button className="btn-export-pill" onClick={handleExport}>
                Export CSV
              </button>

              <button className="btn-add-employee-pill" onClick={onAddEmployee}>
                Add Employee
              </button>
            </div>
          </div>

          <Outlet context={{ dashboardSearch, setDashboardSearch, setExportData }} />
        </main>
      </div>
    </div>
  );
}