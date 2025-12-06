"use client"

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

//define variants
type sizeClasses = "small" | "medium" | "large";
type variantClasses = "dark" | "light"

//deine props
type NavbarProps = {
    title?: string;
    links?: string[];
    signInLabel?: string;
    signUpLabel?: string;
    variant?: variantClasses;
    size?: sizeClasses;
    className?: string;
}

export function Navbar({
    title, links = [], signInLabel, signUpLabel, size = "medium", variant = "light", className
}: NavbarProps) {
    const [open, setOpen] = useState(false)
    const router = useRouter();

    const baseClasses = "w-full flex items-center justify-between transition-all duration-300";

    const sizeClasses = {
        small: "p-2 text-sm",
        medium: "p-4 text-base",
        large: "p-6 text-lg"
    }

    const variantClasses = {
        dark: "bg-gray-900 text-white shadow-md",
        light: "bg-white text-gray-900 shadow-md"
    }

    return (
        <nav className={clsx(baseClasses, sizeClasses[size], variantClasses[variant], className)}>
            <div className="font-bold">{title}</div>

            <ul className="hidden md:flex gap-6">
                {links.map((link) => (
                    <li key={link} className="cursor-pointer hover:opacity-80">{link}</li>
                ))}
            </ul>


            <div className="md:flex gap-4">
                {signInLabel && (
                    <Button text={signInLabel} onClick={() => router.push("/")} className="hidden md:flex" variant="outline" />
                )}

                {signUpLabel && (
                    <Button text={signUpLabel} onClick={() => router.push("/")} className="hidden md:flex" variant="filled" />
                )}

            </div>


            <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle Menu">{open ? <X /> : <Menu />}</button>

            {open && (
                <ul className={clsx("absolute top-40 w-48 p-4 right-4 shadow-lg rounded-xl flex flex-col gap-4 md:hidden", variant === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900")}>
                    {links.map((link) => (
                        <li key={link} className="cursor-pointer hover:opacity-80">{link}</li>
                    ))}
                    <li className="flex flex-col gap-4">
                        {signInLabel && (
                            <Button text={signInLabel} variant="outline" className="justify-center" />
                        )}

                        {signUpLabel && (
                            <Button text={signUpLabel} className="justify-center" />
                        )}
                    </li>

                </ul>

            )}
        </nav>
    )
}