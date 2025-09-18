import express from "express";
import {
  register,
  login,
  submitFeedback,
} from "../controller/authController.js";
import { authMiddleware, verifyRole } from "../middleware/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/feedback", submitFeedback);

router.get(
  "/dashboard/admin",
  authMiddleware,
  verifyRole("admin"),
  (req, res) => {
    res.json({ message: "Admin dashboard data", user: req.user });
  }
);

router.get(
  "/dashboard/user",
  authMiddleware,
  verifyRole("user"),
  (req, res) => {
    res.json({ message: "User dashboard data", user: req.user });
  }
);

export default router;
