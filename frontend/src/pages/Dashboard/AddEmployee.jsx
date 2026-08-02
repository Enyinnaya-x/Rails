import { useEffect, useState } from "react";
import avatar from "../../assets/avatar.svg";
import "./AddEmployee.css";

const createEmptyFormData = () => ({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  role: "",
  location: "",
  employeeId: "",
  department: "HR",
  status: "Active",
  startDate: new Date().toISOString().slice(0, 10),
  avatar: "",
});

const defaultAvatar = avatar;

export default function AddEmployee({ initialData, onClose, onSave }) {
  const [formData, setFormData] = useState(createEmptyFormData);

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...createEmptyFormData(),
        ...initialData,
        employeeId: initialData.employeeId || "",
      });
      return;
    }

    setFormData(createEmptyFormData());
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      setFormData((prev) => ({
        ...prev,
        avatar: loadEvent.target?.result || "",
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      ...formData,
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      avatar: formData.avatar || defaultAvatar,
    };

    onSave(payload);
    setFormData(createEmptyFormData());
    onClose();
  };

  const previewAvatar = formData.avatar || defaultAvatar;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <h2>{initialData ? "Edit Employee" : "Add Employee"}</h2>

          <button className="close-btn" onClick={onClose} type="button">
            ✕
          </button>
        </div>

        <form className="modal-body" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Personal Information</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+234..."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group form-group-full">
                <label>Profile Picture</label>
                <input type="file" accept="image/*" onChange={handleAvatarChange} />
                <div className="avatar-preview">
                  <img src={previewAvatar} alt="Profile preview" />
                </div>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Employment Details</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Department</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option>HR</option>
                  <option>Finance</option>
                  <option>IT</option>
                  <option>Operations</option>
                  <option>Design</option>
                  <option>Sales</option>
                </select>
              </div>

              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  name="role"
                  placeholder="Senior Product Designer"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Lagos"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option>Active</option>
                  <option>On Leave</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className="form-group form-group-full">
                <label>Generated Employee ID</label>
                <div className="generated-id-pill">
                  {formData.employeeId || "Will be generated automatically"}
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button className="cancel-btn" type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="save-btn" type="submit">
              Save Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}