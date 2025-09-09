const Input = ({
  type = "text",
  placeholder = "Enter text",
  value,
  onChange,
  name,
  className = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      // required
      className={`w-full p-3 rounded-lg border border-steel outline-0 focus:ring-2 focus:ring-secondary focus:border-secondary ${className}`}
    />
  );
};

export default Input;
