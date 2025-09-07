import { createUser, findUserByEmail } from "../models/UserModel.js";

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
