export default function Button({ color, className, onClick, children }) {
  const colorClass =
    color === "primary"
      ? "bg-amber-300 hover:text-amber-300 hover:border-amber-300"
      : "bg-gray-400 hover:text-gray-400 hover:border-gray-400";

  return (
    <button
      onClick={onClick}
      className={`${colorClass}  text-white font-bold px-4 py-1.5 rounded-full hover:bg-white border-2 border-transparent transition duration-100 ${className}`}
    >
      {children}
    </button>
  );
}
