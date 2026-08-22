import { useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import StatCard from "../../components/dashboard/Statcard";
import Table from "../../components/dashboard/Table";
import RecentActivity from "../../components/dashboard/RecentActivity";
import AnnouncementCard from "../../components/dashboard/AnnouncementCard";
import AddEmployee from "./AddEmployee";
import { Users, Briefcase, Calendar, UserPlus, Download } from "lucide-react";
import avatar from "../../assets/avatar.svg";

import "./DashboardHome.css";

const defaultAvatar = avatar;


const initialEmployees = [
  
  {
    id: 1,
    firstName: "Sarah",
    lastName: "Chen",
    role: "Senior Product Designer",
    department: "Design",
    location: "Lagos",
    email: "sarah@rails.com",
    phone: "+234800000000",
    status: "Active",
    startDate: "2026-12-31",
    employeeId: "EMP-0001",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
  {
    id: 2,
    firstName: "James",
    lastName: "Park",
    role: "Sales Director",
    department: "Sales",
    location: "Abuja",
    email: "james@rails.com",
    phone: "+234800000001",
    status: "Active",
    startDate: "2026-12-31",
    employeeId: "EMP-0002",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  },
];

const initialActivities = [
  {
    id: "activity-1",
    title: "Sarah Chen added as an employee",
    timestamp: "Just now",
    icon: UserPlus,
    type: "blue",
  },
  {
    id: "activity-2",
    title: "Payroll for July generated",
    timestamp: "1 hour ago",
    icon: Calendar,
    type: "blue-light",
  },
];

const buildEmployeeId = (count) => `EMP-${String(count + 1).padStart(4, "0")}`;

const normalizeEmployee = (employeeData, fallbackCount) => {
  const fullName = `${employeeData.firstName || ""} ${employeeData.lastName || ""}`.trim();

  return {
    id: employeeData.id || Date.now(),
    firstName: employeeData.firstName || "",
    lastName: employeeData.lastName || "",
    name: fullName,
    role: employeeData.role || "Operations",
    department: employeeData.department || "HR",
    location: employeeData.location || "Lagos",
    email: employeeData.email || "",
    phone: employeeData.phone || "",
    status: employeeData.status || "Active",
    startDate: employeeData.startDate || new Date().toISOString().slice(0, 10),
    employeeId: employeeData.employeeId || buildEmployeeId(fallbackCount),
    avatar: employeeData.avatar || defaultAvatar,
  };
};

export default function DashboardHome({ showAddEmployee, setShowAddEmployee }) {
  const [employees, setEmployees] = useState(initialEmployees);
  const [activities, setActivities] = useState(initialActivities);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [filterMode, setFilterMode] = useState("all");
  const [filterValue, setFilterValue] = useState("");
  const { dashboardSearch = "" } = useOutletContext();

  const totalEmployees = employees.length;
  const activeEmployees = employees.filter((emp) => emp.status === "Active").length;
  const onLeaveEmployees = employees.filter((emp) => emp.status === "On Leave").length;
  const currentDate = useMemo(() => new Date(), []);
  const newThisMonthEmployees = employees.filter((emp) => {
    const startDate = new Date(emp.startDate || "1970-01-01");
    return (
      startDate.getMonth() === currentDate.getMonth() &&
      startDate.getFullYear() === currentDate.getFullYear()
    );
  }).length;

  const departmentOptions = Array.from(new Set(employees.map((emp) => emp.department).filter(Boolean)));
  const locationOptions = Array.from(new Set(employees.map((emp) => emp.location).filter(Boolean)));

  const visibleEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const searchTerm = (dashboardSearch || "").trim().toLowerCase();
      const matchesSearch =
        !searchTerm ||
        [emp.name, emp.role, emp.department, emp.location]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(searchTerm));

      if (!matchesSearch) {
        return false;
      }

      if (filterMode === "month") {
        const startDate = new Date(emp.startDate || "1970-01-01");
        return (
          startDate.getMonth() === currentDate.getMonth() &&
          startDate.getFullYear() === currentDate.getFullYear()
        );
      }

      if (filterMode === "status" && filterValue) {
        return emp.status === filterValue;
      }

      if (filterMode === "department" && filterValue) {
        return emp.department === filterValue;
      }

      if (filterMode === "location" && filterValue) {
        return emp.location === filterValue;
      }

      return true;
    });
  }, [currentDate, dashboardSearch, employees, filterMode, filterValue]);

  const handleExport = () => {
    if (!visibleEmployees.length) return;

    const rows = [
      ["Employee ID", "Name", "Role", "Department", "Location", "Email", "Phone", "Status", "Start Date"],
      ...visibleEmployees.map((employee) => [
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

  const handleSaveEmployee = (employeeData) => {
    const normalizedEmployee = normalizeEmployee(employeeData, employees.length);

    if (editingEmployee) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editingEmployee.id
            ? {
                ...emp,
                ...normalizedEmployee,
                id: editingEmployee.id,
                employeeId: normalizedEmployee.employeeId || emp.employeeId,
              }
            : emp
        )
      );
      setActivities((prev) => [
        {
          id: `activity-${Date.now()}`,
          title: `${normalizedEmployee.name} profile updated`,
          timestamp: "Just now",
          icon: UserPlus,
          type: "blue",
        },
        ...prev,
      ].slice(0, 6));
    } else {
      setEmployees((prev) => [normalizedEmployee, ...prev]);
      setActivities((prev) => [
        {
          id: `activity-${Date.now()}`,
          title: `${normalizedEmployee.name} added as an employee`,
          timestamp: "Just now",
          icon: UserPlus,
          type: "blue",
        },
        ...prev,
      ].slice(0, 6));
    }

    setShowAddEmployee(false);
    setEditingEmployee(null);
  };

  const handleFilterChange = (mode, value) => {
    if (filterMode === mode && filterValue === value) {
      setFilterMode("all");
      setFilterValue("");
      return;
    }

    setFilterMode(mode);
    setFilterValue(value);
  };

  const startEditingEmployee = (employee) => {
    setEditingEmployee(employee);
    setShowAddEmployee(true);
  };

  return (
    <>
      <div className="dashboard-header">
        <div className="dashboard-title-group">
          <h1 className="dashboard-page-title">Dashboard Overview</h1>
          <p className="dashboard-page-subtitle">Track your team, activity, and talent pipeline.</p>
        </div>

        <div className="dashboard-actions">
          <button className="btn-export-pill" type="button" onClick={handleExport}>
            <Download size={16} />
            <span>Export CSV</span>
          </button>

          <button
            className="btn-add-employee-pill"
            type="button"
            onClick={() => setShowAddEmployee(true)}
          >
            <UserPlus size={16} />
            <span>Add Employee</span>
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Employees"
          value={String(totalEmployees)}
          trend={totalEmployees > 0 ? `+${Math.min(5, totalEmployees)}` : "0"}
          icon={Users}
          variant="blue"
          isPositive
        />

        <StatCard
          title="Active Employees"
          value={String(activeEmployees)}
          trend={activeEmployees > 0 ? `+${Math.min(3, activeEmployees)}` : "0"}
          icon={Briefcase}
          variant="green"
          isPositive
        />

        <StatCard
          title="On Leave"
          value={String(onLeaveEmployees)}
          trend={onLeaveEmployees > 0 ? `-${Math.min(2, onLeaveEmployees)}` : "0"}
          icon={Calendar}
          variant="red"
          isPositive={false}
        />

        <StatCard
          title="New This Month"
          value={String(newThisMonthEmployees)}
          trend={newThisMonthEmployees > 0 ? `+${Math.min(2, newThisMonthEmployees)}` : "0"}
          icon={UserPlus}
          variant="purple"
          isPositive
        />
      </div>

      <Table
        employees={visibleEmployees}
        onEditEmployee={startEditingEmployee}
        filterMode={filterMode}
        filterValue={filterValue}
        onFilterChange={handleFilterChange}
        departmentOptions={departmentOptions}
        locationOptions={locationOptions}
      />

      <div className="dashboard-bottom-grid">
        <RecentActivity activities={activities} />
        <AnnouncementCard />
      </div>

      {showAddEmployee && (
        <AddEmployee
          initialData={editingEmployee}
          onClose={() => {
            setShowAddEmployee(false);
            setEditingEmployee(null);
          }}
          onSave={handleSaveEmployee}
        />
      )}
    </>
  );
}