import classNames from "classnames/bind";
import styles from "../Input.module.scss";

const cx = classNames.bind(styles);

interface DropdownProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Dropdown = ({ isOpen, onClose, children }: DropdownProps) => {
    if (!isOpen) return null;
    return (
        <div className={cx("dropdown")} onClick={(e) => e.stopPropagation()}>
            {/* Có thể thêm SearchBar ở đây nếu dùng chung cho cả Select và Tree */}
            <div className={cx("dropdown__content")}>
                {children}
            </div>
        </div>
    )
}
export default Dropdown;