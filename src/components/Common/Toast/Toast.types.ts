export type ToastType = "success" | "error" | "info";

export interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

export interface ToastProps {
  message: string;
  type?: ToastType;
  onClose: () => void;
}
