import React, { useState, useEffect } from "react";
import {
  Building2,
  User,
  Bell,
  Shield,
  AlertTriangle,
  Upload,
  Check,
  LogOut,
  Trash2,
  Lock,
  Smartphone,
  Globe,
} from "lucide-react";
import "./Settings.css";
import { useAppContext } from "../../context/AppContext";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("company");
  const [saveSuccess, setSaveSuccess] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // 1. Company State
  const { company, user: ctxUser, preferences, updateCompany, updateUser, updatePreferences } = useAppContext();
  const [companyData, setCompanyData] = useState(company || {
    name: "",
    email: "",
    phone: "",
    address: "",
    logoUrl: null,
  });

  // 2. Account State
  const [accountData, setAccountData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
  });

  // 3. Notifications State
  const [notifications, setNotifications] = useState({
    payroll: true,
    employeeActivity: true,
    messaging: false,
    system: true,
    channelEmail: true,
    channelSMS: false,
  });

  useEffect(() => {
    if (company) setCompanyData(company);
    if (ctxUser) setAccountData({
      fullName: `${ctxUser.firstName || ''} ${ctxUser.lastName || ''}`.trim(),
      email: ctxUser.email || '',
      phone: ctxUser.phone || '',
      role: ctxUser.role || '',
    });
    if (preferences) setNotifications((prev) => ({ ...prev, channelEmail: !!preferences.emailNotifications, channelSMS: !!preferences.smsNotifications }));
  }, [company, ctxUser, preferences]);

  // 4. Security State
  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactor: false,
  });

  const triggerSuccess = (msg) => {
    setSaveSuccess(msg);
    setTimeout(() => setSaveSuccess(""), 3000);
  };

  const handleCompanySubmit = (e) => {
    e.preventDefault();
    if (typeof updateCompany === "function") {
      updateCompany(companyData);
    }
    triggerSuccess("Company settings updated successfully!");
  };

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    // split fullName into first/last
    const [firstName, ...rest] = (accountData.fullName || '').split(' ');
    const lastName = rest.join(' ');
    if (typeof updateUser === "function") {
      updateUser({ firstName: firstName || '', lastName, email: accountData.email, phone: accountData.phone });
    }
    triggerSuccess("Account profile updated successfully!");
  };

  const handleSecuritySubmit = (e) => {
    e.preventDefault();
    if (security.newPassword !== security.confirmPassword) {
      alert("New passwords do not match.");
      return;
    }
    triggerSuccess("Password changed successfully!");
    setSecurity((prev) => ({ ...prev, currentPassword: "", newPassword: "", confirmPassword: "" }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCompanyData((prev) => ({ ...prev, logoUrl: URL.createObjectURL(file) }));
    }
  };

  return (
    <div className="settings-page">
      {/* Header */}
      <div className="settings-header">
        <div>
          <h1>Settings</h1>
          {/* <p>Manage your organization setup, security, and account preferences.</p> */}
        </div>
        {saveSuccess && (
          <div className="toast-success">
            <Check size={16} />
            <span>{saveSuccess}</span>
          </div>
        )}
      </div>

      <div className="settings-layout">
        {/* Navigation Sidebar / Tabs */}
        <nav className="settings-nav">
          <button
            type="button"
            className={`nav-item ${activeTab === "company" ? "active" : ""}`}
            onClick={() => setActiveTab("company")}
          >
            <Building2 size={18} />
            <span>Company Info</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeTab === "account" ? "active" : ""}`}
            onClick={() => setActiveTab("account")}
          >
            <User size={18} />
            <span>Account</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeTab === "notifications" ? "active" : ""}`}
            onClick={() => setActiveTab("notifications")}
          >
            <Bell size={18} />
            <span>Notifications</span>
          </button>

          <button
            type="button"
            className={`nav-item ${activeTab === "security" ? "active" : ""}`}
            onClick={() => setActiveTab("security")}
          >
            <Shield size={18} />
            <span>Security</span>
          </button>

          <button
            type="button"
            className={`nav-item danger-tab ${activeTab === "danger" ? "active" : ""}`}
            onClick={() => setActiveTab("danger")}
          >
            <AlertTriangle size={18} />
            <span>Danger Zone</span>
          </button>
        </nav>

        {/* Content Section */}
        <div className="settings-content">
          {/* TAB 1: Company Information */}
          {activeTab === "company" && (
            <div className="settings-card">
              <div className="card-header">
                <h2>Company Information</h2>
                {/* <p>Update your organizational branding and official contact details.</p> */}
              </div>

              <form onSubmit={handleCompanySubmit}>
                <div className="logo-upload-section">
                  <div className="logo-preview">
                    {companyData.logoUrl ? (
                      <img src={companyData.logoUrl} alt="Company Logo" />
                    ) : (
                      <Building2 size={32} />
                    )}
                  </div>
                  <div className="logo-upload-controls">
                    <label htmlFor="logo-input" className="upload-btn">
                      <Upload size={16} />
                      <span>Upload New Logo</span>
                    </label>
                    <input
                      id="logo-input"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                      hidden
                    />
                    <p className="upload-hint">Recommended format: PNG, SVG or JPG (max 2MB)</p>
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group span-full">
                    <label>Company Name</label>
                    <input
                      type="text"
                      value={companyData.name}
                      onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Company Email</label>
                    <input
                      type="email"
                      value={companyData.email}
                      onChange={(e) => setCompanyData({ ...companyData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      value={companyData.phone}
                      onChange={(e) => setCompanyData({ ...companyData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group span-full">
                    <label>Office Address</label>
                    <textarea
                      rows="3"
                      value={companyData.address}
                      onChange={(e) => setCompanyData({ ...companyData, address: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="save-btn">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 2: Account Settings */}
          {activeTab === "account" && (
            <div className="settings-card">
              <div className="card-header">
                <h2>Account Settings</h2>
                {/* <p>Manage your personal admin credentials and account role.</p> */}
              </div>

              <form onSubmit={handleAccountSubmit}>
                <div className="form-grid">
                  <div className="form-group span-full">
                    <label>Full Name</label>
                    <input
                      type="text"
                      value={accountData.fullName}
                      onChange={(e) => setAccountData({ ...accountData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Admin Email</label>
                    <input
                      type="email"
                      value={accountData.email}
                      onChange={(e) => setAccountData({ ...accountData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      value={accountData.phone}
                      onChange={(e) => setAccountData({ ...accountData, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group span-full">
                    <label>Account Role</label>
                    <input type="text" value={accountData.role} disabled className="disabled-input" />
                    <span className="field-hint">Role level is restricted by system policy.</span>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="save-btn">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: Notifications */}
          {activeTab === "notifications" && (
            <div className="settings-card">
              <div className="card-header">
                <h2>Notification Preferences</h2>
                {/* <p>Choose what events trigger system alerts and preferred delivery channels.</p> */}
              </div>

              <div className="toggle-list">
                <div className="toggle-item">
                  <div>
                    <strong>Payroll Notifications</strong>
                    <p>Receive alerts when payroll runs, approvals, or payouts complete.</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={notifications.payroll}
                      onChange={(e) => setNotifications({ ...notifications, payroll: e.target.checked })}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="toggle-item">
                  <div>
                    <strong>Employee Activity & Updates</strong>
                    <p>Alerts for new hires, leave requests, and profile edits.</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={notifications.employeeActivity}
                      onChange={(e) =>
                        setNotifications({ ...notifications, employeeActivity: e.target.checked })
                      }
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="toggle-item">
                  <div>
                    <strong>Messaging Alerts</strong>
                    <p>Get notified when bulk SMS or email dispatches finish delivering.</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={notifications.messaging}
                      onChange={(e) => setNotifications({ ...notifications, messaging: e.target.checked })}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="toggle-item">
                  <div>
                    <strong>System Announcements</strong>
                    <p>Receive critical updates regarding system maintenance and features.</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={notifications.system}
                      onChange={(e) => setNotifications({ ...notifications, system: e.target.checked })}
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="section-divider"></div>
                <h3>Delivery Channels</h3>

                <div className="toggle-item">
                  <div>
                    <strong>Email Delivery</strong>
                    <p>Send daily summaries and critical alerts to your email address.</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={notifications.channelEmail}
                      onChange={(e) =>
                        setNotifications({ ...notifications, channelEmail: e.target.checked })
                      }
                    />
                    <span className="slider"></span>
                  </label>
                </div>

                <div className="toggle-item">
                  <div>
                    <strong>SMS Delivery</strong>
                    <p>Receive instant high-priority alerts on your mobile device.</p>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={notifications.channelSMS}
                      onChange={(e) =>
                        setNotifications({ ...notifications, channelSMS: e.target.checked })
                      }
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="save-btn"
                    onClick={() => {
                      if (typeof updatePreferences === 'function') {
                        updatePreferences({ emailNotifications: notifications.channelEmail, smsNotifications: notifications.channelSMS });
                      }
                      triggerSuccess("Notification preferences saved!");
                    }}
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: Security */}
          {activeTab === "security" && (
            <div className="settings-card">
              <div className="card-header">
                <h2>Security & Password</h2>
                {/* <p>Manage authentication credentials, two-factor access, and active sessions.</p> */}
              </div>

              <form onSubmit={handleSecuritySubmit}>
                <div className="form-grid">
                  <div className="form-group span-full">
                    <label>Current Password</label>
                    <input
                      type="password"
                      value={security.currentPassword}
                      onChange={(e) => setSecurity({ ...security, currentPassword: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      value={security.newPassword}
                      onChange={(e) => setSecurity({ ...security, newPassword: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input
                      type="password"
                      value={security.confirmPassword}
                      onChange={(e) => setSecurity({ ...security, confirmPassword: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="save-btn">
                    Change Password
                  </button>
                </div>
              </form>

              <div className="section-divider"></div>

              {/* 2FA Toggle */}
              <div className="toggle-item">
                <div>
                  <strong>Two-Factor Authentication (2FA)</strong>
                  <p>Add an extra layer of protection using authenticator apps.</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={security.twoFactor}
                    onChange={(e) => setSecurity({ ...security, twoFactor: e.target.checked })}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="section-divider"></div>

              {/* Login Sessions */}
              <div className="sessions-block">
                <h3>Active Sessions</h3>
                <div className="session-item">
                  <Globe size={20} className="session-icon" />
                  <div className="session-info">
                    <strong>Chrome on macOS — Lagos, Nigeria</strong>
                    <p>Current Active Session • IP: 102.89.23.11</p>
                  </div>
                </div>
                <div className="session-item">
                  <Smartphone size={20} className="session-icon" />
                  <div className="session-info">
                    <strong>Rails Mobile App — iPhone 15</strong>
                    <p>Last active 2 hours ago • IP: 102.89.24.88</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Danger Zone */}
          {activeTab === "danger" && (
            <div className="settings-card danger-card">
              <div className="card-header">
                <h2>Danger Zone</h2>
                {/* <p>Irreversible actions related to your sessions and company account.</p> */}
              </div>

              <div className="danger-row">
                <div>
                  <strong>Log Out Of All Devices</strong>
                  <p>Terminate all active admin sessions across web browsers and mobile apps.</p>
                </div>
                <button
                  type="button"
                  className="danger-btn-secondary"
                  onClick={() => triggerSuccess("Logged out of all other devices.")}
                >
                  <LogOut size={16} />
                  <span>Log Out All Sessions</span>
                </button>
              </div>

              <div className="danger-row">
                <div>
                  <strong>Delete Company Account</strong>
                  <p>Permanently remove your company workspace, payroll records, and employee data.</p>
                </div>
                <button
                  type="button"
                  className="danger-btn-primary"
                  onClick={() => setShowDeleteModal(true)}
                >
                  <Trash2 size={16} />
                  <span>Delete Workspace</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-icon warning">
              <AlertTriangle size={28} />
            </div>
            <h3>Delete Company Workspace?</h3>
            <p>
              This action cannot be undone. All workforce records, payroll logs, and historical
              data will be permanently deleted.
            </p>
            <div className="modal-actions">
              <button
                type="button"
                className="modal-cancel-btn"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="modal-delete-btn"
                onClick={() => {
                  setShowDeleteModal(false);
                  alert("Account deletion request initiated.");
                }}
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}