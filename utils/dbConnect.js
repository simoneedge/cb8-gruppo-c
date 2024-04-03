import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;

  if (connection.isConnected) {
    console.log("MongoDB connected successfully!");
  } else {
    console.log("MongoDB connection failed!");
  }
}

export default dbConnect;
