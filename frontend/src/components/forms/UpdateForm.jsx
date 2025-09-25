import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import Input from "../input/Input";
import Button from "../button/Button";
import { useAuth } from "../../context/AuthContext";

const updateForm = () => {
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");

  // Populate user data
  useEffect(() => {
    if (auth?.user) {
      const { name, email, phone, dob } = auth.user;
      setName(name || "");
      setEmail(email || "");
      setPhone(phone || "");
      setDob(dob ? dob.split("T")[0] : "");
    }
  }, [auth?.user]);

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "/api/auth/profile",
        { name, email, phone, dob, password },
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`, // Send token
          },
        }
      );

      if (data?.error) {
        toast.error(data.error);
      } else {
        setAuth({ ...auth, user: data.updatedUser });
        let ls = localStorage.getItem("auth");
        if (ls) {
          ls = JSON.parse(ls);
          ls.user = data.updatedUser;
          localStorage.setItem("auth", JSON.stringify(ls));
        }
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      console.error("Server error:", error);
      toast.error(error.response?.data?.error || "Update failed");
    }
  };

  return (
    <form className="form h-[700px]" onSubmit={handleSubmit}>
      <h2>Update Profile</h2>
      <label htmlFor="name">Name</label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <Input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="phone">Phone</label>
      <Input
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label htmlFor="dob">Date of Birth</label>
      <Input
        type="date"
        name="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />

      <label htmlFor="password">New Password</label>
      <Input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Leave empty if not changing"
      />

      <Button type="submit" text="Update Profile" className="mt-5" />
    </form>
  );
};

export default updateForm;
