import classNames from "classnames/bind";
import styles from "../Input.module.scss";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles);

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dropdown = ({ isOpen, onClose, children }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    // Đóng khi nhấn Esc
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div
      ref={dropdownRef}
      className={cx("dropdown")}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Có thể thêm SearchBar ở đây nếu dùng chung cho cả Select và Tree */}
      <div className={cx("dropdown__content")}>{children}</div>
    </div>
  );
};
export default Dropdown;
