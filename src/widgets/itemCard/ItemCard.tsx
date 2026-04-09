import React from 'react';
import type { ItemCardProps } from './types';
import styles from './ItemCard.module.css';
import { Icon } from '../../shared/ui/icon';
import { Button } from '../../shared/ui/button';

export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onEdit,
  onCopy,
  onDelete,
  className = ''
}) => {
  return (
    <div className={`${styles.card} ${className}`.trim()}>
      <span className={`${styles.title} ${className}`.trim()}>{item.name}</span>
      <div className={styles.actions}>
        <Button variant='icon' onClick={() => onEdit?.(item.id)} className={styles.iconButton}>
            <Icon name='edit' /> 
        </Button>
        <Button variant='icon' onClick={() => onCopy?.(item.id)} className={styles.iconButton}>
            <Icon name='copy' />
        </Button>
        <Button variant='icon' onClick={() => onDelete?.(item.id)} className={styles.iconButton}>
            <Icon name='del' />
        </Button>
      </div>
    </div>
  );
};
