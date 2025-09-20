import pool from "../database/mysql_config.js";

// Initialize table if it doesn't exist
export async function initUserTable() {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            phone VARCHAR(15) NOT NULL,
            dob DATE NOT NULL,
            role ENUM('user', 'admin') DEFAULT 'user',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        `);
    console.log("User table is ready!".yellow.bold);
  } catch (error) {
    console.error("Error creating user table:", error);
    throw error;
  }
}

// Create a new user
export async function createUser(
  name,
  email,
  password,
  phone,
  dob,
  role = "user"
) {
  const [result] = await pool.query(
    "INSERT INTO users (name, email, password, phone, dob, role) VALUES (?,?,?,?,?,?)",
    [name, email, password, phone, dob, role]
  );
  return result.insertId;
}

// Find user by email (used in login/register)
export async function findUserByEmail(email) {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE email = ? LIMIT 1",
    [email]
  );

  return rows[0] || null;
}

// Get all users (excluding password by default)
export async function getAllUsers() {
  const [rows] = await pool.query(
    "SELECT id, name, email, phone, dob, role, created_at FROM users"
  );
  return rows;
}
