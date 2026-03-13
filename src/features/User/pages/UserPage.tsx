import classNames from "classnames/bind";
import styles from "./UserPage.module.scss";
import Filter from "../components/Filter";
import Table, { type TableColumn } from "@/components/Common/Table";
import type { User } from "../types/user.interface";
import { useUsers } from "../hooks/useUsers";

const cx = classNames.bind(styles);

const UserPage = () => {
  const { data: users } = useUsers();
  // 1. Khai báo cấu hình các cột
  const columns: TableColumn<User>[] = [
    { header: "ID", key: "id" },
    { header: "Full Name", key: "fullName" },
    { header: "Username", key: "username" },
    { header: "Email", key: "email" },
    {
      header: "Roles",
      key: "roles",
      render: (user: User) => <>{user.roles?.map((role) => role.name).join(", ")}</>,
    },
    {
      header: "THAO TÁC",
      key: "actions",
      render: () => <button onClick={() => console.log("Edit")}>Sửa</button>,
    },
  ];
  return (
    <div className={cx("user")}>
      <h1 className={cx("user__title")}>Users</h1>

      {/* Phần này sẽ chứa các bộ lọc để lọc danh sách người dùng */}
      <div className={cx("user__filter")}>
        <Filter />
      </div>

      <div className={cx("user__table")}>
        <Table columns={columns} data={users || []} />
      </div>
    </div>
  );
};

export default UserPage;
