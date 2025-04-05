import axios from "axios";
import { API_URL } from "./src/constant";

const apiService = axios.create({ API: API_URL });

export const signup = (data) => apiService.post("/signup", data)
export const login = (data) => apiService.post("/login", data)