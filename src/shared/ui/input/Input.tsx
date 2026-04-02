import React from 'react';
import type { InputProps } from './types';
import styles from './Input.module.css';

export const Input: React.FC<InputProps> = ({
  value = '',
  onChange,
  placeholder = '',
  className = ''
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.input} ${className}`.trim()}
    />
  );
};
