import pool from "../database/mysql_config.js";

export async function initUserTable() {
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
  // console.log("User table is ready!".yellow.bold);
}

export async function createUser(
  name,
  email,
  password,
  phone,
  dob,
  role = "user"
) {
  const [result] = await pool.query(
    "INSERT INTO users (name, email, password, phone, dob, role) VALUES (?, ?, ?, ?, ?, ?)",
    [name, email, password, phone, dob, role]
  );
  return result.insertId;
}

export async function findUserByEmail(email) {
  const [rows] = await pool.query("SELECT * FROM users WHERE email = ? ", [
    email,
  ]);
  return rows[0];
}
