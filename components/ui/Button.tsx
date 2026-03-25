import React from 'react';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'underline';
type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};

export function Button({ variant = 'solid', size = 'md', className = '', children, ...props }: ButtonProps) {
  const baseClasses = "content-stretch flex items-center justify-center overflow-clip relative shrink-0 cursor-pointer transition whitespace-nowrap";
  
  const sizeClasses = {
    sm: "gap-xs p-s rounded-m text-[14px] leading-[21px]",
    md: "gap-xs p-m rounded-m text-[16px] leading-[24px]",
    lg: "gap-xs p-l rounded-xl text-[18px] leading-[27px]",
  };

  const variantClasses = {
    solid: "bg-primary-full border border-primary-full text-inverse hover:opacity-90 font-medium",
    outline: "bg-neutral-100 border border-stroke-primary text-neutral-1000 hover:bg-white font-normal",
    ghost: "bg-transparent text-neutral-1000 hover:bg-neutral-100/50 font-normal",
    underline: "bg-transparent text-primary-full hover:opacity-80 font-normal underline"
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
