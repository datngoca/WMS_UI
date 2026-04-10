import classNames from "classnames/bind";
import styles from "./ModalCategory.module.scss";

const cx = classNames.bind(styles);

const ModalCategory = () => {
    return (
        <div className={cx("modal")}>
            <h1>Modal</h1>
        </div>
    );
}
export default ModalCategory;