import pool from "../database/mysql_config.js";

export async function initUserTable() {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            mobile_number VARCHAR(15) NOT NULL,
            date_of_birth DATE NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        `);
  // console.log("User table is ready!".yellow.bold);
}

export async function createUser(
  name,
  email,
  password,
  mobile_number,
  date_of_birth
) {
  const [result] = await pool.query(
    "INSERT INTO users (name, email, password, mobile_number, date_of_birth) VALUES (?, ?, ?, ?, ?)",
    [name, email, password, mobile_number, date_of_birth]
  );
  return result.insertId;
}

export async function findUserByEmail(email) {
  const [rows] = await pool.query("SELECT * FROM users WHERE email = ? ", [
    email,
  ]);
  return rows[0];
}
