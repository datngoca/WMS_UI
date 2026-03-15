import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import { useEffect } from "react";
import type { ModalProps } from "./modal.interface";

const cx = classNames.bind(styles);



const Modal = ({ isOpen, onClose, title, children, footer }: ModalProps) => {
  // Đóng modal khi nhấn Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <div className={cx("modal")} onClick={onClose}>
      <div
        className={cx("modal__content")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={cx("modal__header")}>
          <h3 className={cx("modal__header__title")}>{title}</h3>
          <button className={cx("modal__header__close")} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={cx("modal__body")}>{children}</div>
        {footer && <div className={cx("modal__footer")}>{footer}</div>}
      </div>
    </div>
  );
};
export default Modal;
