import express from "express";
import { addTenant, getAllTenants } from "../controllers/tenantController.js";

const router = express.Router();

router.post("/add", addTenant);
router.get("/getAllTenants/:id", getAllTenants);

export default router;