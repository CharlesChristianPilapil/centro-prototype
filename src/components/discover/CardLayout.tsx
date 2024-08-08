import { ReactNode } from 'react';

export const CardLayout: React.FC<{
    className?: string;
    children?: ReactNode;
    title?: string;
    headerClassName?: string;
}> = ({ children, className, title, headerClassName }) => {
    return (
        <div>
            {title && (
                <p
                    className={`h-[30px] w-[100%] rounded-t-[8px] px-[10px] flex items-center text-white ${headerClassName}`}
                >
                    {title}
                </p>
            )}
            <div
                className={`border border-[#ccc] rounded-b-[8px] ${className}`}
            >
                {children}
            </div>
        </div>
    );
};
