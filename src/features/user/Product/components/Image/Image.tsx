import classNames from "classnames/bind";
import styles from "./Image.module.scss";

const cx = classNames.bind(styles);

const Image = () => {
    return (
        <div className={cx("image")}>
            <div className={cx("image__list")}>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className={cx("image__main")}>
                <img src="" alt="" />
            </div>

        </div>
    );
};

export default Image;