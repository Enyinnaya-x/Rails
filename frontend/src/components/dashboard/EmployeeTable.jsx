import React from 'react';
import { Eye, Edit2, Trash2 } from 'lucide-react';
import './EmployeeTable.css';

export default function EmployeeTable({ employees }) {
  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'status-badge active';
      case 'on leave':
        return 'status-badge leave';
      case 'inactive':
        return 'status-badge inactive';
      default:
        return 'status-badge';
    }
  };

  return (
    <div className="table-responsive-wrapper">
      <table className="rails-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Role</th>
            <th>Location</th>
            <th>Status</th>
            <th className="align-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
              <tr key={emp.id}>
                <td>
                  <div className="user-profile-cell">
                    <img
                      src={emp.avatarUrl}
                      alt={emp.name}
                      className="user-avatar-img"
                    />
                    <span className="user-name-text">{emp.name}</span>
                  </div>
                </td>
                <td className="text-muted">{emp.email}</td>
                <td className="font-medium">{emp.department}</td>
                <td className="text-muted">{emp.role}</td>
                <td className="text-muted">{emp.location}</td>
                <td>
                  <span className={getStatusBadge(emp.status)}>
                    {emp.status}
                  </span>
                </td>
                <td>
                  <div className="table-actions">
                    <button className="action-circle-btn view" title="View Profile">
                      <Eye size={15} />
                    </button>
                    <button className="action-circle-btn edit" title="Edit Employee">
                      <Edit2 size={15} />
                    </button>
                    <button className="action-circle-btn delete" title="Delete Employee">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="empty-table-state">
                No matching employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}