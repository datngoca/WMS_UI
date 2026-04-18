import classNames from "classnames/bind";
import styles from "../Input.module.scss";
import { FaXmark } from "react-icons/fa6";

const cx = classNames.bind(styles);

interface TagProps {
  tag: string;
  onRemove?: () => void;
  className?: string;
}

const Tag = ({ tag, onRemove, className }: TagProps) => {
  return (
    <div className={cx("tag", className)}>
      <span className={cx("tag__text")}>{tag}</span>
      {onRemove && <FaXmark onClick={onRemove} className={cx("tag__remove")} />}
    </div>
  );
};

export default Tag;
