import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`DB connected ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error ${error.message}`);
        process.exit(1);
    }
}