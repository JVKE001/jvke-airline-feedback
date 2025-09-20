import pool from "../database/mysql_config.js";

export async function initFeedbackTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS feedbacks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        message TEXT NOT NULL,
        rating INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `);
    console.log("Feedback table ready");
  } catch (error) {
    console.error("Error creating feedback table:", error);
    throw error;
  }
}

// Insert new feedback (for registered user)
export async function createFeedback(user_id, message, rating) {
  try {
    const [result] = await pool.query(
      "INSERT INTO feedbacks (user_id, message, rating) VALUES (?, ?, ?)",
      [user_id, message, rating || null]
    );
    return result.insertId;
  } catch (error) {
    console.error("Error inserting feedback:", error);
    throw error;
  }
}

// Get all feedbacks with user info
export async function getAllFeedbacks() {
  try {
    const [rows] = await pool.query(`
      SELECT f.id, f.message, f.rating, f.created_at,
             u.name, u.email
      FROM feedbacks f
      JOIN users u ON f.user_id = u.id
      ORDER BY f.created_at DESC
    `);
    return rows;
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    throw error;
  }
}
