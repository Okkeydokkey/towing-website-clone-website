const Notification = require("../models/NotificationModel");

// GET /api/notifications  (admin only)
async function getNotifications(req, res) {
  const notifications = await Notification.find().sort({ createdAt: -1 }).limit(50);
  const unreadCount = await Notification.countDocuments({ isRead: false });
  res.json({ notifications, unreadCount });
}

// PATCH /api/notifications/:id/read  (admin only — mark one as read)
async function markAsRead(req, res) {
  const notification = await Notification.findById(req.params.id);
  if (!notification) return res.status(404).json({ message: "Notification not found." });

  notification.isRead = true;
  await notification.save();
  res.json(notification);
}

// PATCH /api/notifications/read-all  (admin only — mark all as read)
async function markAllAsRead(req, res) {
  await Notification.updateMany({ isRead: false }, { isRead: true });
  res.json({ message: "All notifications marked as read." });
}

// DELETE /api/notifications/:id  (admin only — delete one notification)
async function deleteNotification(req, res) {
  const notification = await Notification.findByIdAndDelete(req.params.id);
  if (!notification) return res.status(404).json({ message: "Notification not found." });
  res.json({ message: "Notification deleted." });
}

module.exports = { getNotifications, markAsRead, markAllAsRead, deleteNotification };