import type { ToastType } from "@/components/Common/Toast";
import { createContext, useContext } from "react";

interface ToastContextProps {
  showToast: (message: string, type?: ToastType) => void;
}

export const ToastContext = createContext<ToastContextProps | undefined>(
  undefined,
);
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

