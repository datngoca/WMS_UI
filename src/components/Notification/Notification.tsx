import classNames from "classnames/bind";
import styles from "./Notification.module.scss";
import { FaBell } from "react-icons/fa";
const cx = classNames.bind(styles);

interface NotificationProps {
    className?: string;
    title: string;
    description: string;
}

const Notification = ({ className, title, description }: NotificationProps) => {
    return (
        <div className={cx("notification", className)}>
            <div className={cx("notification__icon")}>
                <FaBell />
            </div>
            < div className={cx("notification__content")} >
                <span className={cx("notification__content__title")}> {title} </span>
                < span className={cx("notification__content__description")} > {description} </span>
            </div>
        </div>
    );
};

export default Notification;