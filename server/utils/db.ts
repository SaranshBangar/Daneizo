import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
require("dotenv").config();
const dbUrl: string = process.env.DB_URL || "";

const mongoClient = new MongoClient(dbUrl, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const connectDB = async () => {
  try {
    await mongoClient.connect();
    console.log("Connected to MongoDBthruclient");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
  try {
    await mongoose.connect(dbUrl).then((data: any) => {
      console.log(`Database connected successfully ${data.connection.host}`);
    });
  } catch (error: any) {
    console.log(`Error: ${error.message}`);
    setTimeout(connectDB, 5000);
  }
};
export default connectDB;
