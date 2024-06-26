import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const url = process.env.mongo_url || "";
    await mongoose.connect(url);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
