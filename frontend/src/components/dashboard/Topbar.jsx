import React, { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import './TopBar.css';

export default function TopBar({ user }) {
  const [searchQuery, setSearchQuery] = useState('');

  const currentUser = user || {
    name: 'Siyam',
    role: 'HR',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80' // Replace with your avatar source
  };

  return (
    <header className="topbar">
      {/* Left: Greeting Header */}
      <div className="topbar-welcome">
        <h1 className="welcome-title">Good Morning {currentUser.name}!</h1>
        <p className="welcome-subtitle">Welcome to Rails HR</p>
      </div>

      {/* Right: Controls & Profile */}
      <div className="topbar-right">
        {/* Search Bar */}
        <div className="topbar-search">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
          />
          <Search size={18} className="search-icon" />
        </div>

        {/* Notification Bell with Badge */}
        <button type="button" className="notification-btn" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-count">12</span>
        </button>

        {/* Vertical Separator */}
        <div className="topbar-divider" />

        {/* User Profile */}
        <div className="topbar-user">
          <div className="user-details">
            <span className="user-role-title">Admin</span>
            <span className="user-department">{currentUser.role}</span>
          </div>
          <div className="user-avatar-container">
            {currentUser.avatarUrl ? (
              <img src={currentUser.avatarUrl} alt={currentUser.name} className="user-avatar-img" />
            ) : (
              <div className="user-avatar-fallback">
                {currentUser.name.charAt(0)}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}