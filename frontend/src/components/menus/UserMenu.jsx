import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "../button/Button";
import { useAuth } from "../../context/AuthContext";

const UserMenu = () => {
  const [auth, setAuth] = useAuth();
  const navigation = useNavigate();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    // Remove token and user info
    localStorage.getItem("auth");

    // Show success toast
    toast.success("Logout successfully!");

    // Navigate to login
    Navigate("/login");
  };

  return (
    <nav className="flex flex-col space-y-4 p-4">
      <NavLink to="/dashboard/user" className="dashboardMenuItems">
        Dashboard
      </NavLink>

      <Button
        onClick={handleLogout}
        text="Logout"
        className="bg-red-600 hover:bg-red-700 text-white text-[18px]"
      />
    </nav>
  );
};

export default UserMenu;
