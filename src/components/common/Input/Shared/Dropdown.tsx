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
    // Đóng khi click bên ngoài (Nếu bạn không dùng stopPropagation ở cha)
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
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
