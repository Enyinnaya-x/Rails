import React from 'react';
import { AlertCircle, X } from 'lucide-react';
import './GeneratePayrollModal.css';

export default function GeneratePayrollModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="generate-payroll-modal">
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>
        <div className="modal-icon-container">
          <AlertCircle size={32} />
        </div>
        <h3 className="modal-title">Generate Payroll</h3>
        <p className="modal-description">
          Payroll generation will be available when backend integration is complete.
        </p>
        <div className="modal-actions">
          <button className="primary-pill-btn" onClick={onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
