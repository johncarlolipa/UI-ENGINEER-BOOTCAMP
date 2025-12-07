import clsx from "clsx";
import { ReactNode, ChangeEvent } from "react";

//define variants
type InputSize = "small" | "medium"
type InputState = "default" | "active" | "placeholder" | "error" | "disabled"
type InputType = "default" | "email" | "phone" | "sale" | "website" | "card"

//define props
type InputProps = {
    type?: InputType;
    size?: InputSize;
    state?: InputState;
    label?: string;
    required?: boolean;
    hint?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    rightSecondIcon?: ReactNode;
    value?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    showLabel?: boolean;
    showHint?: boolean;
    className?: string;
}

//defining the component
export function Input({
    type = "default", state = "default", size = "medium", label, required = false, hint, leftIcon, rightIcon, rightSecondIcon, value, placeholder, onChange, showLabel = true, showHint = true, className
}: InputProps) {
    const wrapperClasses = "flex flex-col gap-1"
    const sizeClasses = {
        small: "text-sm py-2 px-2",
        medium: "text-base py-4 px-4"
    }
    const stateClasses = {
        default: "border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
        active: "border border-blue-500 ring-2 ring-blue-200",
        placeholder: "border border-gray-300 text-gray-400",
        error: "border border-red-500 text-red-600 focus:ring-red-200",
        disabled: "border border-gray-300 bg-gray-100 cursor-not-allowed"
    }
    const typeClasses = {
        default:"",
        email:"",
        phone:"pl-12",
        sale:"pr-12",
        website: "pl-14",
        card: "pr-16"
    }

    const inputClasses = clsx(
        "w-full rounded-md transition-all outline-none",
        sizeClasses[size],
        stateClasses[state],
        typeClasses[type],
        leftIcon && "pl-10",
        (rightIcon || rightSecondIcon) && "pr-10"
    );

    return (
        <div className={clsx(wrapperClasses, className)}>
            {showLabel && label && (
                <label className="font-medium text-gray-700">
                    {label}{required && "*"}
                </label>
            )}

            <div className="relative flex items-center">
                {leftIcon && <span className="absolute left-3">{leftIcon}</span>}

                <input disabled={state === "disabled"} value={value} onChange={onChange} className={inputClasses} placeholder={placeholder || hint} />
                {rightIcon && <span className="absolute right-3">{rightIcon}</span>}
                {rightSecondIcon && <span className="absolute right-9">{rightSecondIcon}</span>}
            </div>

            {showHint && hint && (
                <p className="text-gray-500 text-sm">{hint}</p>
            )}
        </div>
    )

}