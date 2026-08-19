import { useState } from "react";
import { FileEdit } from "lucide-react";
import { createBlog } from "../../../services/blogApi";

const emptyForm = { title: "", excerpt: "", content: "", author: "", category: "", image: "" };

export function AddBlog() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

function validate(values) {
  const next = {};
  if (!values.title.trim()) next.title = "Blog title is required.";
  if (!values.excerpt.trim()) next.excerpt = "Add a short excerpt.";
  if (!values.content.trim()) next.content = "Blog content can't be empty.";
  if (!values.author.trim()) next.author = "Author name is required.";
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
     await createBlog({
  title: form.title.trim(),
  excerpt: form.excerpt.trim(),
  content: form.content.trim(),
  author: form.author.trim(),
  category: form.category.trim(),
  image: form.image.trim(),
});
      setForm(emptyForm);
      setErrors({});
      setSuccess(true);
    } catch (err) {
      setFormError(err.message || "Could not publish post. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="admin-card">
      <h2 className="admin-card-title">Write a New Blog Post</h2>
      <p className="admin-card-sub">Published posts will show up on the blog page.</p>

      {success && <div className="admin-success-banner">Blog post added successfully.</div>}
      {formError && (
        <div className="admin-field-error" style={{ marginBottom: 16, fontSize: 12 }}>
          {formError}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="admin-form-grid">
          

        <div className="admin-field admin-field-full">
  <label htmlFor="blog-author">Author</label>
  <input
    id="blog-author"
    name="author"
    value={form.author}
    onChange={handleChange}
    placeholder="e.g. Autumn Phillips"
  />
  {errors.author && <span className="admin-field-error">{errors.author}</span>}
</div>

<div className="admin-field admin-field-full">
  <label htmlFor="blog-category">Category</label>
  <input
    id="blog-category"
    name="category"
    value={form.category}
    onChange={handleChange}
    placeholder="e.g. Design"
  />
</div>

<div className="admin-field admin-field-full">
  <label htmlFor="blog-image">Image URL</label>
  <input
    id="blog-image"
    name="image"
    value={form.image}
    onChange={handleChange}
    placeholder="https://..."
  />
</div>

          <div className="admin-field admin-field-full">
            <label htmlFor="blog-content">Full content</label>
            <textarea
              id="blog-content"
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="Write the full blog post here…"
              style={{ minHeight: 160 }}
            />
            {errors.content && <span className="admin-field-error">{errors.content}</span>}
          </div>
        </div>

        <button type="submit" className="admin-btn" disabled={submitting}>
          <FileEdit size={15} strokeWidth={2.2} />
          {submitting ? "Publishing…" : "Publish Post"}
        </button>
      </form>
    </div>
  );
}
