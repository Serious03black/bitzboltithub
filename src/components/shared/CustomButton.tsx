
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CustomButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

const CustomButton = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  href,
}: CustomButtonProps) => {
  const buttonVariants = {
    primary: 'bg-gradient-to-r from-[#FF5803] via-[#FF6900] to-[#FDBA01] hover:from-[#FF6900] hover:to-[#FF5803] text-white font-bold shadow-[0_0_20px_rgba(255,88,3,0.35)]',
    secondary: 'bg-gradient-to-r from-[#0A1E2F] to-[#111D33] hover:from-[#111D33] hover:to-[#0A1E2F] text-white font-bold shadow-lg border border-[#FF5803]/30',
    outline: 'border-2 border-[#FF5803] hover:bg-[#FF5803]/10 text-[#FF5803] hover:text-[#FF7800]',
    text: 'text-[#FF5803] hover:text-[#FDBA01] hover:bg-[#FF5803]/10',
  };

  const buttonSizes = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2.5 px-5 text-base',
    lg: 'py-3 px-7 text-lg',
  };

  const buttonClasses = cn(
    'rounded-md inline-flex items-center justify-center transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-[#FF5803] focus:ring-opacity-50',
    buttonVariants[variant],
    buttonSizes[size],
    fullWidth && 'w-full',
    disabled && 'opacity-60 cursor-not-allowed',
    className
  );

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default CustomButton;
