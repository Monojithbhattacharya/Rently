import express from "express";
import { addTenant, getAllTenants, searchTenant, getTenantById, deleteTenant, updateTenant, updateRent, updatePaidRent} from "../controllers/tenantController.js";

const router = express.Router();

router.post("/add", addTenant);
router.get("/getAllTenants/:id", getAllTenants);
router.get("/search/:id", searchTenant);
router.get("/getTenantById", getTenantById);
router.delete("/deleteTenant", deleteTenant);
router.put("/updateTenant", updateTenant);
router.put("/updateRent", updateRent);
router.put("/updatePaidRent", updatePaidRent);

export default router;