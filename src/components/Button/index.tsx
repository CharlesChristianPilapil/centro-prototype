'use client';

import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonInterface {
    children?: ReactNode;
    label?: string;
    variant?: 'default' | 'danger' | 'warning' | 'transparent';
    isRounded?: boolean;
    className?: string;
    onClick?: () => void;
}

const Button = ({ 
    children, 
    variant, 
    isRounded, 
    label,
    className,
    onClick
}: ButtonInterface) => {
    return (
        <button className={clsx('transition-all duration-300',
            { 'rounded-full': isRounded, 'rounded-[8px]': !isRounded },
            { 'bg-transparent': variant === 'transparent' },
            className
        )}
        onClick={onClick}
        >
            {!children && label}
            {children}
        </button>
    );
};

export default Button;