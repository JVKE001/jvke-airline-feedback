import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import { initUserTable } from "./models/UserModel.js";
import { initFeedbackTable } from "./models/FeedbackModel.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await initUserTable();
    await initFeedbackTable();

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
