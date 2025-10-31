import React from "react";
import "./AdminDashboard.css";
import { Link, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const stats = [
    { label: "Total Complaints", value: 4, icon: "📋" },
    { label: "Pending Review", value: 4, icon: "⏳" },
    { label: "Active Users", value: 1234, icon: "👥" },
    { label: "Resolved Today", value: 0, icon: "✅" },
  ];

  return (
    <div className="admin-container">
      {/* ✅ Top Navbar */}
      <header className="topbar">
        <div className="logo">🌿 CleanStreet</div>
        <nav className="menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/report-issue">Report Issue</Link>
          <Link to="/view-complaints">View Complaints</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/editprofile">Edit Profile</Link>
        </nav>
        <div className="auth-buttons">
          <button className="register-btn" onClick={() => navigate('/login')}>Logout</button>
        </div>
      </header>

      {/* ✅ Sidebar + Main Content */}
      <div className="admin-layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Admin Panel</h2>
          <ul>
            <li className="active">📊 Overview</li>
            <li>🛠 Manage Complaints</li>
            <li>👤 Users</li>
            <li>📈 Reports</li>
          </ul>
        </aside>

        {/* Main content */}
        <main className="admin-main">
          <h1>System Overview</h1>

          <div className="stats-roww">
            {stats.map((item, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-icon">{item.icon}</div>
                <div>
                  <h2>{item.value}</h2>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="community-impact">
            <h2>Community Impact</h2>
            <p>
              Thanks to citizen reports and community engagement, we've resolved
              0 issues this month, making our city cleaner and safer for
              everyone.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
