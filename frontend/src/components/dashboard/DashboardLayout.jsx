import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";

export default function DashboardLayout({ onAddEmployee }) {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main-area">

        <Topbar />

        <main className="dashboard-content-body">
          <div className="dashboard-overview-bar">

            <h1 className="overview-title">
              Dashboard Overview
            </h1>

            <div className="overview-actions">

              <button className="btn-export-pill">
                Export
              </button>

              <button
                className="btn-add-employee-pill"
                onClick={onAddEmployee}
              >
                Add Employee
              </button>

            </div>
          </div>
          <Outlet />

        </main>

      </div>

    </div>
  );
}