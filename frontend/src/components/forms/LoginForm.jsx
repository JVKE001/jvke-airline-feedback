import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import Input from "../input/Input";
import Button from "../button/Button";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
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

      const authData = {
        user: res.data.user,
        token: res.data.token,
      };

      // Save to localStorage
      localStorage.setItem("auth", JSON.stringify(authData));

      // Update context
      setAuth(authData);

      // Toast message
      toast.success(res.data.message);

      // Redirect to dashboard
      navigate(
        `/dashboard/${res.data.user.role === "admin" ? "admin" : "user"}`
      );
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
      <h2>Login Form</h2>
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
