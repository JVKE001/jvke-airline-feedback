import { Routes, Route } from "react-router-dom";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";

import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoutes allowRoles={["admin"]} />}>
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
        </Route>

        <Route element={<ProtectedRoutes allowRoles={["user"]} />}>
          <Route path="/dashboard/user" element={<UserDashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
