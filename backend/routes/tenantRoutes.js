import express from "express";
import { addTenant, getAllTenants, searchTenant } from "../controllers/tenantController.js";

const router = express.Router();

router.post("/add", addTenant);
router.get("/getAllTenants/:id", getAllTenants);
router.get("/search/:id", searchTenant);

export default router;