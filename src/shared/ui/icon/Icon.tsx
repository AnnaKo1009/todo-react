import React from 'react';
import type { IconProps } from './types';
import styles from './Icon.module.css';

export const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  onClick,
  size = 20,
}) => {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt={`${name} icon`}
      className={`${styles.icon} ${className}`.trim()}
      width={size}
      height={size}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    />
  );
};