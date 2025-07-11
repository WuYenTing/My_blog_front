import classNames from "classnames";

const sizeClasses = {
  default: "px-4 py-2 text-sm font-medium rounded-lg",
  sm: "px-2.5 py-2 text-xs font-medium rounded",
};

const iconClasses = {
  sm: "h-3 w-3",
  default: "h-4 w-4",
};

const variantClasses = {
  primary:
    "border-transparent bg-black bg-opacity-90 hover:bg-opacity-70 focus:ring-white",
  white:
    "border-gray-300 border-none text-gray-200 bg-white/25 hover:bg-gray-100/50 hover:text-white focus:ring-2 focus:ring-green-100/50",
  red: 
    "border-red-300 border-none text-red-200 bg-red-500/25 hover:bg-red-500/50 hover:text-white focus:ring-2 focus:ring-red-500/50",
  redSolid:
    "border-transparent text-white bg-red-700 bg-opacity-90 hover:bg-opacity-70 focus:ring-red-500",
  emerald:
    "text-lg text-gray-400 font-semibold bg-emerald-50/20 border-none hover:bg-emerald-50/50 hover:text-white focus:ring-2 focus:ring-green-100/50",
  green:
    "text-lg text-gray-500 font-semibold bg-teal-200/80 border-none hover:bg-teal-200 hover:text-gray-600 focus:ring-2 focus:ring-green-100/50",
};

const loadingClasses = {
  primary: "text-white",
  white: "text-gray-500",
  red: "text-white",
  redSolid: "text-white",
  emerald: "text-gray-400",
  green: "text-gray-900",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "sm";
  variant?: "primary" | "white" | "red" | "redSolid" | "emerald" | "green";
  loading?: boolean;
  disable?: boolean;
  className?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  size = "default",
  variant = "primary",
  loading = false,
  disabled = false,
  type = "button",
  className,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={classNames(
        "inline-flex justify-center items-center border shadow-sm focus:outline-none",
        sizeClasses[size],
        variantClasses[variant],
        {
          "!bg-gray-300 !text-white": disabled,
        },
        className
      )}
      disabled={disabled || loading}

      {...rest}
    >
      {loading ? (
        <div className="py-0.5">
          <svg
            className={classNames(
              "animate-spin",
              iconClasses[size],
              loadingClasses[variant]
            )}
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx={12}
              cy={12}
              r={10}
              stroke="currentColor"
              strokeWidth={4}
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;