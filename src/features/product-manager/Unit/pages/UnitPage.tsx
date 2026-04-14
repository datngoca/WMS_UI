import classNames from "classnames/bind";
import styles from "./UnitPage.module.scss";

const cx = classNames.bind(styles);

const UnitPage = () => {
    return (
        <div className={cx("unit-page")}>
            <h1>Unit Page</h1>
        </div>
    );
};

export default UnitPage;