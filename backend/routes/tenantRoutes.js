import express from "express";
import { addTenant } from "../controllers/tenantController.js";

const router = express.Router();

router.post("/add", addTenant);

export default router;