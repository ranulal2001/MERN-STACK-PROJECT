import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://ranulalchitara:6ovUzRskCefMXCBr@cluster0.2ugm3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
