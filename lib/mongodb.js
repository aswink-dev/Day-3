import mongoose from "mongoose";

const MONGODB_URL = "mongodb://127.0.0.1:27017/user";

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("DB Error:", err);
  }
}

export default connectDB;