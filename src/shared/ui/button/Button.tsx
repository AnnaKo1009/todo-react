import React from 'react';
import type { ButtonProps } from './types';
import styles from './Button.module.css';

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  className = ''
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${className}`.trim()}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
