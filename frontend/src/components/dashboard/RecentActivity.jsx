import React from 'react';
import { UserPlus, FileText, Calendar, FolderPlus } from 'lucide-react';
import './RecentActivity.css';

const defaultActivities = [
  {
    id: '1',
    title: 'Sarah Chen added as an employee',
    timestamp: 'Just now',
    icon: UserPlus,
    type: 'blue'
  },
  {
    id: '2',
    title: 'Payroll for July generated',
    timestamp: '1 hour ago',
    icon: FileText,
    type: 'blue-light'
  },
  {
    id: '3',
    title: 'James Park submitted leave request',
    timestamp: 'Yesterday',
    icon: Calendar,
    type: 'soft-blue'
  },
  {
    id: '4',
    title: 'New department "Engineering" created',
    timestamp: '2 days ago',
    icon: FolderPlus,
    type: 'soft-blue'
  }
];

export default function RecentActivity({ activities = defaultActivities }) {
  return (
    <div className="dashboard-card recent-activity-card">
      <div className="card-header">
        <h3 className="card-title">Recent Activity</h3>
      </div>

      <div className="activity-list">
        {activities.map((item) => {
          const IconComponent = item.icon || UserPlus;
          return (
            <div key={item.id} className="activity-item">
              <div className={`activity-icon-wrapper ${item.type || 'blue'}`}>
                <IconComponent size={15} />
              </div>
              <div className="activity-details">
                <p className="activity-title">{item.title}</p>
                <span className="activity-timestamp">{item.timestamp}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}