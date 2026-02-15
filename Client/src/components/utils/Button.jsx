import { Loader2 } from "lucide-react";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  isLoading = false,
  icon: Icon,
  className = "",
  disabled = false,
}) => {
  // Base styles for all buttons
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed";

  // Variant styles
  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-200",
    secondary:
      "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300",
    outline:
      "bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-md shadow-red-100",
  };

  // Size styles
  const sizes = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-5 py-2.5 text-base gap-2",
    lg: "px-8 py-3.5 text-lg gap-2.5",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {Icon && <Icon size={size === "sm" ? 16 : 20} />}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
