import { createUser, findUserByEmail } from "../models/UserModel.js";
import { hashPassword, comparePassword } from "../helper/authHelper.js";
import JWT from "jsonwebtoken";

// Register Controller
export async function register(req, res) {
  const { name, email, password, phone, dob, role } = req.body;
  try {
    // Find email
    const existingUser = await findUserByEmail(email);

    // Find unique user
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // All fields are required
    if (!name || !email || !password || !phone || !dob) {
      return res
        .status(400)
        .json({ error: "Please fill out all required fields." });
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
  const { email, password } = req.body;
  try {
    // Find user
    const user = await findUserByEmail(email);

    // Verify email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email and password are required." });
    }

    // User not found
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
