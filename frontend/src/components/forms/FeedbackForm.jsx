import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import Button from "../button/Button";
import { useAuth } from "../../context/AuthContext";
import StarRating from "../rating/StarRating";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [auth] = useAuth();
  const [message, setMessage] = useState("");

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/feedback", {
        message,
        rating,
        userId: auth?.user?.id,
      });

      if (res.data.success) {
        toast.success("Feedback submitted successfully!");
        setMessage("");
        setRating(0);
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Server error");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>

      <label htmlFor="star">Overall Rating</label>
      <StarRating rating={rating} setRating={setRating} />

      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        className="border border-steel outline-0 focus:ring-2 focus:ring-secondary focus:border-secondary"
        placeholder="Share your thoughts..."
        rows="5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <Button type="submit" text="Submit" className="mt-5" />
    </form>
  );
};

export default FeedbackForm;
