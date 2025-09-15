import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import GhostButton from "../button/GhostButton";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLinkClick = () => setIsOpen(false);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    // Remove token and user info
    localStorage.removeItem("auth");

    toast.success("Logout successfully!");

    navigate("/login");
  };

  return (
    <header className="w-full absolute bg-steel/10 backdrop-blur-md z-50 h-[10vh]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-steel text-2xl font-bold">
          Airline <span className="text-secondary">Feedback</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 font-medium">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/about">
            About
          </NavLink>
          <NavLink className="link" to="/feedback">
            Feedback
          </NavLink>
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>

        {/* Auth buttons (desktop only) */}
        <div className="hidden md:flex gap-3">
          {!auth.user ? (
            <>
              <GhostButton text="Login" to="/login" />
              <GhostButton text="Sign up" to="/register" />
            </>
          ) : (
            <>
              <GhostButton
                text="Dashboard"
                to={`/dashboard/${
                  auth?.user?.role === "admin" ? "admin" : "user"
                }`}
              />
              <GhostButton
                text="Logout"
                onClick={handleLogout}
                to="/login"
                className="hover:bg-red-700 border-red-600 text-white"
              />
            </>
          )}
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4 text-center backdrop-blur-md shadow-lg font-medium bg-midnight">
          <NavLink className="link" to="/" onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink className="link" to="/about" onClick={handleLinkClick}>
            About
          </NavLink>
          <NavLink className="link" to="/feedback" onClick={handleLinkClick}>
            Feedback
          </NavLink>
          <NavLink className="link" to="/contact" onClick={handleLinkClick}>
            Contact
          </NavLink>

          {!auth.user ? (
            <>
              <NavLink className="link" to="/login" onClick={handleLinkClick}>
                Login
              </NavLink>
              <NavLink
                className="link"
                to="/register"
                onClick={handleLinkClick}
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                className="link"
                to={`/dashboard/${
                  auth.user.role === "admin" ? "admin" : "user"
                }`}
                onClick={handleLinkClick}
              >
                Dashboard
              </NavLink>
              <NavLink
                className="link"
                to="/login"
                onClick={() => {
                  handleLogout();
                  handleLinkClick();
                }}
              >
                Logout
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
