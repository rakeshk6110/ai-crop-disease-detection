import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
// localStorage.setItem("access","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzg0NTQxMjA2LCJpYXQiOjE3ODQ1NDA5MDYsImp0aSI6IjllMDdjMTlkMDI1NzQ0NmY5ODBmZmM5ZjU2YzM1ZjJhIiwidXNlcl9pZCI6IjMifQ.E1La3WDusWlSFFh5gdV3t-NZcCZDRwhbPiJG9e0RYF4")
const API = axios.create({
  baseURL: `{API_URL}`,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;