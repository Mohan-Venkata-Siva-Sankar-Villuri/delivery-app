// services/api.js

import axios from "axios";

const API_BASE_URL = "https://api.example.com"; // Replace with your API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const loginUser = (email, password) => {
  return api.post("/login", { email, password });
};

export const registerUser = (name, email, password) => {
  return api.post("/register", { name, email, password });
};

// Define more API calls for shipments, status updates, etc.
