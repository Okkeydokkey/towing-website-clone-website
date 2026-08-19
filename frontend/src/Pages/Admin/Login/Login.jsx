import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";
import towingReference from "../../../assets/towing-reference.png";
import { login } from "../../../services/authApi";

const referenceImage = towingReference;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function validate(values) {
    const next = {};
    if (!values.email.trim()) {
      next.email = "Email is required.";
    } else if (!emailPattern.test(values.email.trim())) {
      next.email = "Enter a valid email address.";
    }

    if (!values.password) {
      next.password = "Password is required.";
    } else if (values.password.length < 6) {
      next.password = "Password must be at least 6 characters.";
    }

    return next;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);
    if (touched[name]) {
      setErrors(validate(nextForm));
    }
    if (formError) setFormError("");
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(form));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    setTouched({ email: true, password: true });
    if (Object.keys(validation).length > 0) return;

    setSubmitting(true);
    setFormError("");

   try {
  await login(form.email.trim(), form.password);
  navigate("/admin/dashboard");
} catch (error) {
  setFormError(error.message || "Incorrect email or password. Please try again.");
  setSubmitting(false);
}
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">
        <a href="/" className="admin-login-logo" aria-label="Reliable Towing home">
          <img src={referenceImage} alt="Reliable Towing & Recovery" />
        </a>

        <div className="admin-login-heading">
          <span className="admin-login-badge">
            <ShieldCheck size={13} strokeWidth={2.4} /> ADMIN ACCESS
          </span>
          <h1>Sign in to your dashboard</h1>
          <p>Manage services, blog posts, and your account from one place.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="admin-field">
            <label htmlFor="email">Email address</label>
            <div
              className={`admin-input-wrap ${
                touched.email && errors.email ? "has-error" : ""
              }`}
            >
              <Mail size={15} strokeWidth={2.2} />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {touched.email && errors.email && (
              <span className="admin-field-error">{errors.email}</span>
            )}
          </div>

          <div className="admin-field">
            <label htmlFor="password">Password</label>
            <div
              className={`admin-input-wrap ${
                touched.password && errors.password ? "has-error" : ""
              }`}
            >
              <Lock size={15} strokeWidth={2.2} />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <button
                type="button"
                className="admin-input-toggle"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff size={15} strokeWidth={2.2} />
                ) : (
                  <Eye size={15} strokeWidth={2.2} />
                )}
              </button>
            </div>
            {touched.password && errors.password && (
              <span className="admin-field-error">{errors.password}</span>
            )}
          </div>

          {formError && <div className="admin-form-error">{formError}</div>}

          <button type="submit" className="admin-submit-btn" disabled={submitting}>
            {submitting ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <a href="/" className="admin-login-back">
          ← Back to website
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Roboto:wght@400;500;700&display=swap');

        .admin-login-page {
            flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: #f2f2f2;
          background-image: radial-gradient(circle at 15% 15%, rgba(255, 97, 8, 0.07), transparent 45%),
            radial-gradient(circle at 85% 85%, rgba(255, 97, 8, 0.05), transparent 45%);
          font-family: Roboto, Arial, sans-serif;
        }

        .admin-login-page *,
        .admin-login-page *::before,
        .admin-login-page *::after {
          box-sizing: border-box;
        }

        .admin-login-card {
          width: 100%;
          max-width: 380px;
          padding: 34px 32px 28px;
          background: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.12);
        }

        .admin-login-logo {
          display: block;
          width: 120px;
          margin: 0 auto 22px;
        }

        .admin-login-logo img {
          width: 100%;
          display: block;
        }

        .admin-login-heading {
          text-align: center;
          margin-bottom: 26px;
        }

        .admin-login-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 10px;
          padding: 4px 10px;
          border-radius: 20px;
          background: rgba(255, 97, 8, 0.14);
          color: #ff6108;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.6px;
        }

        .admin-login-heading h1 {
          margin: 0 0 6px;
          color: #1a1a1a;
          font-family: "Barlow Condensed", Impact, sans-serif;
          font-size: 26px;
          font-weight: 800;
        }

        .admin-login-heading p {
          margin: 0;
          color: #6b6b6b;
          font-size: 12px;
        }

        .admin-field {
          margin-bottom: 16px;
        }

        .admin-field label {
          display: block;
          margin-bottom: 6px;
          color: #3a3a3a;
          font-size: 11px;
          font-weight: 600;
        }

        .admin-input-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 12px;
          height: 42px;
          background: #f7f7f7;
          border: 1px solid #dcdcdc;
          border-radius: 5px;
          color: #767676;
          transition: border-color 160ms ease;
        }

        .admin-input-wrap:focus-within {
          border-color: #ff6108;
        }

        .admin-input-wrap.has-error {
          border-color: #ff4d4d;
        }

        .admin-input-wrap input {
          flex: 1;
          height: 100%;
          background: transparent;
          border: none;
          outline: none;
          color: #1a1a1a;
          font-size: 13px;
          font-family: Roboto, Arial, sans-serif;
        }

        .admin-input-wrap input::placeholder {
          color: #999999;
        }

        .admin-input-toggle {
          display: inline-flex;
          background: none;
          border: none;
          color: #7c7c7c;
          cursor: pointer;
          padding: 2px;
        }

        .admin-input-toggle:hover {
          color: #ff6108;
        }

        .admin-field-error {
          display: block;
          margin-top: 5px;
          color: #ff6b6b;
          font-size: 10.5px;
        }

        .admin-form-error {
          margin-bottom: 16px;
          padding: 9px 12px;
          background: rgba(255, 77, 77, 0.12);
          border: 1px solid rgba(255, 77, 77, 0.35);
          border-radius: 5px;
          color: #ff8a8a;
          font-size: 11.5px;
        }

        .admin-submit-btn {
          width: 100%;
          height: 42px;
          border: none;
          border-radius: 5px;
          background: #ff6108;
          color: #fff;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.4px;
          cursor: pointer;
          transition: background 160ms ease, transform 160ms ease;
        }

        .admin-submit-btn:hover:not(:disabled) {
          background: #e95500;
          transform: translateY(-1px);
        }

        .admin-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .admin-login-back {
          display: block;
          margin-top: 18px;
          text-align: center;
          color: #767676;
          font-size: 11px;
          text-decoration: none;
        }

        .admin-login-back:hover {
          color: #ff6108;
        }
      `}</style>
    </main>
  );
}
