import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Create the MySQL pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

async function checkConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to Database".bold.green);
    connection.release();
  } catch (error) {
    console.error("Connection failed:".bold.red, error);
  }
}

checkConnection();

export default pool;
