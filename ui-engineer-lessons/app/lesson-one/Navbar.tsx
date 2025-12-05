"use client"

import clsx from "clsx";
import { useState } from "react";
import { Menu, X } from "lucide-react";


// define variants
type variantClasses = "light" | "dark"
type sizeClasses = "small" | "medium" | "large"

//define props
type NavbarProps = {
    title?: string;
    links?: string[];
    variant?: variantClasses;
    size?: sizeClasses;
    className?: string;
}

// create component
export function Navbar({
    title, links = [], variant = "light", size = "medium", className
}: NavbarProps) {
    const [open, setOpen] = useState(false);

    //base styling
    const baseClasses = "w-full flex items-center justify-between transition-all duration-300"

    const sizeClasses = {
        small: "p-2 text-sm",
        medium: "p-4 text-base",
        large: "p-6 text-lg",
    }

    const variantClasses = {
        light: "bg-white text-gray-900 shadow-md",
        dark: "bg-gray-900 text-white shadow-md"
    }

    return (
        <nav className={clsx(baseClasses, sizeClasses[size], variantClasses[variant], className)}>
            <div className="font-bold">{title}</div>

            <ul className="hidden md:flex gap-6">
                {links.map((link) => (
                    <li key={link} className="cursor-pointer hover:opacity-80">{link}</li>
                ))}
            </ul>

            <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle Menu">{open ? <X /> : <Menu size={28} />}</button>

            {open && (
                <ul className={clsx("absolute top-38 right-4 w-48 p-4 rounded-xl shadow-lg flex flex-col gap-4 md:hidden", variant === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900")}>
                    {links.map ((link => (
                        <li key={link} className="cursor-pointer hover:opacity-70">{link}</li>
                    )))}
                </ul>)}

        </nav>
    )
}