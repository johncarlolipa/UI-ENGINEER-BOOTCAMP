
import clsx from "clsx";
import { ReactNode, ChangeEvent } from "react";

//define the variants
type InputSize = "small" | "medium"
type InputState = "default" | "error" | "active" | "placeholder" | "disabled"
type InputType = "default" | "email" | "card" | "website" | "phone" | "sale"

//define the props
type InputProps = {
    size?: InputSize;
    state?: InputState;
    type?: InputType;
    label?: string;
    showLabel?: boolean;
    required?: boolean;
    hint: string;
    showHint?: boolean;
    className?: string;
    value?: string;
    placeholder?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    secondRightIcon?: ReactNode;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
    size = "medium", state = "default", type = "default", label, showLabel = true, required = false, hint, showHint = true, value, placeholder, leftIcon, rightIcon, secondRightIcon, className, onChange
}: InputProps) {
    const wrapperClasses = "flex flex-col gap-1"
    const sizeClasses = {
        small: "py-2 px-2 text-sm",
        medium: "py-4 px-4 text-md"
    }
    const stateClasses = {
        default: "border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
        error: "border border-red-500 text-red-600 focus:ring-red-200",
        active: "border border-blue-500 ring-2 ring-blue-200",
        placeholder: "border border-gray-300 text-gray-400",
        disabled: "border border-gray-300 bg-gray-100 cursor-not-allowed"

    }
    const typeClasses = {
        default: "",
        email: "",
        phone: "pr-12",
        website: "pl-14",
        card: "pr-16",
        sale: "pr-12"
    }

    const inputClasses = clsx("w-full rounded-md transition-all outline-none", sizeClasses[size], typeClasses[type], stateClasses[state], leftIcon && "pl-10", (rightIcon || secondRightIcon) && "pr-10")


    return (
        <div className={clsx(wrapperClasses, className)}>
            {showLabel && label && (
                <label className="font-medium text-gray-700">{label}{required && "*"}</label>
            )}

            <div className="relative flex items-center">
                {leftIcon && (<span className="absolute left-3">{leftIcon}</span>)}
                <input value={value} onChange={onChange} className={inputClasses} placeholder={placeholder} />
                {rightIcon && (<span className="absolute right-3">{rightIcon}</span>)}
                {secondRightIcon && (<span className="absolute right-9">{secondRightIcon}</span>)}
            </div>

            {showHint && hint && (
                <p className="text-gray-500 text-sm">{hint}</p>
            )}
        </div>
    )

}

