import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import GhostButton from "../button/GhostButton";

const Header = () => {
  return (
    <header className="bg-steel/5 backdrop-blur-md sticky top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="text-steel text-2xl font-bold">
          Airline <span className="text-secondary">Feedback</span>
        </div>
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
        <div className="flex gap-3">
          <GhostButton text="Login" to="/login" />
          <GhostButton text="Sign up" to="/register" />
        </div>
      </div>
    </header>
  );
};

export default Header;
