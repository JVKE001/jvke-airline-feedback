import express from "express";
import { authMiddleware, verifyRole } from "../middleware/auth.js";
import {
  fetchAllUsers,
  fetchAllFeedbacks,
} from "../controller/adminController.js";

const adminRouter = express.Router();

// Get all users
adminRouter.get("/users", authMiddleware, verifyRole("admin"), fetchAllUsers);

// Get all feedbacks
adminRouter.get(
  "/feedbacks",
  authMiddleware,
  verifyRole("admin"),
  fetchAllFeedbacks
);

export default adminRouter;
