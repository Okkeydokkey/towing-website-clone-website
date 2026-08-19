import { useEffect, useState } from "react";
import {
  getContacts,
  updateContactStatus,
} from "../../../services/contactApi";

export function ContactRequests() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const response = await getContacts();

      setContacts(response || []);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const changeStatus = async (id, status) => {
    try {
      await updateContactStatus(id, status);

      setContacts((prev) =>
        prev.map((contact) =>
          contact._id === id
            ? { ...contact, status }
            : contact
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  if (loading) {
    return <p>Loading requests...</p>;
  }

  return (
    <div className="admin-card">

      <h2 className="admin-card-title">
        Contact Requests
      </h2>

      <p className="admin-card-sub">
        Customer requests submitted through the website.
      </p>

      {contacts.length === 0 ? (
        <div className="admin-empty-state">
          No contact requests yet.
        </div>
      ) : (
        <div className="admin-list">

          {contacts.map((contact) => (
            <div
              className="admin-list-row"
              key={contact._id}
            >

              <div className="admin-list-row-main">

                <strong>
                  {contact.fullName}
                </strong>

                <span>
                  {contact.phone} • {contact.serviceType}
                </span>

                <span>
                  {contact.vehicle}
                </span>

                <span>
                  {contact.address}
                </span>

                {contact.message && (
                  <span>
                    {contact.message}
                  </span>
                )}

              </div>

              <div className="admin-list-row-actions">

                <select
                  value={contact.status}
                  onChange={(e) =>
                    changeStatus(
                      contact._id,
                      e.target.value
                    )
                  }
                >
                  <option value="New">
                    New
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Completed">
                    Completed
                  </option>
                </select>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}