import classNames from "classnames/bind";
import styles from "../Input.module.scss";
import { FaXmark } from "react-icons/fa6";

const cx = classNames.bind(styles);

interface TagProps {
    tag: string;
    onRemove?: (tag: string) => void;
}

const Tag = ({ tag, onRemove }: TagProps) => {
    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        onRemove?.(tag);
    }
    return (
        <div className={cx("tag")}>
            <span className={cx("tag__text")}>
                {tag}
            </span>
            {onRemove && (
                <FaXmark onClick={handleRemove} className={cx("tag__remove")} />
            )}
        </div>
    )
}

export default Tag