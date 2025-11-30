
import clsx from "clsx";
import React, { ReactNode} from "react";


//define the variants
type ButtonSize = "small" | "medium" | "large";
type ButtonVariants = "filled" | "outline";
type ButtonType = "primary" | "error" | "success" | "info" | "warning" | "disabled";

type ButtonProps = {
  text: string;
  arrowLeft?: ReactNode;
  arrowRight?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariants;
  type?: ButtonType;
}

export function Button ({
  text, size = "medium", variant = "filled", arrowLeft, arrowRight, type= "primary"}:ButtonProps
){
  const baseClasses = "rounded-md flex items-center gap-2 transition-colors duration-300";

  const sizeClasses = {
    small: "text-sm py-1 px-2",
    medium: "text-base py-2 px-4",
    large: "text-lg py-3 px-6"
  };

  const variantClasses = {
    filled: {
            primary: "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-700 focus:ring-2 focus:ring-blue-800 focus:outline-none",
            error: "bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-800 focus:outline-none",
            success: "bg-green-500 text-white hover:bg-green-600 focus:bg-green-700 focus:ring-2 focus:ring-green-800 focus:outline-none",
            warning: "bg-yellow-500 text-white hover:bg-yellow-600 focus:bg-yellow-700 focus:ring-2 focus:ring-yellow-800 focus:outline-none",
            info: "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-800 focus:outline-none",
            disabled: "bg-gray-400 text-white cursor-not-allowed",
          },
          outline: {
            primary: "border border-blue-500 text-blue-500 hover:bg-blue-400 hover:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none",
            error: "border border-red-500 text-red-500 hover:bg-red-400 hover:text-white focus:ring-2 focus:ring-red-500 focus:outline-none",
            success: "border border-green-500 text-green-500 hover:bg-green-400 hover:text-white focus:ring-2 focus:ring-green-500 focus:outline-none",
            warning: "border border-yellow-500 text-yellow-500 hover:bg-yellow-400 hover:text-white focus:ring-2 focus:ring-yellow-500 focus:outline-none",
            info: "border border-indigo-500 text-indigo-500 hover:bg-indigo-400 hover:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none",
            disabled: "border border-gray-400 text-gray-400 cursor-not-allowed",
          },
  }

return (
  <button className={clsx(baseClasses, sizeClasses[size], variantClasses[variant][type])} disabled={type === "disabled"}>
    {arrowLeft && <span>{arrowLeft}</span>}
  <span>{text}</span>
  {arrowRight && <span>{arrowRight}</span>}
  </button>
)

}