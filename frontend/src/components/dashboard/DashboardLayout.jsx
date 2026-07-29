import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import { Download, Plus } from 'lucide-react';
import './DashboardLayout.css';

export default function DashboardLayout({ children, user, onExport, onAddEmployee }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="dashboard-layout">
      {/* 1. Left Fixed Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={(tabId) => setActiveTab(tabId)} 
      />

      {/* 2. Main Right Column */}
      <div className="dashboard-main-area">
        {/* Top Header */}
        <TopBar user={user} />

        {/* Scrollable Content Body */}
        <main className="dashboard-content-body">
          
          {/* Dynamic Section Title & Action Bar */}
          <div className="dashboard-overview-bar">
            <h1 className="overview-title">
              {activeTab === 'dashboard' ? 'Overview' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>

            <div className="overview-actions">
              <button 
                type="button" 
                className="btn-export-pill" 
                onClick={onExport}
              >
                <Download size={16} />
                <span>Export</span>
              </button>
              
              <button 
                type="button" 
                className="btn-add-employee-pill" 
                onClick={onAddEmployee}
              >
                <Plus size={18} />
                <span>Add Employee</span>
              </button>
            </div>
          </div>

          {/* Children View (Stats Cards & Tables go here later) */}
          <div className="dashboard-view-slot">
            {children || (
              <div className="slot-placeholder">
                <p>Stats and tables content will render here.</p>
              </div>
            )}
          </div>

        </main>
      </div>
    </div>
  );
}