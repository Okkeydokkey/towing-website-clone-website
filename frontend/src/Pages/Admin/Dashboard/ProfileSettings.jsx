import { useState } from "react";
import { UserCog, Save } from "lucide-react";
import { changeEmail } from "../../../services/authApi";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ProfileSettings({ adminEmail, onEmailUpdated }) {
  const [newEmail, setNewEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const next = {};
    if (!newEmail.trim()) {
      next.newEmail = "New email is required.";
    } else if (!emailPattern.test(newEmail.trim())) {
      next.newEmail = "Enter a valid email address.";
    }

    if (newEmail.trim() && newEmail.trim().toLowerCase() === adminEmail.toLowerCase()) {
      next.newEmail = "This is already your current email.";
    }

    if (!confirmEmail.trim()) {
      next.confirmEmail = "Please confirm the new email.";
    } else if (newEmail.trim().toLowerCase() !== confirmEmail.trim().toLowerCase()) {
      next.confirmEmail = "Emails do not match.";
    }

    if (!currentPassword) {
      next.currentPassword = "Enter your current password to confirm this change.";
    }

    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    setSuccess(false);
    setFormError("");
    if (Object.keys(validation).length > 0) return;

    setSubmitting(true);

    try {
      const updatedAdmin = await changeEmail({
        newEmail: newEmail.trim(),
        currentPassword,
      });

      onEmailUpdated(updatedAdmin.email);
      setNewEmail("");
      setConfirmEmail("");
      setCurrentPassword("");
      setErrors({});
      setSuccess(true);
    } catch (err) {
      setFormError(err.message || "Could not update email. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="admin-card" style={{ maxWidth: 480 }}>
      <h2 className="admin-card-title">
        <UserCog size={16} strokeWidth={2.2} style={{ verticalAlign: -3, marginRight: 6 }} />
        Profile Settings
      </h2>
      <p className="admin-card-sub">Update the email address used to sign in to this dashboard.</p>

      <div className="admin-field" style={{ marginBottom: 20 }}>
        <label>Current email</label>
        <input value={adminEmail} disabled style={{ opacity: 0.6, cursor: "not-allowed" }} />
      </div>

      {success && <div className="admin-success-banner">Email updated successfully.</div>}
      {formError && (
        <div className="admin-field-error" style={{ marginBottom: 16, fontSize: 12 }}>
          {formError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="admin-field" style={{ marginBottom: 16 }}>
          <label htmlFor="new-email">New email</label>
          <input
            id="new-email"
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="new-admin@reliabletowing.com"
          />
          {errors.newEmail && <span className="admin-field-error">{errors.newEmail}</span>}
        </div>

        <div className="admin-field" style={{ marginBottom: 16 }}>
          <label htmlFor="confirm-email">Confirm new email</label>
          <input
            id="confirm-email"
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            placeholder="Re-enter the new email"
          />
          {errors.confirmEmail && (
            <span className="admin-field-error">{errors.confirmEmail}</span>
          )}
        </div>

        <div className="admin-field" style={{ marginBottom: 4 }}>
          <label htmlFor="current-password">Current password</label>
          <input
            id="current-password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="••••••••"
          />
          {errors.currentPassword && (
            <span className="admin-field-error">{errors.currentPassword}</span>
          )}
        </div>

        <button type="submit" className="admin-btn" disabled={submitting}>
          <Save size={14} strokeWidth={2.2} />
          {submitting ? "Saving…" : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
