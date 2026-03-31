import classNames from "classnames/bind";
import styles from "./BreadCrumbs.module.scss"
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const cx = classNames.bind(styles);

const BreadCrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    return (
        <div className={cx("breadcrumbs-container")}>
            <nav className={cx("breadcrumbs")}>
                <Link to="/home" className={cx("breadcrumbs__link")}>Home</Link>
                {pathnames.map((pathname, index) => (
                    <Link to={`/${pathnames.slice(0, index + 1).join("/")}`} className={cx("breadcrumbs__link")}>
                        <FaAngleRight className={cx("breadcrumbs__link__icon")} />
                        {pathname}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    );
};

export default BreadCrumbs;