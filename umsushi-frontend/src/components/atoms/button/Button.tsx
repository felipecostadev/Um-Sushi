import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
}

const getVariantClass = (variant: ButtonProps['variant']) => {
    switch (variant) {
        case 'primary':
            return 'bg-[#014c5b] text-white hover:bg-[#013b47]';
        case 'secondary':
            return 'bg-gray-200 text-gray-800 hover:bg-gray-300';
        case 'outline':
            return 'bg-white border border-[#014c5b] text-[#014c5b] hover:bg-blue-50';
        default:
            return '';
    }
};

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    return (
        <button
            className={`px-4 py-3 rounded transition min-h-[48px] cursor-pointer font-bold ${getVariantClass(variant)} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};