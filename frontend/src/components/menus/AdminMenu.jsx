import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
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
    </nav>
  );
};

export default AdminMenu;
