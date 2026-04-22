import React , {useEffect} from 'react';
import type { ModalProps } from './types';
import styles from './Modal.module.css';
import { Button } from '../button';
import { Icon } from '../icon';
import { createPortal } from 'react-dom';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  lockScroll = true,
  className = '',
  overlayClassName = '',
}) => {
  // Блокировка скролла - этот эффект будет срабатывать при изменении isOpen
  useEffect(() => {
    if (!isOpen || !lockScroll) return;
    
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, lockScroll]);  // ← isOpen в зависимостях!

  // Обработчик Escape
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeOnEscape, onClose]);

  // Клик по оверлею
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className={`${styles.overlay} ${overlayClassName}`.trim()} onClick={handleOverlayClick}>
      <div className={`${styles.modal} ${className}`.trim()}>
        <Button variant='icon' onClick={onClose} className={styles.closeButton}>
          <Icon name='close' />
        </Button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>, document.body
  );
};
