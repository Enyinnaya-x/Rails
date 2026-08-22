import React, { useState } from "react";
import {
  BarChart3,
  CalendarDays,
  Clock3,
  Users,
  Wallet,
  TrendingUp,
  Download,
  FileText,
} from "lucide-react";
import "./Reports.css";

export default function Reports() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="reports-page">
      {/* Page Header */}
      <div className="reports-header">
        <div className="header-title-group">
          <h1>Reports & Analytics</h1>
          <p>Understand your workforce, attendance, payroll, and time off.</p>
        </div>

        <button className="reports-export-btn">
          <Download size={18} strokeWidth={2.2} />
          <span>Export Report</span>
        </button>
      </div>

      {/* Tabs Bar */}
      <div className="reports-tabs">
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>

        <button
          className={activeTab === "timeoff" ? "active" : ""}
          onClick={() => setActiveTab("timeoff")}
        >
          Time Off
        </button>

        <button
          className={activeTab === "attendance" ? "active" : ""}
          onClick={() => setActiveTab("attendance")}
        >
          Attendance
        </button>

        <button
          className={activeTab === "payroll" ? "active" : ""}
          onClick={() => setActiveTab("payroll")}
        >
          Payroll
        </button>

        <button
          className={activeTab === "employees" ? "active" : ""}
          onClick={() => setActiveTab("employees")}
        >
          Employees
        </button>

        <button
          className={activeTab === "analytics" ? "active" : ""}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === "overview" && <Overview />}
      {activeTab === "timeoff" && <TimeOff />}
      {activeTab === "attendance" && <Attendance />}
      {activeTab === "payroll" && <PayrollReports />}
      {activeTab === "employees" && <EmployeeReports />}
      {activeTab === "analytics" && <Analytics />}
    </div>
  );
}

function Overview() {
  return (
    <div className="reports-content">
      {/* 4 Quick Stat Cards */}
      <div className="reports-stats">
        <ReportCard
          icon={Users}
          title="Total Employees"
          value="207"
          change="+3 this month"
          trend="up"
        />

        <ReportCard
          icon={Clock3}
          title="Attendance Rate"
          value="94.8%"
          change="+2.4% this month"
          trend="up"
        />

        <ReportCard
          icon={CalendarDays}
          title="Leave Requests"
          value="18"
          change="5 pending"
          trend="neutral"
        />

        <ReportCard
          icon={Wallet}
          title="Monthly Payroll"
          value="₦12.4M"
          change="+4.2% this month"
          trend="up"
        />
      </div>

      {/* 2 Grid Panel Charts (Placeholders for now) */}
      <div className="reports-grid">
        <div className="report-panel">
          <div className="panel-header">
            <div>
              <h2>Workforce Overview</h2>
              <p>Employee growth over the last 6 months.</p>
            </div>
          </div>

          <div className="chart-placeholder">Workforce chart</div>
        </div>

        <div className="report-panel">
          <div className="panel-header">
            <div>
              <h2>Department Breakdown</h2>
              <p>Employees by department.</p>
            </div>
          </div>

          <div className="chart-placeholder">Department chart</div>
        </div>
      </div>

      {/* Recent Reports List Panel */}
      <div className="report-panel">
        <div className="panel-header">
          <div>
            <h2>Recent Reports</h2>
            <p>Recently generated workforce reports.</p>
          </div>
        </div>

        <div className="report-list">
          <div className="report-row">
            <div className="report-file-title">
              <FileText size={18} className="report-icon-muted" />
              <span>Monthly Employee Report</span>
            </div>
            <span className="report-date">July 2026</span>
            <button className="view-report-btn">View</button>
          </div>

          <div className="report-row">
            <div className="report-file-title">
              <FileText size={18} className="report-icon-muted" />
              <span>Payroll Summary</span>
            </div>
            <span className="report-date">July 2026</span>
            <button className="view-report-btn">View</button>
          </div>

          <div className="report-row">
            <div className="report-file-title">
              <FileText size={18} className="report-icon-muted" />
              <span>Attendance Report</span>
            </div>
            <span className="report-date">July 2026</span>
            <button className="view-report-btn">View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeOff() {
  return (
    <div className="report-panel">
      <h2>Time Off</h2>
      <p>Leave requests, balances, approvals, and absence trends.</p>
    </div>
  );
}

function Attendance() {
  return (
    <div className="report-panel">
      <h2>Attendance</h2>
      <p>Attendance records, late arrivals, and absence analysis.</p>
    </div>
  );
}

function PayrollReports() {
  return (
    <div className="report-panel">
      <h2>Payroll Reports</h2>
      <p>Payroll summaries, deductions, and payment analysis.</p>
    </div>
  );
}

function EmployeeReports() {
  return (
    <div className="report-panel">
      <h2>Employee Reports</h2>
      <p>Employee growth, departments, roles, and workforce data.</p>
    </div>
  );
}

function Analytics() {
  return (
    <div className="report-panel">
      <h2>Analytics</h2>
      <p>Workforce trends and business insights.</p>
    </div>
  );
}

function ReportCard({ icon: Icon, title, value, change }) {
  return (
    <div className="report-card">
      <div className="report-card-icon">
        <Icon size={22} strokeWidth={2.2} />
      </div>

      <div className="report-card-info">
        <p className="report-card-title">{title}</p>
        <h3 className="report-card-value">{value}</h3>
        <span className="report-card-change">{change}</span>
      </div>
    </div>
  );
}