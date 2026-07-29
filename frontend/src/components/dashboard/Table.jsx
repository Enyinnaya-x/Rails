import React, { useState } from 'react';
import { Search, Calendar, SlidersHorizontal, MoreVertical } from 'lucide-react';
import './Table.css';

// Dummy Employee Data matching the reference screen layout
const dummyEmployees = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Senior Product Designer',
    department: 'Design',
    location: '2715 Ash Dr. San Jose, South Dakota 83475',
    email: 'emma.davis@rails.com',
    phone: '(684) 555-0102',
    startDate: '31/12/2026',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: '2',
    name: 'James Park',
    role: 'Sales Director',
    department: 'Sales',
    location: '2464 Royal Ln. Mesa, New Jersey 45463',
    email: 'emma.davis@rails.com',
    phone: '(319) 555-0115',
    startDate: '31/12/2026',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: '3',
    name: 'Dianne Russell',
    role: 'DevOps Engineer',
    department: 'Engineering',
    location: '6391 Elgin St. Celina, Delaware 10299',
    email: 'emma.davis@rails.com',
    phone: '(239) 555-0108',
    startDate: '31/12/2026',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
  },
  {
    id: '4',
    name: 'Robert Fox',
    role: 'HR Specialist',
    department: 'Human Resources',
    location: '3891 Ranchview Dr. Richardson, California 62639',
    email: 'emma.davis@rails.com',
    phone: '(704) 555-0127',
    startDate: '31/12/2026',
    status: 'Active',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80'
  }
];

export default function EmployeeTable({ employees = dummyEmployees }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Local search filtering across Name, Role, or Department
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-table-card">
      {/* 1. Header Section with Controls */}
      <div className="employee-card-header">
        <h2 className="card-title">Employee List</h2>

        <div className="table-controls">
          {/* Search Bar Input */}
          <div className="table-search-input">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={16} className="search-icon" />
          </div>

          {/* Date Filter Pill */}
          <button type="button" className="btn-table-filter">
            <span>This Month</span>
            <Calendar size={15} />
          </button>

          {/* Drawer Filter Pill */}
          <button type="button" className="btn-table-filter">
            <span>Filter</span>
            <SlidersHorizontal size={15} />
          </button>
        </div>
      </div>

      {/* 2. Scrollable Data Table Container */}
      <div className="table-responsive-container">
        <table className="employee-data-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Role</th>
              <th>Department</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Start Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((emp) => (
                <tr key={emp.id}>
                  {/* Avatar + Employee Name */}
                  <td>
                    <div className="employee-profile-cell">
                      <img src={emp.avatar} alt={emp.name} className="employee-avatar" />
                      <span className="employee-name">{emp.name}</span>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="text-secondary">{emp.role}</td>

                  {/* Department Pill */}
                  <td>
                    <span className="department-tag">{emp.department}</span>
                  </td>

                  {/* Location Address */}
                  <td className="text-secondary location-text">{emp.location}</td>

                  {/* Email & Phone Contact Stack */}
                  <td>
                    <div className="contact-stack">
                      <span className="contact-email">{emp.email}</span>
                      <span className="contact-phone">{emp.phone}</span>
                    </div>
                  </td>

                  {/* Start Date */}
                  <td className="text-secondary">{emp.startDate}</td>

                  {/* Status Badge */}
                  <td>
                    <span className={`status-badge ${emp.status.toLowerCase()}`}>
                      {emp.status}
                    </span>
                  </td>

                  {/* Action Dots */}
                  <td>
                    <button type="button" className="btn-action-menu">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-data-cell">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}