import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  PlusCircle,
  ListChecks,
  FileEdit,
  Newspaper,
  UserCog,
  LogOut,
  Menu,
   MessageSquare,
   ArrowLeft, 
} from "lucide-react";
import { ContactRequests } from "./ContactRequests";
import towingReference from "../../../assets/towing-reference.png";
import { AddService } from "./AddService";
import { ManageService } from "./ManageService";
import { AddBlog } from "./AddBlog";
import { ManageBlog } from "./ManageBlog";
import { ProfileSettings } from "./ProfileSettings";
import { getMe, logout as logoutRequest } from "../../../services/authApi";
import { getToken } from "../../../services/apiClient";
import { getDashboardStats } from "../../../services/dashboardApi";
import NotificationBell from "../../../components/NotificationBell";
import "../../../components/NotificationBell.css";

const referenceImage = towingReference;

const NAV_ITEMS = [
  { key: "add-service", label: "Add Service", icon: PlusCircle },
  { key: "manage-service", label: "Manage Service", icon: ListChecks },
  // { key: "add-blog", label: "Add Blog", icon: FileEdit },
  // { key: "manage-blog", label: "Manage Blog", icon: Newspaper },
  { key: "contact-requests", label: "Contact Requests", icon: MessageSquare },
];

export function Dashboard() {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [activeTab, setActiveTab] = useState("add-service");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({ totalServices: 0, totalBlogs: 0 });

  useEffect(() => {
    if (!authChecked) return;
    async function fetchStats() {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    }
    fetchStats();
  }, [authChecked]);

  useEffect(() => {
    async function checkAuth() {
      const token = getToken();
      if (!token) {
        navigate("/admin/login", { replace: true });
        return;
      }
      try {
        const admin = await getMe();
        setAdminEmail(admin.email);
        setAuthChecked(true);
      } catch {
        navigate("/admin/login", { replace: true });
      }
    }
    checkAuth();
  }, [navigate]);

  function handleLogout() {
    logoutRequest();
    navigate("/admin/login", { replace: true });
  }

  if (!authChecked) return null;

   return (
    <div className="dashboard-header">
      <div className="admin-shell">
        <button
          type="button"
          className="admin-mobile-toggle"
          onClick={() => setSidebarOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <Menu size={20} />
        </button>

        <aside className={`admin-sidebar ${sidebarOpen ? "is-open" : ""}`}>
          <a href="/" className="admin-sidebar-logo">
            <img src={referenceImage} alt="Reliable Towing & Recovery" />
          </a>

          <nav className="admin-nav">
            <span className="admin-nav-heading">
              <LayoutGrid size={12} strokeWidth={2.4} /> DASHBOARD
            </span>

            {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                type="button"
                className={`admin-nav-item ${activeTab === key ? "is-active" : ""}`}
                onClick={() => {
                  setActiveTab(key);
                  setSidebarOpen(false);
                }}
              >
                <Icon size={16} strokeWidth={2.1} />
                {label}
              </button>
            ))}

            <span className="admin-nav-heading admin-nav-heading-spaced">
              <UserCog size={12} strokeWidth={2.4} /> ACCOUNT
            </span>

            <button
              type="button"
              className={`admin-nav-item admin-nav-sub ${
                activeTab === "profile" ? "is-active" : ""
              }`}
              onClick={() => {
                setActiveTab("profile");
                setSidebarOpen(false);
              }}
            >
              <UserCog size={16} strokeWidth={2.1} />
              Profile Settings
            </button>
          </nav>

          <div className="admin-sidebar-footer">
            <a href="/" className="admin-back-btn">
              <ArrowLeft size={15} strokeWidth={2.2} />
              Back to Site
            </a>
            <button type="button" className="admin-logout-btn" onClick={handleLogout}>
              <LogOut size={15} strokeWidth={2.2} />
              Log Out
            </button>
          </div>
        </aside>

        <main className="admin-content">
          <header className="admin-topbar">
            <h1>{NAV_ITEMS.find((i) => i.key === activeTab)?.label || "Profile Settings"}</h1>
            <div className="admin-topbar-stats">
              <span className="admin-stat-pill">
                <strong>{stats.totalServices}</strong> Services
              </span>
              <span className="admin-stat-pill">
                <strong>{stats.totalBlogs}</strong> Blog Posts
              </span>
            </div>
            <div className="admin-topbar-user">
              <NotificationBell />
              <span className="admin-topbar-avatar">
                {adminEmail ? adminEmail.charAt(0).toUpperCase() : "A"}
              </span>
              <span className="admin-topbar-email">{adminEmail}</span>
            </div>
          </header>

          <div className="admin-panel">
            {activeTab === "add-service" && <AddService />}
            {activeTab === "manage-service" && <ManageService />}
            {activeTab === "add-blog" && <AddBlog />}
            {activeTab === "manage-blog" && <ManageBlog />}
            {activeTab === "profile" && (
              <ProfileSettings adminEmail={adminEmail} onEmailUpdated={setAdminEmail} />
            )}
            {activeTab === "contact-requests" && <ContactRequests />}
          </div>
        </main>
      </div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Roboto:wght@400;500;700&display=swap');

        .admin-shell {
          --orange: #ff6108;
          min-height: 100vh;
          display: flex;
          background: #ffffff;
          font-family: Roboto, Arial, sans-serif;
        }

        .admin-shell *,
        .admin-shell *::before,
        .admin-shell *::after {
          box-sizing: border-box;
        }

        .admin-mobile-toggle {
          display: none;
          position: fixed;
          top: 14px;
          left: 14px;
          z-index: 20;
          width: 36px;
          height: 36px;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          color: #1a1a1a;
          cursor: pointer;
        }

        /* ---- Sidebar ---- */
        .admin-sidebar {
          width: 232px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          padding: 22px 16px;
          background: #f7f7f7;
          border-right: 1px solid #e5e5e5;
        }

        .admin-sidebar-logo {
          display: block;
          width: 118px;
          margin: 0 0 26px 6px;
        }

        .admin-sidebar-logo img {
          width: 100%;
          display: block;
        }

        .admin-nav {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .admin-nav-heading {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 4px 10px 8px;
          color: #8a8a8a;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .admin-nav-heading-spaced {
          margin-top: 20px;
        }

        .admin-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 10px 10px;
          background: transparent;
          border: none;
          border-radius: 6px;
          color: #4a4a4a;
          font-size: 12.5px;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          transition: background 140ms ease, color 140ms ease;
        }

        .admin-nav-item:hover {
          background: #eeeeee;
          color: #1a1a1a;
        }

        .admin-nav-item.is-active {
          background: rgba(255, 97, 8, 0.14);
          color: var(--orange);
        }
          .admin-sidebar-footer {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #e5e5e5;
}

.admin-back-btn {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 10px;
  background: transparent;
  border: none;
  border-radius: 6px;
  color: #4a4a4a;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: background 140ms ease, color 140ms ease;
}

.admin-back-btn:hover {
  background: #eeeeee;
  color: #1a1a1a;
}

        .admin-logout-btn {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 14px;
          padding: 10px 10px;
          background: transparent;
          border: 1px solid #dcdcdc;
          border-radius: 6px;
          color: #3a3a3a;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: border-color 140ms ease, color 140ms ease;
        }

        .admin-logout-btn:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        /* ---- Main content ---- */
        .admin-content {
          flex: 1;
          min-width: 0;
        }

        .admin-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 30px;
          background: #ffffff;
          border-bottom: 1px solid #e5e5e5;
        }

        .admin-topbar h1 {
          margin: 0;
          color: #1a1a1a;
          font-family: "Barlow Condensed", Impact, sans-serif;
          font-size: 22px;
          font-weight: 800;
        }

        .admin-topbar-stats {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: auto;
          margin-right: 20px;
        }

        .admin-stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          background: #f7f7f7;
          border: 1px solid #e5e5e5;
          border-radius: 20px;
          color: #5a5a5a;
          font-size: 11.5px;
        }

        .admin-stat-pill strong {
          color: #1a1a1a;
          font-size: 13px;
        }

        .admin-topbar-user {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .admin-topbar-avatar {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--orange);
          color: #fff;
          font-size: 12px;
          font-weight: 800;
        }

        .admin-topbar-email {
          color: #5a5a5a;
          font-size: 12px;
        }

        .admin-panel {
          padding: 28px 30px 60px;
        }

        /* ---- Shared panel building blocks (used by all panels) ---- */
        .admin-card {
          padding: 24px 24px 26px;
          background: #ffffff;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
        }

        .admin-card-title {
          margin: 0 0 4px;
          color: #1a1a1a;
          font-family: "Barlow Condensed", Impact, sans-serif;
          font-size: 18px;
          font-weight: 700;
        }

        .admin-card-sub {
          margin: 0 0 22px;
          color: #6b6b6b;
          font-size: 12px;
        }

        .admin-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .admin-form-grid .admin-field-full {
          grid-column: 1 / -1;
        }

        .admin-field {
          margin-bottom: 4px;
        }

        .admin-field label {
          display: block;
          margin-bottom: 6px;
          color: #3a3a3a;
          font-size: 11px;
          font-weight: 600;
        }

        .admin-field input,
        .admin-field textarea {
          width: 100%;
          padding: 10px 12px;
          background: #f7f7f7;
          border: 1px solid #dcdcdc;
          border-radius: 5px;
          color: #1a1a1a;
          font-size: 13px;
          font-family: Roboto, Arial, sans-serif;
          outline: none;
          transition: border-color 140ms ease;
        }

        .admin-field input:focus,
        .admin-field textarea:focus {
          border-color: var(--orange);
        }

        .admin-field textarea {
          resize: vertical;
          min-height: 90px;
        }

        .admin-field-error {
          display: block;
          margin-top: 5px;
          color: #ff6b6b;
          font-size: 10.5px;
        }

        .admin-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 18px;
          padding: 10px 20px;
          background: var(--orange);
          border: none;
          border-radius: 5px;
          color: #fff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: background 140ms ease, transform 140ms ease;
        }

        .admin-btn:hover:not(:disabled) {
          background: #e95500;
          transform: translateY(-1px);
        }

        .admin-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .admin-btn-ghost {
          background: transparent;
          border: 1px solid #dcdcdc;
          color: #3a3a3a;
        }

        .admin-btn-ghost:hover:not(:disabled) {
          border-color: var(--orange);
          color: var(--orange);
          background: transparent;
          transform: none;
        }

        .admin-btn-danger {
          background: transparent;
          border: 1px solid #4a2323;
          color: #ff8a8a;
        }

        .admin-btn-danger:hover:not(:disabled) {
          background: rgba(255, 77, 77, 0.1);
          border-color: #ff4d4d;
        }

        .admin-success-banner {
          margin-bottom: 18px;
          padding: 10px 14px;
          background: rgba(60, 200, 120, 0.12);
          border: 1px solid rgba(60, 200, 120, 0.35);
          border-radius: 5px;
          color: #7be0a5;
          font-size: 12px;
        }

        .admin-empty-state {
          padding: 40px 20px;
          text-align: center;
          color: #8a8a8a;
          font-size: 12.5px;
        }

        .admin-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .admin-list-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 16px;
          background: #f7f7f7;
          border: 1px solid #e5e5e5;
          border-radius: 6px;
        }

        .admin-list-row-main {
          min-width: 0;
        }

        .admin-list-row-main strong {
          display: block;
          color: #1a1a1a;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 3px;
        }

        .admin-list-row-main span {
          display: block;
          color: #767676;
          font-size: 11.5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .admin-list-row-actions {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }

        .admin-icon-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: #ffffff;
          border: 1px solid #dcdcdc;
          border-radius: 5px;
          color: #4a4a4a;
          cursor: pointer;
          transition: border-color 140ms ease, color 140ms ease;
        }

        .admin-icon-btn:hover {
          border-color: var(--orange);
          color: var(--orange);
        }

        .admin-icon-btn.is-danger:hover {
          border-color: #ff4d4d;
          color: #ff6b6b;
        }

        @media (max-width: 860px) {
          .admin-mobile-toggle {
            display: inline-flex;
          }

          .admin-sidebar {
            position: fixed;
            inset: 0 auto 0 0;
            z-index: 15;
            transform: translateX(-100%);
            transition: transform 200ms ease;
            box-shadow: 20px 0 40px rgba(0, 0, 0, 0.4);
          }

          .admin-sidebar.is-open {
            transform: translateX(0);
          }

          .admin-topbar {
            padding-left: 60px;
          }

          .admin-form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
