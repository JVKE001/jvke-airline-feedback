import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import Input from "../input/Input";
import Button from "../button/Button";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const res = await axios.post("/api/auth/login", formData);
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
    <form
      onSubmit={handleSubmit}
      className="w-md flex flex-col space-y-3.5 border border-steel p-10 bg-midnight rounded-2xl"
    >
      <h1>Login Form</h1>
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
        placeholder="Your password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button type="submit" text="Log in" className="mt-5" />
    </form>
  );
};

export default LoginForm;
