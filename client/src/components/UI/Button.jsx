/* src/components/ui/Button.jsx */
export default function Button({ text, onClick, variant = "primary" }) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition duration-200 focus:outline-none";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700 shadow",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary}`}
    >
      {text}
    </button>
  );
}
