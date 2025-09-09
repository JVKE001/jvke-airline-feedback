const Button = ({
  type = "button",
  text,
  onClick,
  size = "md",
  className = "",
}) => {
  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`solidBtn ${sizes[size]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
