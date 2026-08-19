// Base URL of your backend. Set VITE_API_URL in frontend/.env to override
// (e.g. VITE_API_URL=https://your-deployed-api.com/api for production).

export const API_URL = "https://towingbackend.vercel.app/api";

export function getToken() {
  return localStorage.getItem("rt_admin_token");
}

export function setToken(token) {
  localStorage.setItem("rt_admin_token", token);
}

export function clearToken() {
  localStorage.removeItem("rt_admin_token");
}

/**
 * Thin wrapper around fetch that:
 * - prefixes API_URL
 * - attaches the admin JWT (if present) as a Bearer token
 * - sends/reads JSON automatically
 * - throws an Error with the backend's message on non-2xx responses
 */
export async function apiRequest(path, { method = "GET", body, auth = false } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }

const res = await fetch(`${API_URL}${path}`, {
  method,
  headers,
  body: body !== undefined ? JSON.stringify(body) : undefined,
  cache: "no-store",
});
  let data = null;
  try {
    data = await res.json();
  } catch {
    // no JSON body (e.g. 204) — that's fine
  }

  if (!res.ok) {
    throw new Error((data && data.message) || `Request failed (${res.status})`);
  }

  return data;
}
