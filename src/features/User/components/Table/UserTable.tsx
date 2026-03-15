import classNames from "classnames/bind";
import styles from "./UserTable.module.scss";

import type { User, UserTableProps } from "../../types/user.interface";
import Table, { type TableColumn } from "@/components/Common/Table";
import Button from "@/components/Common/Button";

const cx = classNames.bind(styles);


const UserTable = ({ data, onEdit }: UserTableProps) => {

  // 1. Khai báo cấu hình các cột
  const columns: TableColumn<User>[] = [
    { header: "ID", key: "id" },
    { header: "Full Name", key: "fullName" },
    { header: "Username", key: "username" },
    { header: "Email", key: "email" },
    {
      header: "Roles",
      key: "roles",
      render: (user: User) => (
        <>{user.roles?.map((role) => role.name).join(", ")}</>
      ),
    },
    {
      header: "THAO TÁC",
      key: "actions",
      render: (user: User) => (
        <div className={cx("table__actions")}>
          <Button
            size="sm"
            variant="outline"
            color="secondary"
            onClick={() => onEdit && onEdit(user)}
          >
            Sửa
          </Button>
          <Button
            size="sm"
            variant="outline"
            color="destructive"
            onClick={() => console.log("Delete")}
          >
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  return <Table columns={columns} data={data} className={cx("table")} />;
};

export default UserTable;
