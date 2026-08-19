import { apiRequest } from "./apiClient";

export function getServices() {
  return apiRequest("/services"); // public, no auth needed
}

export function createService({ title, price, description }) {
  return apiRequest("/services", {
    method: "POST",
    auth: true,
    body: { title, price, description },
  });
}

export function updateService(id, { title, price, description }) {
  return apiRequest(`/services/${id}`, {
    method: "PUT",
    auth: true,
    body: { title, price, description },
  });
}

export function deleteService(id) {
  return apiRequest(`/services/${id}`, {
    method: "DELETE",
    auth: true,
  });
}
