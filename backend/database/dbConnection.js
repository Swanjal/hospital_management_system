import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    console.log("\n\n ",process.env.MONGO_URI ,"\n\n\n")
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "hospital",
    });
    console.log("Connected to database!");
  } catch (err) {
    console.error("Error occurred while connecting to database:", err);
  }
};
