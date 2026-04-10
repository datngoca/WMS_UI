import classNames from "classnames/bind";
import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

const Modal = () => {
    return (
        <div className={cx("modal")}>
            <h1>Modal</h1>
        </div>
    );
}
export default Modal;