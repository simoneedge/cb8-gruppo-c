import mongoose from "mongoose";
import { MongoClient } from "mongodb";

let client;
let clientPromise;
const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  // MongoDB connection
  if (!process.env.MONGODB_URI) {
    throw new Error("Add Mongo URI to env file");
  }
  client = new MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME,
  });
  clientPromise = client.connect();
  await clientPromise;

  // Mongoose connection
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME,
  });

  connection.isConnected = db.connections[0].readyState;

  if (connection.isConnected) {
    console.log("MongoDB connected successfully!");
  } else {
    console.log("MongoDB connection failed!");
  }
}

export default dbConnect;
export { client, clientPromise }; // Exporting client and clientPromise for external use
