import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import Input from "../input/Input";
import Button from "../button/Button";
import { useAuth } from "../../context/AuthContext";
import StarRating from "../rating/StarRating";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [auth] = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/feedback", {
        ...formData,
        rating,
        userId: auth?.user?._id,
      });

      if (res.data.success) {
        toast.success("Feedback submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
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
      <label htmlFor="name">Name</label>
      <Input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="star">Overall Rating</label>
      <StarRating rating={rating} setRating={setRating} />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        className="border border-steel outline-0 focus:ring-2 focus:ring-secondary focus:border-secondary"
        placeholder="Share your thoughts..."
        rows="5"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <Button type="Submit" text="Submit" className="mt-5" />
    </form>
  );
};

export default FeedbackForm;
