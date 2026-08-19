import { useEffect, useState } from "react";
import { Pencil, Trash2, Check, X, ListChecks } from "lucide-react";
import {
  getServices,
  updateService,
  deleteService,
} from "../../../services/serviceApi";

export function ManageService() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", price: "", description: "" });

  useEffect(() => {
    loadServices();
  }, []);

  async function loadServices() {
    setLoading(true);
    setLoadError("");
    try {
      const data = await getServices();
      setServices(data);
    } catch (err) {
      setLoadError(err.message || "Could not load services.");
    } finally {
      setLoading(false);
    }
  }

  function startEdit(service) {
    setEditingId(service._id);
    setEditForm({
      title: service.title,
      price: service.price || "",
      description: service.description,
    });
  }

  function cancelEdit() {
    setEditingId(null);
  }

  async function saveEdit(id) {
    if (!editForm.title.trim()) return;
    try {
      const updated = await updateService(id, {
        title: editForm.title.trim(),
        price: editForm.price.trim(),
        description: editForm.description.trim(),
      });
      setServices((list) => list.map((s) => (s._id === id ? updated : s)));
      setEditingId(null);
    } catch (err) {
      setLoadError(err.message || "Could not save changes.");
    }
  }

  async function handleDelete(id) {
    try {
      await deleteService(id);
      setServices((list) => list.filter((s) => s._id !== id));
    } catch (err) {
      setLoadError(err.message || "Could not delete service.");
    }
  }

  return (
    <div className="admin-card">
      <h2 className="admin-card-title">Manage Services</h2>
      <p className="admin-card-sub">Edit or remove services added from the Add Service tab.</p>

      {loadError && (
        <div className="admin-field-error" style={{ marginBottom: 16, fontSize: 12 }}>
          {loadError}
        </div>
      )}

      {loading ? (
        <div className="admin-empty-state">Loading services…</div>
      ) : services.length === 0 ? (
        <div className="admin-empty-state">
          <ListChecks size={22} strokeWidth={1.6} style={{ marginBottom: 8, opacity: 0.5 }} />
          <div>No services yet — add one from the &ldquo;Add Service&rdquo; tab.</div>
        </div>
      ) : (
        <div className="admin-list">
          {services.map((service) =>
            editingId === service._id ? (
              <div className="admin-list-row" key={service._id} style={{ flexDirection: "column", alignItems: "stretch", gap: 10 }}>
                <div className="admin-form-grid">
                  <div className="admin-field">
                    <label>Title</label>
                    <input
                      value={editForm.title}
                      onChange={(e) => setEditForm((f) => ({ ...f, title: e.target.value }))}
                    />
                  </div>
                  <div className="admin-field">
                    <label>Price</label>
                    <input
                      value={editForm.price}
                      onChange={(e) => setEditForm((f) => ({ ...f, price: e.target.value }))}
                    />
                  </div>
                  <div className="admin-field admin-field-full">
                    <label>Description</label>
                    <textarea
                      value={editForm.description}
                      onChange={(e) => setEditForm((f) => ({ ...f, description: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="admin-list-row-actions">
                  <button className="admin-icon-btn" onClick={() => saveEdit(service._id)} aria-label="Save">
                    <Check size={15} />
                  </button>
                  <button className="admin-icon-btn is-danger" onClick={cancelEdit} aria-label="Cancel">
                    <X size={15} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="admin-list-row" key={service._id}>
                <div className="admin-list-row-main">
                  <strong>
                    {service.title} {service.price && `— $${service.price}`}
                  </strong>
                  <span>{service.description}</span>
                </div>
                <div className="admin-list-row-actions">
                  <button
                    className="admin-icon-btn"
                    onClick={() => startEdit(service)}
                    aria-label="Edit service"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    className="admin-icon-btn is-danger"
                    onClick={() => handleDelete(service._id)}
                    aria-label="Delete service"
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
