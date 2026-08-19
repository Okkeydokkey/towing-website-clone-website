import axios from "axios";

const API_URL = "http://localhost:5000/api/dashboard";

const getAuthHeader = () => {
const token = localStorage.getItem("rt_admin_token");
  return { headers: { Authorization: `Bearer ${token}` } };
};

export const getDashboardStats = async () => {
  const res = await axios.get(`${API_URL}/stats`, getAuthHeader());
  return res.data;
};