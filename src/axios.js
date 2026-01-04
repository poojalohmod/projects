import axios from "axios";

// Centralized axios instance if you need external APIs later.
// Keep all HTTP calls in service files; never in components.
const api = axios.create({
  baseURL: "/",
  timeout: 10000,
});

export default api;
