import { useMemo, useState } from "react";
import { CalendarDays, Filter, Plus, Search } from "lucide-react";
import PayrollSummary from "../../components/dashboard/PayrollSummary";
import PayrollTable from "../../components/dashboard/PayrollTable";
import GeneratePayrollModal from "../../components/dashboard/GeneratePayrollModal";
import "./Payroll.css";

const initialPayrollData = [
  {
    id: 1,
    employee: "Alicia Brooks",
    department: "Operations",
    basicSalary: 5200,
    allowance: 350,
    deduction: 120,
    netPay: 5430,
    status: "Pending",
  },
  {
    id: 2,
    employee: "Daniel Kim",
    department: "Engineering",
    basicSalary: 6100,
    allowance: 450,
    deduction: 180,
    netPay: 6370,
    status: "Approved",
  },
  {
    id: 3,
    employee: "Mina Patel",
    department: "Finance",
    basicSalary: 4700,
    allowance: 250,
    deduction: 95,
    netPay: 4855,
    status: "Pending",
  },
  {
    id: 4,
    employee: "Noah Diaz",
    department: "Sales",
    basicSalary: 4800,
    allowance: 300,
    deduction: 140,
    netPay: 4960,
    status: "Approved",
  },
];

export default function Payroll() {
  const [payrollData, setPayrollData] = useState(initialPayrollData);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [selectedPayroll, setSelectedPayroll] = useState(null);

  const filteredPayroll = useMemo(() => {
    return payrollData.filter((item) => {
      const matchesSearch = `${item.employee} ${item.department}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [payrollData, searchTerm, statusFilter]);

  const handleApprove = (id) => {
    setPayrollData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "Approved" } : item))
    );
  };

  const handleView = (item) => {
    setSelectedPayroll(item);
  };

  return (
    <div className="payroll-page-wrapper">
      <div className="payroll-header-section">
        <div>
          <h1 className="payroll-page-title">Payroll</h1>
          <p className="payroll-page-subtitle">
            Review payroll runs, approve pending paychecks, and track overall payout health.
          </p>
        </div>

        <div className="header-actions-group">
          <span className="count-pill-badge">{filteredPayroll.length} records</span>
          <button
            className="cta-primary-pill"
            onClick={() => setShowGenerateModal(true)}
          >
            <Plus size={18} />
            Generate Payroll
          </button>
        </div>
      </div>

      <div className="payroll-main-card">
        <div className="card-toolbar-header">
          <label className="search-pill-input">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search employee or department"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>

          <div className="card-filters-group">
            <label className="pill-action-btn">
              <Filter size={16} />
              <select
                className="pill-dropdown-select"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
              </select>
            </label>
            <button className="pill-action-btn" type="button">
              <CalendarDays size={16} />
              July 2026
            </button>
          </div>
        </div>

        <PayrollSummary payrollData={filteredPayroll} />
        <PayrollTable
          payrollData={filteredPayroll}
          onApprove={handleApprove}
          onView={handleView}
        />

        {selectedPayroll && (
          <div className="selected-payroll-card">
            <div>
              <p className="selected-payroll-label">Selected employee</p>
              <h3 className="selected-payroll-title">{selectedPayroll.employee}</h3>
            </div>
            <div className="selected-payroll-meta">
              <span>{selectedPayroll.department}</span>
              <span>Status: {selectedPayroll.status}</span>
              <span>Net pay: ${selectedPayroll.netPay.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>

      <GeneratePayrollModal
        isOpen={showGenerateModal}
        onClose={() => setShowGenerateModal(false)}
      />
    </div>
  );
}