import mongoose from "mongoose";

export const dbConnection = () => {
  const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/default_database';

  mongoose
    .connect(mongoURI, {
      dbName: "EHRS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to database:", err);
    });
};
