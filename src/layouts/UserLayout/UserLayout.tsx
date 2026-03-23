import classNames from "classnames/bind";
import styles from "./UserLayout.module.scss";
import { Outlet } from "react-router-dom";

const cx = classNames.bind(styles);

const UserLayout = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <Outlet />
            </div>
        </div>
    );
};

export default UserLayout;