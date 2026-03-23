import classNames from "classnames/bind";
import styles from "./UserLayout.module.scss";
import { Outlet } from "react-router-dom";
import HeaderLayoutUser from "./HeaderLayoutUser";
import FooterLayoutUser from "./FooterLayoutUser";

const cx = classNames.bind(styles);

const UserLayout = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <HeaderLayoutUser />
            </div>
            <div className={cx("container")}>
                <Outlet />
            </div>
            <div className={cx("footer")}>
                <FooterLayoutUser />
            </div>
        </div>
    );
};

export default UserLayout;