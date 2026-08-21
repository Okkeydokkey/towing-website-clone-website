import { useState, useEffect, useRef } from "react";
import { apiRequest } from "../services/apiClient";

export default function NotificationBell() {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const fetchNotifications = async () => {
    try {
      const data = await apiRequest("/notifications", { auth: true });
      setNotifications(data?.notifications || []);
      setUnreadCount(data?.unreadCount || 0);
    } catch (err) {
      console.error("Failed to fetch notifications", err);
      setNotifications((prev) => prev || []);
      setUnreadCount((prev) => prev || 0);
    }
  };

  useEffect(() => {
    fetchNotifications();
    // Poll every 30 seconds so new contact requests show up without refresh
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMarkAsRead = async (id) => {
    try {
      await apiRequest(`/notifications/${id}/read`, { method: "PATCH", auth: true });
      fetchNotifications();
    } catch (err) {
      console.error("Failed to mark as read", err);
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await apiRequest("/notifications/read-all", { method: "PATCH", auth: true });
      fetchNotifications();
    } catch (err) {
      console.error("Failed to mark all as read", err);
    }
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation(); // so it doesn't also trigger "mark as read" click
    try {
      await apiRequest(`/notifications/${id}`, { method: "DELETE", auth: true });
      // Remove it from local state immediately, no need to refetch everything
      setNotifications((prev) => prev.filter((n) => n._id !== id));
    } catch (err) {
      console.error("Failed to delete notification", err);
    }
  };

  return (
    <div className="notif-bell-wrap" ref={dropdownRef}>
      <button className="notif-bell-btn" onClick={() => setOpen((prev) => !prev)}>
        <i className="bi bi-bell"></i>
        {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
      </button>

      {open && (
        <div className="notif-dropdown">
          <div className="notif-dropdown-header">
            <span>Notifications</span>
            {unreadCount > 0 && (
              <button className="notif-mark-all" onClick={handleMarkAllAsRead}>
                Mark all as read
              </button>
            )}
          </div>

          <div className="notif-list">
            {notifications.length === 0 && (
              <p className="notif-empty">No notifications yet.</p>
            )}
            {notifications.map((n) => (
              <div
                key={n._id}
                className={`notif-item ${n.isRead ? "" : "unread"}`}
                onClick={() => !n.isRead && handleMarkAsRead(n._id)}
              >
                <button
                  className="notif-delete-btn"
                  onClick={(e) => handleDelete(n._id, e)}
                  aria-label="Delete notification"
                  title="Delete"
                >
                  &times;
                </button>
                <p className="notif-message">{n.message}</p>
                <span className="notif-time">
                  {new Date(n.createdAt).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}