import mongoose from "mongoose";

const uri: string = process.env.MONGODB_URI || "";

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

let isConnected: boolean = false;

export const connectDB = async (): Promise<void> => {
  if (isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    const db = await mongoose.connect(uri);
    isConnected = !!db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Unable to connect to MongoDB");
  }
};
