import { Routes, Route } from "react-router-dom";

// Forms
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// Main Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Feedback from "./pages/Feedback/Feedback";
import Contact from "./pages/Contact/Contact";

// Admin Related Pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UsersPage from "./pages/Admin/UsersPage";
import FeedbacksPage from "./pages/Admin/FeedbacksPage";
import ReviewsPage from "./pages/Admin/ReviewsPage";

// User Related Pages
import UserDashboard from "./pages/Dashboard/UserDashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/contact" element={<Contact />} />

      {/* Forms Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Admin Related Routes */}
      <Route element={<ProtectedRoutes allowRoles={["admin"]} />}>
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/admin/users" element={<UsersPage />} />
        <Route path="/dashboard/admin/feedbacks" element={<FeedbacksPage />} />
        <Route path="/dashboard/admin/reviews" element={<ReviewsPage />} />
      </Route>

      {/* User Related Routes */}
      <Route element={<ProtectedRoutes allowRoles={["user"]} />}>
        <Route path="/dashboard/user" element={<UserDashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
