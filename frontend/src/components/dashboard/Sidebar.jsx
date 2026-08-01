import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  UserPlus, 
  Wallet, 
  FileText, 
  Clock, 
  Calendar, 
  Folder, 
  User, 
  Settings, 
  HelpCircle 
} from 'lucide-react';
import './Sidebar.css';
import { NavLink } from "react-router-dom";

// Core operational navigation
const mainNavItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "Employees",
    icon: Users,
    path: "/dashboard/users",
  },
  {
    label: "Hiring",
    icon: UserPlus,
    path: "/dashboard/register-users",
  },
  {
    label: "Payroll",
    icon: Wallet,
    path: "/dashboard/payroll",
  },
  {
    label: "Reports",
    icon: FileText,
    path: "/dashboard/reports",
  },
  {
    label: "Attendance",
    icon: Clock,
    path: "/dashboard/attendance",
  },
  {
    label: "Time Off",
    icon: Calendar,
    path: "/dashboard/timeoff",
  },
  {
    label: "Files",
    icon: Folder,
    path: "/dashboard/files",
  },
];

// Secondary profile & system settings
const secondaryNavItems = [
  {
    label: "Profile",
    icon: User,
    path: "/dashboard/profile",
  },
  {
    label: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
  {
    label: "Help",
    icon: HelpCircle,
    path: "/dashboard/help",
  },
];
export default function Sidebar() {
  // const [internalActiveTab, setInternalActiveTab] = useState('dashboard');

  // const currentActive = activeTab ?? internalActiveTab;

  // const handleSelect = (id) => {
  //   setInternalActiveTab(id);
  //   if (onTabChange) {
  //     onTabChange(id);
  //   }
  // };

  const renderNavList = (items) => (
  <ul className="sidebar-nav-list">
    {items.map((item) => {
      const IconComponent = item.icon;

      return (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `sidebar-nav-item ${isActive ? "active" : ""}`
            }
          >
            <IconComponent size={18} className="sidebar-nav-icon" />
            <span className="sidebar-nav-label">{item.label}</span>
          </NavLink>
        </li>
      );
    })}
  </ul>
);

  return (
    <aside className="sidebar">
      {/* Brand Header */}
      <div className="sidebar-header">
        <a href="/" className="sidebar-logo">
          Rails<span className="logo-dot">.</span>
        </a>
      </div>

      {/* Navigation Grouping */}
      <div className="sidebar-content">
        <nav className="sidebar-section">
          {renderNavList(mainNavItems)}
        </nav>

        <div className="sidebar-divider" />

        <nav className="sidebar-section">
          {renderNavList(secondaryNavItems)}
        </nav>
      </div>
    </aside>
  );
}