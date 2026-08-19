import { apiRequest, setToken, clearToken } from "./apiClient";

export async function login(email, password) {
  const data = await apiRequest("/auth/login", {
    method: "POST",
    body: { email, password },
  });
  setToken(data.token);
  return data.admin; // { id, email }
}

export function logout() {
  clearToken();
}

export async function getMe() {
  const data = await apiRequest("/auth/me", { auth: true });
  return data.admin; // { id, email }
}

export async function changeEmail({ newEmail, currentPassword }) {
  const data = await apiRequest("/auth/email", {
    method: "PATCH",
    auth: true,
    body: { newEmail, currentPassword },
  });
  return data.admin; // { id, email }
}
