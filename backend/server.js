import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import tenantRoutes from "./routes/tenantRoutes.js";
import connectDB from "./config/db.js";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/", authRoutes);
app.use("/api/", tenantRoutes)

connectDB().then(() => {
        console.log("MongoDB connected");
        app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch(err => console.log(err));
