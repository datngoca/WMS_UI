import classNames from "classnames/bind";
import styles from "./RoleTable.module.scss";
import type { Role, RoleTableProps } from "../../types/role.interface";
import Table, { type TableColumn } from "@/components/Common/Table";
import Button from "@/components/Common/Button";

const cx = classNames.bind(styles);

const RoleTable = ({data, onEdit}: RoleTableProps) => {
  const columns: TableColumn<Role>[] = [
    {
      header: "Name",
      key: "name",
    },
    {
      header: "Description",
      key: "description",
    },

    {
      header: "Action",
      key: "action",
            render: (role: Role) => (
        <div className={cx("table__actions")}>
          <Button
            size="sm"
            variant="outline"
            color="secondary"
            onClick={() => onEdit && onEdit(role)}
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

  return <Table<Role> columns={data.length > 0 ? columns : []} data={data} />;
};

export default RoleTable;
