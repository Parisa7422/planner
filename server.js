import express from "express";
const app = express();

const port = process.env.PORT || 5000;

import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
import morgan from "morgan";

// db and authenticateUser
import connectDB from "./db/connect.js";

// routets
import authRoutes from "./routes/authRoutes.js";
import goalRoutes from "./routes/goalRoutes.js";

// Middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authenticateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

//make the JSON data avaliable to us in the controllers
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hellloooo");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/goals", authenticateUser, goalRoutes);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
