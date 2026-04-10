export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode | string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  closeOnBackdropClick?: boolean;
}

