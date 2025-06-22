import classNames from "classnames";
import { ChangeEvent } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  labelClassNames?: string;
  label?: string | React.ReactNode;
  disabled?: boolean;
  inputSize?: "default" | "sm";
  placeHolder?: string;
  isError?: boolean;
  errorMessage?: string;
  containerClassName?: string;
  isMultipleLine?: boolean;
  onChangeText?: (value: string) => void;
}

const borderStyles = {
  default:
    "border-gray-400 border-1 text-emerald-50 focus:outline-none focus:ring-gray-100 focus:border-2 focus:border-gray-100",
  error:
    "border-red-300 border-1 text-red-900 focus:outline-none focus:ring-red-500 focus:border-2 focus:border-red-500",
};

const Input: React.FunctionComponent<InputProps> = ({
  label,
  labelClassNames,
  value = "",
  onChangeText,
  disabled = false,
  placeHolder,
  isError = false,
  errorMessage,
  containerClassName,
  ...rest
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    onChangeText && onChangeText(value);
  };

  return (
    <div className={containerClassName}>
      {label && (
        <label
          className={classNames(
            "mb-1 block text-sm font-medium text-gray-200",
            labelClassNames
          )}
        >
          {label}
        </label>
      )}
      <div>
        <input
          disabled={disabled}
          value={value}
          className={classNames(
            "px-3 py-2 shadow-sm block w-full sm:text-sm rounded-lg placeholder-gray-100 bg-emerald-50/20",
            {
              [borderStyles.error]: isError,
              [borderStyles.default]: !isError,
            }
          )}
          onChange={handleChange}
          placeholder={placeHolder}
          {...rest}
        />
      </div>
      {isError && errorMessage && (
        <p className="mt-2 text-xs text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;