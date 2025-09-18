import pool from "../database/mysql_config.js";

export async function initFeedbackTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS feedbacks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT,
    rating INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
    await pool.query(sql)
    console.log("Feedback table ready")
}
