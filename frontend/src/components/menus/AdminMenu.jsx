import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import Button from "../../components/button/Button";

const AdminMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token and user info
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Show success toast
    toast.success("Logout successfully!");

    navigate("/login");
  };

  return (
    <nav className="flex flex-col space-y-4 p-4">
      <NavLink to="/dashboard/admin" className="dashboardMenuItems">
        Dashboard
      </NavLink>
      <NavLink to="/dashboard/admin/users" className="dashboardMenuItems">
        Users
      </NavLink>
      <NavLink to="/dashboard/admin/feedbacks" className="dashboardMenuItems">
        Feedbacks
      </NavLink>
      <NavLink to="/dashboard/admin/reviews" className="dashboardMenuItems">
        Reviews
      </NavLink>

      <Button
        onClick={handleLogout}
        text="Logout"
        className="bg-red-600 hover:bg-red-700 text-white text-[18px]"
      />
    </nav>
  );
};

export default AdminMenu;
