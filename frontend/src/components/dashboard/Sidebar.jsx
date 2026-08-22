import React from 'react';
import {
  LayoutDashboard,
  Users,
  Wallet,
  BarChart3,
  MessageSquare,
  User,
  Settings,
  X,
} from 'lucide-react';
import './Sidebar.css';
import { NavLink } from "react-router-dom";

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
    label: "Payroll",
    icon: Wallet,
    path: "/dashboard/payroll",
  },
  {
    label: "Reports",
    icon: BarChart3,
    path: "/dashboard/reports",
  },
  {
    label: "Messaging",
    icon: MessageSquare,
    path: "/dashboard/messaging",
  },
];

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
];

export default function Sidebar({ isOpen = true, onClose }) {
  const renderNavList = (items) => (
    <ul className="sidebar-nav-list">
      {items.map((item) => {
        const IconComponent = item.icon;

        return (
          <li key={item.path}>
            <NavLink
              to={item.path}
              onClick={onClose}
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
    <aside className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <div className="sidebar-header">
        <a href="/" className="sidebar-logo">
          Rails<span className="logo-dot">.</span>
        </a>
        <button className="sidebar-close-btn" onClick={onClose} aria-label="Close sidebar" type="button">
          <X size={18} />
        </button>
      </div>

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