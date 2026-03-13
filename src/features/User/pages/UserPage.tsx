import classNames from "classnames/bind";
import styles from "./UserPage.module.scss";
import Filter from "../components/Filter";
import Table, { type TableColumn } from "@/components/Common/Table";
import type { Role } from "@/features/Role/types/role.interface";
import { useRoles } from "@/features/Role/hooks/useRoles";

const cx = classNames.bind(styles);

const UserPage = () => {
  const { data: roles } = useRoles();
  // 1. Khai báo cấu hình các cột
  const columns: TableColumn<Role>[] = [
    { header: "ID", key: "id" },
    { header: "TÊN VAI TRÒ", key: "name" },
    { header: "MÔ TẢ", key: "description" },
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
        <Table columns={columns} data={roles || []} />
      </div>
    </div>
  );
};

export default UserPage;
