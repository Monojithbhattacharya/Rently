import mongoose from "mongoose";

const tenantSchema = new mongoose.Schema({
    tenantID: {
        type: Number,
        required: true,
        unique: true
    },
    tenantName: {
        type: String,
        required: true
    },
    phoneNum: {
        type: String,
        unique: true
    },
    adhaarNum: {
        type: String,
        unique: true
    },
    rentingDate: String,
    rentPrice: Number,
    unitPrice: Number,
    currentMonth: {
        type: Number,
        default: 0
    },
    totalRent: {
        type: Number,
        default: 0
    },
    rentPaid: {
        type: Number,
        default: 0
    },
    rentBalance: {
        type: Number,
        default: 0
    },
    userId: Number,
})

const Tenant = mongoose.model('Tenant', tenantSchema);
export default Tenant;