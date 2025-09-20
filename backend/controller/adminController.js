import { getAllUsers } from "../models/UserModel.js";
import { getAllFeedbacks } from "../models/FeedbackModel.js";

// Controller to fetch all users
export async function fetchAllUsers(req, res) {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Server error" });
  }
}

// Controller to fetch all feedbacks
export async function fetchAllFeedbacks(req, res) {
  try {
    const feedbacks = await getAllFeedbacks();
    res.json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    res.status(500).json({ error: "Server error" });
  }
}
