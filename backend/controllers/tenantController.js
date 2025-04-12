import Tenant from "../models/Tenant.js";

const generateTenantID = async () => {
    let tenantID;
    let isUnique = false;

    while (!isUnique) {
        tenantID = Math.floor(1000 + Math.random() * 9000);
        const existingTenant = await Tenant.findOne({ tenantID });
        if (!existingTenant) {
            isUnique = true;
        }
    }
    return tenantID;
};

export const addTenant = async (req, res) => {
    try {
        const { tenantName, phoneNum, adhaarNum, rentingDate, rentPrice, unitPrice, userId } = req.body;
        if (!tenantName || !phoneNum || !adhaarNum || !rentPrice || !unitPrice) {
            return res.status(400).json({ message: "Please Enter all the Details" });
        }
        const existingPhone = await Tenant.findOne({ phoneNum });
        if (existingPhone) {
            return res.status(400).json({ message: "Phone number already exists." });
        }
        const existingAdhaar = await Tenant.findOne({ adhaarNum });
        if (existingAdhaar) {
            return res.status(400).json({ message: "Adhaar number already exists." });
        }
        const tenantID = await generateTenantID();
        const newTenant = new Tenant({
            tenantID,
            tenantName,
            phoneNum,
            adhaarNum,
            rentingDate,
            rentPrice,
            unitPrice,
            currentMonth: rentPrice,
            totalRent: rentPrice,
            rentPaid: rentPrice,
            rentBalance: 0,
            userId,
        });
        await newTenant.save();
        return res.status(201).json({ message: "Tenant added successfully.", tenantID: newTenant.tenantID, userID: newTenant.userId });
    } catch (error) {
        return res.status(500).json({ message: "Failed to Add the Tenant" });
    }
};

export const getAllTenants = async (req, res) => {
    try {
        const userId  = Number(req.params.id);
        const tenants = await Tenant.find({ userId });      
        if (!tenants || tenants.length === 0) {
            return res.status(404).json({ message: "No tenants found." });
        }
        return res.status(200).json(tenants);
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch tenants." });
    }
};

//search tenant by name
export const searchTenant = async (req, res) => {
    try {
        const {tenantName}  = req.query;
        const userId  = Number(req.params.id);
        const tenants = await Tenant.find({ userId, tenantName: { $regex: tenantName, $options: "i" } });
        if (!tenants || tenants.length === 0) {
            return res.status(404).json({ message: "No tenants exist with the you searched" });
        }
        return res.status(200).json(tenants);
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch tenants." });
    }
};
