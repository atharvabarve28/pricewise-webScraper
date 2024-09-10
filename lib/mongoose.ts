import mongoose, { Mongoose } from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) return "MONGODB_URI is not set";
  if (isConnected) return console.log("=> using existing database connection");

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
