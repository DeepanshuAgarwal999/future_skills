import mongoose from "mongoose";

const DBconn = () => {
  mongoose
    .connect(process.env.DB_URL, {
      dbName: "future_skills",
    })
    .then((res) => {
      console.log("Mongodb connected successfully", res.connection.name);
    })
    .catch((error) => {
      console.warn("Mongodb unable to connect", error);
    });
};

export default DBconn;
