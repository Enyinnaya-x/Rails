import React from 'react';
import { Megaphone } from 'lucide-react';
import './AnnouncementCard.css';

const defaultAnnouncements = [
  {
    id: '1',
    message: 'Payroll closes on Friday.'
  },
  {
    id: '2',
    message: 'Office will be closed next Monday.'
  },
  {
    id: '3',
    message: 'Submit leave requests before month end.'
  }
];

export default function Announcements({ items = defaultAnnouncements }) {
  return (
    <div className="dashboard-card announcements-card">
      <div className="card-header">
        <div className="announcement-title-group">
          <div className="title-icon-badge">
            <Megaphone size={16} />
          </div>
          <h3 className="card-title">Announcements</h3>
        </div>
      </div>

      <div className="announcements-list">
        {items.map((item) => (
          <div key={item.id} className="announcement-item">
            <div className="announcement-icon-badge">
              <Megaphone size={10} />
            </div>
            <p className="announcement-text">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}