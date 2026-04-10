import classNames from "classnames/bind";
import styles from "./DashboardPage.module.scss";

import Card from "../components/Card";
import imageUser from "@/assets/img/stat-user.png";
import imageOrder from "@/assets/img/stat-order.png";
import imageSale from "@/assets/img/stat-sale.png";
import imagePending from "@/assets/img/stat-pending.png";

const cx = classNames.bind(styles);
const DashboardPage = () => {
  return (
    <div className={cx("dashboard-page")}>
      <h1 className={cx("title")}>DashBoard</h1>

      <div className={cx("cards")}>
        <Card
          title="Total Users"
          value="$25,000"
          image={imageUser}
          subtitle="8.5% Up from yesterday"
        />
        <Card
          title="Total Orders"
          value="150"
          image={imageOrder}
          subtitle="5.2% Up from yesterday"
        />
        <Card
          title="Total Sales"
          value="$25,000"
          image={imageSale}
          subtitle="12.3% Up from yesterday"
        />
        <Card
          title="Total Pending"
          value="20"
          image={imagePending}
          subtitle="3.1% Up from yesterday"
        />
      </div>
    </div>
  );
};
export default DashboardPage;
