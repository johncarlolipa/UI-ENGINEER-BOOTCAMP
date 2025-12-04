import clsx from 'clsx';
import { ReactNode } from "react";

type CardVariant = "default" | "shadow" | "outlined" | "flat";
type CardSize = "small" | "medium" | "large";

type CardProps = {
    imageSrc?: string;
    imageAlt?: string;
    title: string;
    subtitle: string;
    description?: string;
    footer: ReactNode;
    tags?: string[];
    size?: CardSize;
    variant?: CardVariant;
    className?: string;
}

export function Card({
    imageSrc, imageAlt, title, subtitle, description, footer, tags = [], size = "medium", variant = "default", className,
}: CardProps) {

    //defining classes
    const baseClasses =
        "rounded-2xl overflow-hidden transition-all duration-300 bg-white";

    const sizeClasses = {
        small: "max-w-xs p-3 space-y-2",
        medium: "max-w-sm p-4 space-y-3",
        large: "max-w-md p-6 space-y-4",
    };

    const variantClasses = {
        default: "border border-gray-200 dark:border-gray-800",
        outlined: "border-2 border-gray-300 dark:border-gray-700",
        shadow: "shadow-md hover:shadow-lg",
        flat: "border border-transparent shadow-none",
    };


    return (
        <article className={clsx(baseClasses, sizeClasses[size], variantClasses[variant], className)}>
            
            {imageSrc && (
                <img src={imageSrc} alt={imageAlt} className='w-full h-40 sm:h-48 object-cover rounded-xl' loading="lazy" />
            )}

            <header>
                <h3 className='text-lg font-semibold text-gray-900'>{title}</h3>
                {subtitle && (<p className='text-sm text-gray-500'>{subtitle}</p>)}
            </header>

            {description && (
                <p className='text-sm text-gray-700'>{description}</p>
            )}

            {tags.length > 0 && (
                <div>
                    {tags.map((tag) => (
                        <span key={tag} className='px-2 py-1 text-xs bg-gray-100 rounded-full'>{tag}</span>
                    ))}
                </div>
            )}

            {footer && <div className='pt-2'>{footer}</div>}
        </article>
    )
}
