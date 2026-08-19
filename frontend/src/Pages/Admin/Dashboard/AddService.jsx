import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { createService } from "../../../services/serviceApi";

const emptyForm = { title: "", price: "", description: "" };

export function AddService() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function validate(values) {
    const next = {};
    if (!values.title.trim()) next.title = "Service title is required.";
    if (!values.description.trim()) next.description = "Add a short description.";
    if (values.price && isNaN(Number(values.price))) next.price = "Price must be a number.";
    return next;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setSuccess(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    setFormError("");
    if (Object.keys(validation).length > 0) return;

    setSubmitting(true);
    try {
      await createService({
        title: form.title.trim(),
        price: form.price.trim(),
        description: form.description.trim(),
      });
      setForm(emptyForm);
      setErrors({});
      setSuccess(true);
    } catch (err) {
      setFormError(err.message || "Could not add service. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="admin-card">
      <h2 className="admin-card-title">Add a New Service</h2>
      <p className="admin-card-sub">This will appear on the Services page once saved.</p>

      {success && (
        <div className="admin-success-banner">Service added successfully.</div>
      )}
      {formError && (
        <div className="admin-field-error" style={{ marginBottom: 16, fontSize: 12 }}>
          {formError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="admin-form-grid">
          <div className="admin-field">
            <label htmlFor="title">Service title</label>
            <input
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Emergency Towing"
            />
            {errors.title && <span className="admin-field-error">{errors.title}</span>}
          </div>

          <div className="admin-field">
            <label htmlFor="price">Starting price (optional)</label>
            <input
              id="price"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="e.g. 75"
            />
            {errors.price && <span className="admin-field-error">{errors.price}</span>}
          </div>

          <div className="admin-field admin-field-full">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="What does this service cover?"
            />
            {errors.description && (
              <span className="admin-field-error">{errors.description}</span>
            )}
          </div>
        </div>

        <button type="submit" className="admin-btn" disabled={submitting}>
          <PlusCircle size={15} strokeWidth={2.2} />
          {submitting ? "Adding…" : "Add Service"}
        </button>
      </form>
    </div>
  );
}
