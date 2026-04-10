export interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  lockScroll?: boolean;
  className?: string;
  overlayClassName?: string;
}
