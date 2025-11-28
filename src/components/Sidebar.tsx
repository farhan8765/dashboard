import React from 'react';

type ActiveSection = 'analytics' | 'audit' | 'packages' | 'account';

interface SidebarProps {
  activeSection: ActiveSection;
  onChangeSection: (section: ActiveSection) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onChangeSection }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <img
          src="/images/logo.png"
          alt="AI Mark Lab Logo"
          className="w-28 h-auto object-contain"
        />
      </div>

      <nav className="sidebar-nav">
        <button
          type="button"
          className={`nav-item ${activeSection === 'analytics' ? 'active' : ''}`}
          onClick={() => onChangeSection('analytics')}
        >
          <span className="nav-dot" />
          <span>Analytics</span>
        </button>
        <button
          type="button"
          className={`nav-item ${activeSection === 'audit' ? 'active' : ''}`}
          onClick={() => onChangeSection('audit')}
        >
          <span className="nav-dot" />
          <span>Audit Report</span>
        </button>
        <button
          type="button"
          className={`nav-item ${activeSection === 'packages' ? 'active' : ''}`}
          onClick={() => onChangeSection('packages')}
        >
          <span className="nav-dot" />
          <span>Packages</span>
        </button>
        <button
          type="button"
          className={`nav-item ${activeSection === 'account' ? 'active' : ''}`}
          onClick={() => onChangeSection('account')}
        >
          <span className="nav-dot" />
          <span>Account</span>
        </button>
      </nav>

      <div className="sidebar-user">
        <div className="user-avatar">W</div>
        <div className="user-info">
          <div className="user-name">Wade Warren</div>
          <div className="user-role">Engineer</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;


