import React from 'react';
import { Eye, Check } from 'lucide-react';
import './PayrollTable.css';

export default function PayrollTable({ payrollData, onApprove, onView }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'status-pill approved';
      case 'pending':
        return 'status-pill pending';
      default:
        return 'status-pill';
    }
  };

  return (
    <div className="payroll-table-container">
      <table className="exact-rails-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Allowance</th>
            <th>Deductions</th>
            <th>Net Pay</th>
            <th>Status</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payrollData.length > 0 ? (
            payrollData.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="employee-info-cell">
                    <img
                      src={
                        item.avatarUrl ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          item.employee
                        )}&background=0564FF&color=fff`
                      }
                      alt={item.employee}
                      className="employee-avatar"
                    />
                    <span className="employee-name-text">{item.employee}</span>
                  </div>
                </td>
                <td className="bold-dept-text">{item.department}</td>
                <td className="text-gray">{formatCurrency(item.basicSalary)}</td>
                <td className="text-emerald">+{formatCurrency(item.allowance)}</td>
                <td className="text-rose">-{formatCurrency(item.deduction)}</td>
                <td className="font-extrabold">{formatCurrency(item.netPay)}</td>
                <td>
                  <span className={getStatusBadge(item.status)}>{item.status}</span>
                </td>
                <td>
                  <div className="row-action-buttons">
                    <button
                      className="icon-circle-btn view"
                      title="View Details"
                      onClick={() => onView(item)}
                    >
                      <Eye size={16} />
                    </button>
                    {item.status === 'Pending' && (
                      <button
                        className="icon-circle-btn approve"
                        title="Approve Payroll"
                        onClick={() => onApprove(item.id)}
                      >
                        <Check size={16} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="empty-payroll-notice">
                No matching payroll records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mobile-payroll-list">
        {payrollData.length > 0 ? (
          payrollData.map((item) => (
            <div key={item.id} className="mobile-payroll-card">
              <div className="mobile-card-top">
                <div className="employee-info-cell">
                  <img
                    src={
                      item.avatarUrl ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        item.employee
                      )}&background=0564FF&color=fff`
                    }
                    alt={item.employee}
                    className="employee-avatar"
                  />
                  <div>
                    <h4 className="employee-name-text">{item.employee}</h4>
                    <span className="bold-dept-text">{item.department}</span>
                  </div>
                </div>
                <span className={getStatusBadge(item.status)}>{item.status}</span>
              </div>

              <div className="mobile-card-breakdown">
                <div className="breakdown-row">
                  <span>Basic Salary</span>
                  <span>{formatCurrency(item.basicSalary)}</span>
                </div>
                <div className="breakdown-row">
                  <span>Allowance</span>
                  <span className="text-emerald">+{formatCurrency(item.allowance)}</span>
                </div>
                <div className="breakdown-row">
                  <span>Deductions</span>
                  <span className="text-rose">-{formatCurrency(item.deduction)}</span>
                </div>
                <div className="breakdown-row net-pay-row">
                  <span>Net Pay</span>
                  <span className="font-extrabold">{formatCurrency(item.netPay)}</span>
                </div>
              </div>

              <div className="mobile-card-footer">
                <button className="mobile-action-pill view" onClick={() => onView(item)}>
                  <Eye size={15} />
                  <span>View Details</span>
                </button>
                {item.status === 'Pending' && (
                  <button className="mobile-action-pill approve" onClick={() => onApprove(item.id)}>
                    <Check size={15} />
                    <span>Approve</span>
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="empty-payroll-notice">No records found.</div>
        )}
      </div>
    </div>
  );
}
