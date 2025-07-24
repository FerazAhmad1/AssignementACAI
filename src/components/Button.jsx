export const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 w-full bg-teal-600 text-white rounded-lg"
    >
      {children}
    </button>
  );
};
