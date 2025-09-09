import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import authRoutes from "./routes/authRoutes.js";
import { initUserTable } from "./models/UserModel.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await initUserTable();
    app.use("/api/auth", authRoutes);

    app.listen(PORT, () => {
      console.log(
        `Server is running on http://localhost:${PORT}`.underline.blue
      );
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServer();
