import express from "express";
import { errorMiddleware } from "./middlewares/error.js";
import morgan from "morgan";
import dotenv from "dotenv";
import DBconn from "./utils/dbConfig.js";
import cardRoute from "./routes/card.route.js";
import cors from "cors";
dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = process.env.PORT || 3000;
const app = express();
DBconn();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*", //since this is demo so i am allowing req from any port (i can use 5173 here as well)
  })
);
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/v2", cardRoute);

app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

app.use(errorMiddleware);

app.listen(port, () =>
  console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
);
