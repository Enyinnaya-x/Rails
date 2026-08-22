import React from 'react';
import { DollarSign, Users, Clock, CheckCircle } from 'lucide-react';
import './PayrollSummary.css';

export default function PayrollSummary({ payrollData }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const totalPayroll = payrollData.reduce((acc, curr) => acc + curr.netPay, 0);
  const totalEmployees = payrollData.length;
  const pendingCount = payrollData.filter((item) => item.status === 'Pending').length;
  const approvedCount = payrollData.filter((item) => item.status === 'Approved').length;

  const stats = [
    {
      title: 'Total Payroll',
      value: formatCurrency(totalPayroll),
      icon: DollarSign,
      colorClass: 'icon-blue',
    },
    {
      title: 'Total Employees',
      value: totalEmployees,
      icon: Users,
      colorClass: 'icon-purple',
    },
    {
      title: 'Pending Approval',
      value: pendingCount,
      icon: Clock,
      colorClass: 'icon-amber',
    },
    {
      title: 'Approved',
      value: approvedCount,
      icon: CheckCircle,
      colorClass: 'icon-emerald',
    },
  ];

  return (
    <div className="payroll-summary-grid">
      {stats.map((stat, idx) => {
        const IconComponent = stat.icon;
        return (
          <div key={idx} className="payroll-stat-card">
            <div className="stat-card-header">
              <span className="stat-card-title">{stat.title}</span>
              <div className={`stat-icon-wrapper ${stat.colorClass}`}>
                <IconComponent size={20} />
              </div>
            </div>
            <div className="stat-card-value">{stat.value}</div>
          </div>
        );
      })}
    </div>
  );
}
