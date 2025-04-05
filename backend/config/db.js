import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://monojit:monojit12345@Rently_Db.jvnbkr5.mongodb.net/?retryWrites=true&w=majority&appName=Rentlydb"

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Atlas Connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
};

export default connectDB;
