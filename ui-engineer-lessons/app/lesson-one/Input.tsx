

import clsx from "clsx";
import { ChangeEvent, ReactNode } from "react";


//define variants
type InputSize = "small" | "medium";
type InputType = "default" | "card" | "email" | "website" | "phone" | "sale"
type InputStatus = "default" | "active" | "error" | "disabled" | "placeholder"

//define props
type InputProps = {
    size?: InputSize;
    type?: InputType;
    status?: InputStatus;
    leftIcon?: ReactNode
    rightIcon?: ReactNode;
    secondRightIcon?: ReactNode;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLImageElement>) => void;
    label?: string;
    showLabel?: boolean;
    hint?: string;
    showHint?: boolean;
    placeholder?: string;
    required?: boolean;
    value?: string;
}

//define component

export function Input ({
size="medium", label, type="default", status = "default", rightIcon, secondRightIcon, leftIcon, showHint = true, showLabel = true, placeholder, required=false, onChange, className, value, hint
}: InputProps){
    const wrapperClasses = ""

    const sizeClasses = {
        small: "py-2 px-2 text-sm",
        medium:"px-4 py-4 text-base"
    }

    const statusClasses = {
        default: "border focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
        error: "border border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200",
        active: "border border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ",
        placeholder: "border border-gray-400 text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
        disabled: "border border-gray-300 cursor-not-allowed bg-gray-200"
    }

    const typeClasses = {
        default: "",
        email: "",
        website: "pl-14",
        sale: "pl-12",
        card: "pr-16",
        phone: "pr-12"
    }

    const inputClasses = clsx("w-full rounded-md transition-all outline-none", sizeClasses[size], typeClasses[type], statusClasses[status], leftIcon && ("pl-10"), rightIcon || secondRightIcon && ("pr-10"));

    return (
        <div className="flex flex-col">
            {showLabel && label && (
                <label className="font-medium text-gray-700">{label}{required && "*"}</label>
            )}

            <div className="relative flex items-center">
                {leftIcon && (<span className="absolute left-3">{leftIcon}</span>)}
                <input value={value} className={inputClasses} placeholder={placeholder}  />
                {rightIcon && (<span className="absolute right-3">{rightIcon}</span>)}
                {secondRightIcon && (<span className="absolute right-9">{secondRightIcon}</span>)}
            </div>

            {showHint && hint && (
                <p className="text-gray-500 text-sm">{hint}</p>
            )}
        </div>
    )
}