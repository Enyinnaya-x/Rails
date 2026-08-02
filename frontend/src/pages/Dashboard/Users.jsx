import React, { useState, useMemo } from 'react';
import { Plus } from 'lucide-react';
import EmployeeToolbar from '../../components/dashboard/EmployeeToolbar';
import EmployeeTable from '../../components/dashboard/EmployeeTable';
import AddEmployee from './AddEmployee';
import './Users.css';

const initialEmployees = [
  {
    id: 1,
    name: 'Sarah Chen',
    email: 'sarah.chen@railshr.com',
    department: 'Design',
    role: 'Lead UX Designer',
    location: 'San Francisco, CA',
    status: 'Active',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
  },
  {
    id: 2,
    name: 'Marcus Vance',
    email: 'marcus.v@railshr.com',
    department: 'Finance',
    role: 'Financial Analyst',
    location: 'New York, NY',
    status: 'Active',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
  },
  {
    id: 3,
    name: 'Elena Rostova',
    email: 'elena.r@railshr.com',
    department: 'HR',
    role: 'HR Manager',
    location: 'Austin, TX',
    status: 'On Leave',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
  },
  {
    id: 4,
    name: 'David Kalu',
    email: 'david.k@railshr.com',
    department: 'IT',
    role: 'DevOps Engineer',
    location: 'Seattle, WA',
    status: 'Inactive',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  }
];

export default function Employees() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const matchesSearch =
        emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emp.role.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDept =
        selectedDepartment === 'All' || emp.department === selectedDepartment;

      const matchesStatus =
        selectedStatus === 'All' || emp.status === selectedStatus;

      return matchesSearch && matchesDept && matchesStatus;
    });
  }, [employees, searchQuery, selectedDepartment, selectedStatus]);

  const handleAddEmployee = (employeeData) => {
    const normalizedEmployee = {
      id: Date.now(),
      name: employeeData.name || `${employeeData.firstName || ''} ${employeeData.lastName || ''}`.trim(),
      email: employeeData.email || '',
      department: employeeData.department || 'HR',
      role: employeeData.role || 'Operations',
      location: employeeData.location || 'Lagos',
      status: employeeData.status || 'Active',
      avatarUrl: employeeData.avatar || employeeData.avatarUrl || '',
    };

    setEmployees((prev) => [normalizedEmployee, ...prev]);
    setIsAddModalOpen(false);
  };

  return (
    <div className="employees-container">
      <div className="employees-page-header">
        <div className="employees-heading-group">
          <h1 className="employees-heading">Employees</h1>
          <p className="employees-subheading">Keep employee records organized and easy to scan.</p>
        </div>

        <div className="employees-page-actions">
          <span className="employee-count-pill">{employees.length} employees</span>
          <button
            type="button"
            className="employee-add-btn"
            onClick={() => setIsAddModalOpen(true)}
          >
            <Plus size={18} />
            <span>Add Employee</span>
          </button>
        </div>
      </div>

      <div className="employees-table-card">
        <EmployeeToolbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedDepartment={selectedDepartment}
          setSelectedDepartment={setSelectedDepartment}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />

        <EmployeeTable employees={filteredEmployees} />
      </div>

      {isAddModalOpen && (
        <AddEmployee
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddEmployee}
        />
      )}
    </div>
  );
}