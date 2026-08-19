import { apiRequest } from "./apiClient";

export function getBlogs() {
  return apiRequest("/blogs"); // public, no auth needed
}

export function getBlogById(id) {
  return apiRequest(`/blogs/${id}`);
}

export function createBlog({ title, excerpt, content, author, category, image }) {
  return apiRequest("/blogs", {
    method: "POST",
    auth: true,
    body: { title, excerpt, content, author, category, image },
  });
}

export function updateBlog(id, { title, excerpt, content }) {
  return apiRequest(`/blogs/${id}`, {
    method: "PUT",
    auth: true,
    body: { title, excerpt, content },
  });
}

export function deleteBlog(id) {
  return apiRequest(`/blogs/${id}`, {
    method: "DELETE",
    auth: true,
  });
}
