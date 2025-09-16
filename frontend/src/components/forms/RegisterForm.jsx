import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import Input from "../input/Input";
import Button from "../button/Button";

const RegisterForm = ({ className = "" }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    dob: "",
    role: "user",
  });

  // Handle input changes
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
      const res = await axios.post("/api/auth/register", formData);
      toast.success(res.data.message);
      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Something went wrong"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Register Form</h2>
      <label htmlFor="name">Full Name</label>
      <Input
        placeholder="Your Real Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <Input
        type="email"
        placeholder="example@yourmail.com"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <Input
        type="password"
        placeholder="your password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <label htmlFor="phone">Mobile Number</label>
      <Input
        type="tel"
        placeholder="+1 234 5..."
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <label htmlFor="dob">Date of Birth</label>
      <Input
        type="date"
        name="dob"
        placeholder="Your D.O.B"
        value={formData.dob}
        onChange={handleChange}
      />

      <Button text="Create Account" type="submit" className="mt-5" />
    </form>
  );
};

export default RegisterForm;
