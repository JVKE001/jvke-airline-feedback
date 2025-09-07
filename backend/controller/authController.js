import { createUser, findUserByEmail } from "../models/UserModel.js";

// Register Controller
export async function register(req, res) {
  const { name, email, password, mobile_number, date_of_birth } = req.body;
  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const userId = await createUser(
      name,
      email,
      password,
      mobile_number,
      date_of_birth
    );
    res.status(201).json({ message: "User registered successfully", userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Login Controller
export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (user.password != password) {
      return res.status(401).json({ error: "Invalid password" });
    }
    res.status(200).json({
      message: "Login successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        mobile_number: user.mobile_number,
        date_of_birth: user.date_of_birth,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
