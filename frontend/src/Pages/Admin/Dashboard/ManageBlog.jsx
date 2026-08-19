import { useEffect, useState } from "react";
import { Pencil, Trash2, Check, X, Newspaper } from "lucide-react";
import { getBlogs, updateBlog, deleteBlog } from "../../../services/blogApi";

export function ManageBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", excerpt: "", content: "" });

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    setLoading(true);
    setLoadError("");
    try {
      const data = await getBlogs();
      setBlogs(data);
    } catch (err) {
      setLoadError(err.message || "Could not load blog posts.");
    } finally {
      setLoading(false);
    }
  }

  function startEdit(blog) {
    setEditingId(blog._id);
    setEditForm({ title: blog.title, excerpt: blog.excerpt, content: blog.content });
  }

  function cancelEdit() {
    setEditingId(null);
  }

  async function saveEdit(id) {
    if (!editForm.title.trim()) return;
    try {
      const updated = await updateBlog(id, {
        title: editForm.title.trim(),
        excerpt: editForm.excerpt.trim(),
        content: editForm.content.trim(),
      });
      setBlogs((list) => list.map((b) => (b._id === id ? updated : b)));
      setEditingId(null);
    } catch (err) {
      setLoadError(err.message || "Could not save changes.");
    }
  }

  async function handleDelete(id) {
    try {
      await deleteBlog(id);
      setBlogs((list) => list.filter((b) => b._id !== id));
    } catch (err) {
      setLoadError(err.message || "Could not delete blog post.");
    }
  }

  return (
    <div className="admin-card">
      <h2 className="admin-card-title">Manage Blog Posts</h2>
      <p className="admin-card-sub">Edit or remove posts published from the Add Blog tab.</p>

      {loadError && (
        <div className="admin-field-error" style={{ marginBottom: 16, fontSize: 12 }}>
          {loadError}
        </div>
      )}

      {loading ? (
        <div className="admin-empty-state">Loading blog posts…</div>
      ) : blogs.length === 0 ? (
        <div className="admin-empty-state">
          <Newspaper size={22} strokeWidth={1.6} style={{ marginBottom: 8, opacity: 0.5 }} />
          <div>No blog posts yet — write one from the &ldquo;Add Blog&rdquo; tab.</div>
        </div>
      ) : (
        <div className="admin-list">
          {blogs.map((blog) =>
            editingId === blog._id ? (
              <div
                className="admin-list-row"
                key={blog._id}
                style={{ flexDirection: "column", alignItems: "stretch", gap: 10 }}
              >
                <div className="admin-form-grid">
                  <div className="admin-field admin-field-full">
                    <label>Title</label>
                    <input
                      value={editForm.title}
                      onChange={(e) => setEditForm((f) => ({ ...f, title: e.target.value }))}
                    />
                  </div>
                  <div className="admin-field admin-field-full">
                    <label>Excerpt</label>
                    <input
                      value={editForm.excerpt}
                      onChange={(e) => setEditForm((f) => ({ ...f, excerpt: e.target.value }))}
                    />
                  </div>
                  <div className="admin-field admin-field-full">
                    <label>Content</label>
                    <textarea
                      value={editForm.content}
                      onChange={(e) => setEditForm((f) => ({ ...f, content: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="admin-list-row-actions">
                  <button className="admin-icon-btn" onClick={() => saveEdit(blog._id)} aria-label="Save">
                    <Check size={15} />
                  </button>
                  <button className="admin-icon-btn is-danger" onClick={cancelEdit} aria-label="Cancel">
                    <X size={15} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="admin-list-row" key={blog._id}>
                <div className="admin-list-row-main">
                  <strong>{blog.title}</strong>
                  <span>
                    {blog.excerpt} · {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="admin-list-row-actions">
                  <button
                    className="admin-icon-btn"
                    onClick={() => startEdit(blog)}
                    aria-label="Edit blog post"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    className="admin-icon-btn is-danger"
                    onClick={() => handleDelete(blog._id)}
                    aria-label="Delete blog post"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
