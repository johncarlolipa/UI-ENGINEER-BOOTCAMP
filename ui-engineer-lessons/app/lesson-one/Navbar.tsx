// "use client"

// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import clsx from "clsx";
// import { Button } from "./Button";
// import { useRouter } from "next/navigation";

// // define the variants
// type variantClasses = "dark" | "light";
// type sizeClasses = "small" | "medium" | "large"

// // define the props
// type NavbarProps = {
//     title?: string;
//     links?: string[];
//     size?: sizeClasses;
//     variant?: variantClasses;
//     className?: string;
//     buttonLabel?: string;
// }

// //create component
// export function Navbar({
//     // destructuring props
//     title, links = [], size = "medium", variant = "light", className, buttonLabel
// }: NavbarProps) {

//     const [open, setOpen] = useState(false);
//     const router = useRouter();

//     const baseClasses = "w-full flex items-center justify-between transition-all duration-300"

//     const sizeClasses = {
//         small: "p-2 text-sm",
//         medium: "p-4 text-base",
//         large: "p-6 text-lg"
//     }

//     const variantClasses = {
//         light: "bg-white text-gray-900 shadow-md",
//         dark: "bg-gray-900 text-white shadow-md"
//     }



//     return (
//         <nav className={clsx(baseClasses, sizeClasses[size], variantClasses[variant], className)}>
//             <div className="font-bold">{title}</div>

//             <ul className="hidden md:flex gap-6">
//                 {links.map((link) => (
//                     <li key={link} className="cursor-pointer hover:opacity-80 ">{link}</li>
//                 ))}
//             </ul>

//             {buttonLabel && (
//                 <Button text={buttonLabel} type="primary" variant="outline" size="medium" onClick={() => router.push("/")} className="hidden md:flex" />
//             )}


//             <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle Menu">{open ? <X size={24} /> : <Menu size={24} />}</button>

//             {open && (
//                 <ul className={clsx("absolute top-38 right-4 w-48 p-4 rounded-xl shadow-lg flex flex-col gap-4 md:hidden", variant === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-90")}>
//                     {links.map((link) => (
//                         <li key={link} className="cursor-pointer hover:opacity-80 ">{link}</li>
//                     ))}

//                     {buttonLabel && (
//                         <li>
//                             <Button text={buttonLabel} type="primary" variant="outline" size="medium" onClick={() => router.push("/")} className="w-full justify-center" />
//                         </li>
//                     )}
//                 </ul>
//             )}

//         </nav>
//     )
// }

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
    buttonLabel?: string;
    variant?: variantClasses;
    size?: sizeClasses;
    className?: string;
}

export function Navbar({
    title, links = [], buttonLabel, size = "medium", variant = "light", className
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

            {buttonLabel && (
                <Button text={buttonLabel} onClick={() => router.push("/")} className="hidden md:flex" />
            )}

            <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle Menu">{open ? <X /> : <Menu />}</button>

            {open && (
                <ul className={clsx("absolute top-40 w-48 p-4 right-4 shadow-lg rounded-xl flex flex-col gap-4", variant === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900")}>
                    {links.map((link) => (
                        <li key={link} className="cursor-pointer hover:opacity-80">{link}</li>
                    ))}
                    {buttonLabel && (
                        <li>
                            <Button text={buttonLabel} onClick={() => router.push("/")} className="justify-center w-full" />
                        </li>
                    )}

                </ul>

            )}
        </nav>
    )
}