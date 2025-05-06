import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-primary hover:bg-primary/90 text-white dark:bg-primary-light dark:hover:bg-primary-light/90 dark:text-primary-dark",
    secondary: "bg-secondary hover:bg-secondary/90 text-white dark:bg-secondary-light dark:hover:bg-secondary-light/90 dark:text-secondary-dark",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/10 dark:border-primary-light dark:text-primary-light dark:hover:bg-primary-light/10",
    ghost: "bg-transparent text-primary hover:bg-primary/10 dark:text-primary-light dark:hover:bg-primary-light/10",
    danger: "bg-red-600 hover:bg-red-700 text-white dark:bg-red-500 dark:hover:bg-red-600"
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-2",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3"
  };
  
  const widthStyles = fullWidth ? "w-full" : "";
  const disabledStyles = disabled || isLoading ? "opacity-60 cursor-not-allowed" : "cursor-pointer";
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabledStyles} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;