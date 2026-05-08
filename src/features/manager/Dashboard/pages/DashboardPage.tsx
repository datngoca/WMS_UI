import classNames from "classnames/bind";
import styles from "./DashboardPage.module.scss";

const cx = classNames.bind(styles);

const OperatorDashBoardPage = () => {
    return (
        <div className={cx("wrapper")}>
            <h1>Operator DashBoard Page</h1>
        </div>
    );
};

export default OperatorDashBoardPage;