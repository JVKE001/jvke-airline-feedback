import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = ({ allowRoles }) => {
  const [auth] = useAuth();

  // Not logged in
  if (!auth?.token) return <Navigate to="/login" />;

  // Logged in but role is not allowed
  if (!allowRoles.includes(auth?.user?.role)) return <Navigate to="/" />;

  // Role allowed render children
  return <Outlet />;
};

export default ProtectedRoutes;
