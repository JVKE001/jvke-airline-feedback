import pool from "../database/mysql_config.js";

import {
  createUser,
  findUserByEmail,
  findUserById,
  updateUserById,
} from "../models/UserModel.js";
import { createFeedback } from "../models/FeedbackModel.js";
import { hashPassword, comparePassword } from "../helper/authHelper.js";
import JWT from "jsonwebtoken";

// Register Controller
export async function register(req, res) {
  try {
    const { name, email, password, phone, dob, role } = req.body;

    // Validate required fields
    if (!name || !email || !password || !phone || !dob) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check for existing email
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Save uset with hashed password
    const userId = await createUser(
      name,
      email,
      hashedPassword,
      phone,
      dob,
      role
    );

    // Success log
    res.status(201).json({ message: "User registered successfully", userId });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Login Controller
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find user
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare plain password with hashed password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // 1. Generate JWT token with expiry (7 days)
    const token = JWT.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Send cookie to browser
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    // Success Log
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        dob: user.dob,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Feedback Controller
export const submitFeedback = async (req, res) => {
  try {
    const { userId, message, rating } = req.body;

    if (!userId || !message) {
      return res.status(400).json({ message: "Message required" });
    }

    const feedbackId = await createFeedback(userId, message, rating);

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      feedbackId,
    });
  } catch (error) {
    console.error("Error inserting feedback:", error);
    res.status(500).json({ error: "Database error" });
  }
};

// Update Profile Controller
export const updateProfile = async (req, res) => {
  try {
    let { name, email, password, phone, dob } = req.body;
    const userId = req.user.id;

    // Find the user
    const user = await findUserById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Prepare updated fields
    let updatedPassword = user.password;
    if (password) {
      updatedPassword = await hashPassword(password);
    }

    // Normailze date (YYYY-MM-DD)
    if (dob) {
      dob = dob.split("T")[0];
    }

    // Run update query
    await updateUserById(userId, {
      name: name || user.name,
      email: email || user.email,
      password: updatedPassword,
      phone: phone || user.phone,
      dob: dob || user.dob,
    });

    // Respond
    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: userId,
        name: name || user.name,
        email: email || user.email,
        phone: phone || user.phone,
        dob: dob || user.dob,
      },
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
