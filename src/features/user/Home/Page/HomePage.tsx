import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";

const cx = classNames.bind(styles);

const HomePage = () => {
    return (
        <div className={cx("page-user")}>
            <div className={cx("page-user__banner")}>
                <div className={cx("page-user__banner__content")}>
                    <h1 className={cx("page-user__banner__content__title")}>Welcome to our store</h1>
                    <p className={cx("page-user__banner__content__description")}>Discover our latest collections and find your perfect style</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;