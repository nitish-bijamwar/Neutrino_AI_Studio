// src/components/ui/Button.jsx
export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
