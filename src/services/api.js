import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Upload Excel file
export const uploadFile = (file) => {
  const form = new FormData();
  form.append("file", file);
  return API.post("/upload", form);
};

// Save parsed data to DB
export const saveData = (data) => API.post("/save-data", data);

// Fetch stored research
export const fetchAllData = () => API.get("/research");
