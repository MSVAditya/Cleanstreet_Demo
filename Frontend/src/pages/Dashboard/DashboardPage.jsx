import React from "react";
import "./DashboardPage.css";
import { Link, useNavigate } from "react-router-dom";


export default function DashboardPage() {
  const navigate = useNavigate();
  const stats = [
    { icon: "⚠️", label: "Total Issues", value: 1234 },
    { icon: "⏳", label: "Pending", value: 56 },
    { icon: "🔧", label: "In Progress", value: 12 },
    { icon: "✅", label: "Resolved", value: 1166 },
  ];

  const activities = [
    { text: "Pothole on Main Street resolved", time: "2 hours ago" },
    { text: "New streetlight issue reported", time: "4 hours ago" },
    { text: "Garbage dump complaint updated", time: "6 hours ago" },
  ];

  return (
    <div className="dashboard-wrapper">
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

      {/* ✅ Dashboard Main Section */}
      <main className="dashboard">
        <h1>Dashboard</h1>

        <div className="stats-row">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <div className="icon">{s.icon}</div>
              <div>
                <h2>{s.value}</h2>
                <p>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="main-contentt">
          <div className="activity">
            <h2>Recent Activity</h2>
            <ul>
              {activities.map((a, i) => (
                <li key={i}>
                  <span>{a.text}</span>
                  <span className="time">{a.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="quick-actions">
            <h2>Quick Actions</h2>
            <button className="report-btn">➕ Report New Issue</button>
            <button className="view-btn">📋 View All Complaints</button>
            <div className="map-link">🗺️ Issue Map</div>
          </div>
        </div>
      </main>
    </div>
  );
}
