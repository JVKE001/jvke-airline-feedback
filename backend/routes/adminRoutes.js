import express from "express";
import { authMiddleware, verifyRole } from "../middleware/auth.js";
import { getAllUsers } from "../models/UserModel.js";

const adminRouter = express.Router();

// Get all users
adminRouter.get(
  "/users",
  authMiddleware,
  verifyRole("admin"),
  async (req, res) => {
    try {
      const users = await getAllUsers();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Server error" });
    }
  }
);

export default adminRouter;
