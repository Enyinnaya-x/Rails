import React from 'react';
import { Search } from 'lucide-react';
import './EmployeeToolbar.css';

export default function EmployeeToolbar({
  searchQuery,
  setSearchQuery,
  selectedDepartment,
  setSelectedDepartment,
  selectedStatus,
  setSelectedStatus,
}) {
  return (
    <div className="employee-toolbar">
      <div className="toolbar-search-pill">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search size={18} className="search-icon" />
      </div>

      <div className="toolbar-filters-group">
        <div className="select-wrapper">
          <select
            className="filter-pill-select"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="All">Department</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="IT">IT</option>
            <option value="Design">Design</option>
          </select>
        </div>

        <div className="select-wrapper">
          <select
            className="filter-pill-select"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="All">Status</option>
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>
    </div>
  );
}