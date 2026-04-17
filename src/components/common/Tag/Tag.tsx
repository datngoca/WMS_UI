import classNames from "classnames/bind";
import styles from "./Tag.module.scss";

const cx = classNames.bind(styles);
interface TagProps {
  text: string;
  color?: string;
  icon?: React.ReactNode;
  onIconClick?: () => void;
}
const Tag = ({ text, color = "blue", icon, onIconClick }: TagProps) => {
  return (
    <>
      <div className={cx("tag")} style={{ border: `1px solid ${color}` }}>
        <span className={cx("tag__title")} style={{ color: color }}>
          {text}
        </span>
        {icon && (
          <span
            className={cx("tag__icon", {
              "tag__icon--clickable": !!onIconClick,
            })}
            onClick={onIconClick}
          >
            {icon}
          </span>
        )}
      </div>
    </>
  );
};
export default Tag;
