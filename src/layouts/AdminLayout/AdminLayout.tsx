import classNames from "classnames/bind";
import styles from "./AdminLayout.module.scss";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const cx = classNames.bind(styles);

const AdminLayout = () => {
  return (
    <>
      <div className={cx("wrapper")}>
        <Sidebar className={cx("sidebar")} />
        <div className={cx("container")}>
          <Header className={cx("header")} />
          <main className={cx("content")}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
