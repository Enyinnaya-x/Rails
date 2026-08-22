import { useMemo, useState } from 'react';
import { Search, Calendar, SlidersHorizontal, MoreVertical, Pencil } from 'lucide-react';
import avatar from '../../assets/avatar.svg';
import './Table.css';

export default function Table({
  employees,
  onEditEmployee,
  filterMode,
  filterValue,
  onFilterChange,
  departmentOptions,
  locationOptions,
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase();

    return (employees || []).filter((emp) => {
      const name = `${emp.firstName || ''} ${emp.lastName || ''}`.trim().toLowerCase();
      return (
        !normalizedTerm ||
        name.includes(normalizedTerm) ||
        emp.role?.toLowerCase().includes(normalizedTerm) ||
        emp.department?.toLowerCase().includes(normalizedTerm)
      );
    });
  }, [employees, searchTerm]);

  return (
    <div className="employee-table-card">
      <div className="employee-card-header">
        <h2 className="card-title">Employee List</h2>

        <div className="table-controls">
          <div className="table-search-input">
            <input
              type="text"
              placeholder="Search employees"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={16} className="search-icon" />
          </div>

          <button
            type="button"
            className={`btn-table-filter ${filterMode === 'month' ? 'active' : ''}`}
            onClick={() => onFilterChange('month', 'month')}
          >
            <span>This Month</span>
            <Calendar size={15} />
          </button>

          <button
            type="button"
            className={`btn-table-filter ${filterMode === 'status' && filterValue === 'Active' ? 'active' : ''}`}
            onClick={() => onFilterChange('status', 'Active')}
          >
            <span>Active</span>
          </button>

          <button
            type="button"
            className={`btn-table-filter ${filterMode === 'status' && filterValue === 'On Leave' ? 'active' : ''}`}
            onClick={() => onFilterChange('status', 'On Leave')}
          >
            <span>On Leave</span>
          </button>

          <button
            type="button"
            className={`btn-table-filter ${filterMode === 'department' ? 'active' : ''}`}
            onClick={() => onFilterChange('department', filterMode === 'department' ? '' : (departmentOptions[0] || ''))}
          >
            <span>Department</span>
            <SlidersHorizontal size={15} />
          </button>

          <button
            type="button"
            className={`btn-table-filter ${filterMode === 'location' ? 'active' : ''}`}
            onClick={() => onFilterChange('location', filterMode === 'location' ? '' : (locationOptions[0] || ''))}
          >
            <span>Location</span>
            <SlidersHorizontal size={15} />
          </button>
        </div>
      </div>

      {(filterMode === 'department' || filterMode === 'location') && (
        <div className="table-filter-select-wrap">
          <label className="table-filter-label" htmlFor="table-filter-select">
            {filterMode === 'department' ? 'Department' : 'Location'}
          </label>
          <select
            id="table-filter-select"
            className="table-filter-select"
            value={filterValue}
            onChange={(event) => onFilterChange(filterMode, event.target.value)}
          >
            <option value="">All</option>
            {(filterMode === 'department' ? departmentOptions : locationOptions).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

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
                  <td>
                    <div className="employee-profile-cell">
                      <img
                        src={emp.avatar || avatar}
                        alt={`${emp.firstName || ''} ${emp.lastName || ''}`.trim()}
                        className="employee-avatar"
                      />
                      <span className="employee-name">
                        {`${emp.firstName || ''} ${emp.lastName || ''}`.trim()}
                      </span>
                    </div>
                  </td>

                  <td className="text-secondary">{emp.role || 'N/A'}</td>

                  <td>
                    <span className="department-tag">{emp.department || 'N/A'}</span>
                  </td>

                  <td className="text-secondary location-text">{emp.location || 'N/A'}</td>

                  <td>
                    <div className="contact-stack">
                      <span className="contact-email">{emp.email || 'N/A'}</span>
                      <span className="contact-phone">{emp.phone || 'N/A'}</span>
                    </div>
                  </td>

                  <td className="text-secondary">{emp.startDate || 'N/A'}</td>

                  <td>
                    <span className={`status-badge ${emp.status?.toLowerCase() || 'active'}`}>
                      {emp.status || 'Active'}
                    </span>
                  </td>

                  <td>
                    <div className="action-cell">
                      <button type="button" className="btn-action-menu" onClick={() => onEditEmployee(emp)}>
                        <Pencil size={16} />
                      </button>
                      <button type="button" className="btn-action-menu">
                        <MoreVertical size={16} />
                      </button>
                    </div>
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