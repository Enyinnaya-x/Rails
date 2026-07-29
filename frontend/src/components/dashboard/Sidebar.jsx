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

// Core operational navigation
const mainNavItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'employees', label: 'Employees', icon: Users },
  { id: 'hiring', label: 'Hiring', icon: UserPlus },
  { id: 'payroll', label: 'Payroll', icon: Wallet },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'attendance', label: 'Attendance', icon: Clock },
  { id: 'time-off', label: 'Time Off', icon: Calendar },
  { id: 'files', label: 'Files', icon: Folder },
];

// Secondary profile & system settings
const secondaryNavItems = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'help', label: 'Help', icon: HelpCircle },
];

export default function Sidebar({ activeTab, onTabChange }) {
  const [internalActiveTab, setInternalActiveTab] = useState('dashboard');

  const currentActive = activeTab ?? internalActiveTab;

  const handleSelect = (id) => {
    setInternalActiveTab(id);
    if (onTabChange) {
      onTabChange(id);
    }
  };

  const renderNavList = (items) => (
    <ul className="sidebar-nav-list">
      {items.map((item) => {
        const IconComponent = item.icon;
        const isActive = currentActive === item.id;

        return (
          <li key={item.id}>
            <button
              type="button"
              className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => handleSelect(item.id)}
            >
              <IconComponent size={18} className="sidebar-nav-icon" />
              <span className="sidebar-nav-label">{item.label}</span>
            </button>
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