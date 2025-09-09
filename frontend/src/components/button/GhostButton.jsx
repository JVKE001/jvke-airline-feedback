import { Link } from "react-router-dom";

const GhostButton = ({
  type = "button",
  text,
  onClick,
  size = "md",
  className = "",
  to,
}) => {
  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const classes = `ghostBtn ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {text}
    </button>
  );
};

export default GhostButton;
