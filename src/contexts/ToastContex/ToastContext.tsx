import classNames from "classnames/bind";
import styles from "./ToastContext.module.scss";
import Toast, {
  type ToastType,
  type ToastItem,
} from "@/components/Common/Toast";
import { useCallback, useEffect, useState } from "react";
import { ToastContext } from "@/hooks/ToastContext/useToast";

const cx = classNames.bind(styles);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
  }, []);

  // --- PHẦN QUAN TRỌNG: Lắng nghe lỗi từ Axios ---
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleGlobalToast = (event: any) => {
      const { message, type } = event.detail;
      showToast(message, type);
    };

    // Đăng ký sự kiện
    window.addEventListener("show-toast", handleGlobalToast);

    return () => {
      // Hủy đăng ký khi unmount để tránh rò rỉ bộ nhớ
      window.removeEventListener("show-toast", handleGlobalToast);
    };
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={cx("toast-container")}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
