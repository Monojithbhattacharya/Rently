import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/", authRoutes);

connectDB().then(() => {
        console.log("MongoDB connected");
        app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch(err => console.log(err));
