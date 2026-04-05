import classNames from "classnames/bind";
import styles from "./InventoryPage.module.scss";

const cx = classNames.bind(styles);

const InventoryPage = () => {
    return (
        <div className={cx("wrapper")}>
            <h1>Inventory Page</h1>
        </div>
    );
};

export default InventoryPage;