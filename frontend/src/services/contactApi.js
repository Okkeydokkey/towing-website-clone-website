import { apiRequest } from "./apiClient";

export function submitContact(formData) {
  return apiRequest("/contact", { method: "POST", body: formData }); // public, no auth
}

export function getContacts() {
  return apiRequest("/contact", { auth: true });
}

export function updateContactStatus(id, status) {
  return apiRequest(`/contact/${id}`, { method: "PATCH", auth: true, body: { status } });
}

export function deleteContact(id) {
  return apiRequest(`/contact/${id}`, { method: "DELETE", auth: true });
}