// src/components/ui/Button.jsx
export const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-semibold transition-all duration-300 focus:outline-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#6c63ff] to-[#00b4ff] text-white hover:opacity-90 shadow-md",
    secondary:
      "bg-white text-[#6c63ff] border border-[#6c63ff] hover:bg-[#f4f3ff] shadow-sm",
    danger:
      "bg-red-500 hover:bg-red-600 text-white shadow-md",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
