import classNames from "classnames/bind";
import styles from "./Toast.module.scss";
import { FaCircleCheck, FaCircleXmark, FaCircleInfo, FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";
import type { ToastProps } from "./Toast.types";

const cx = classNames.bind(styles);

const icons = {
  success: <FaCircleCheck />,
  error: <FaCircleXmark />,
  info: <FaCircleInfo />,
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    // 1. Sau 5s thì kích hoạt hiệu ứng biến mất
    const hideTimer = setTimeout(() => setIsRemoving(true), 5000);
    
    // 2. Sau 5.5s (thêm 0.5s animation) thì báo cho cha xóa mình khỏi mảng
    const removeTimer = setTimeout(onClose, 5500);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [onClose]);

  return (
    <div className={cx("toast", `toast--${type}`, { "toast--hiding": isRemoving })}>
      <div className={cx("toast__icon", `toast__icon--${type}`)}>
        {icons[type || "info"]}
      </div>

      <div className={cx("toast__info")}>
        <h4 className={cx("toast__type")}>{type}</h4>
        <p className={cx("toast__message")}>{message}</p>
      </div>

      <div className={cx("toast__close")} onClick={() => setIsRemoving(true)}>
        <FaXmark />
      </div>
      <div className={cx("toast__progress", `toast__progress--${type}`)}></div>
    </div>
  );
};

export default Toast;