import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ allowRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!token) return <Navigate to="/login" />;

  // Logged in but role is not allowed
  if (!allowRoles.includes(role)) return <Navigate to="/" />;

  // Role allowed render children
  return <Outlet />;
};

export default ProtectedRoutes;
