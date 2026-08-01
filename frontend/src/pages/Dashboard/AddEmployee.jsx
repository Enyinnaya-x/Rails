import "./AddEmployee.css";

export default function AddEmployee({ onClose }) {

    return (
        <div className="modal-overlay">

            <div className="modal-card">

                <div className="modal-header">
                    <h2>Add Employee</h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <div className="modal-body">
                    <div className="form-section">

                        <h3>Personal Information</h3>

                        <div className="form-grid">

                            <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                placeholder="John"
                            />
                            </div>

                            <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                placeholder="Doe"
                            />
                            </div>

                            <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="john@company.com"
                            />
                            </div>

                            <div className="form-group">
                            <label>Phone</label>
                            <input
                                type="tel"
                                placeholder="+234..."
                            />
                            </div>

                        </div>

                        </div>

                        <div className="form-section">

                        <h3>Employment Details</h3>

                        <div className="form-grid">

                            <div className="form-group">
                            <label>Department</label>

                            <select>
                                <option>HR</option>
                                <option>Finance</option>
                                <option>IT</option>
                                <option>Operations</option>
                            </select>

                            </div>

                            <div className="form-group">
                            <label>Position</label>

                            <input
                                type="text"
                                placeholder="HR Manager"
                            />

                            </div>

                            <div className="form-group">
                            <label>Employee ID</label>

                            <input
                                type="text"
                                placeholder="EMP001"
                            />

                            </div>

                            <div className="form-group">
                            <label>Status</label>

                            <select>
                                <option>Active</option>
                                <option>On Leave</option>
                                <option>Inactive</option>
                            </select>

                            </div>

                        </div>

                    </div>
                </div>

                <div className="modal-footer">

                    <button
                        className="cancel-btn"
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button className="save-btn">
                        Save Employee
                    </button>

                </div>

            </div>

        </div>
    );
}