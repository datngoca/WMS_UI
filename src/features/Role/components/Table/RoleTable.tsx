// import classNames from "classnames/bind";
// import styles from "./RoleTable.module.scss";
import type { Role } from "../../types/role.interface";
import Table, { type TableColumn } from "@/components/Common/Table";

// const cx = classNames.bind(styles);

const RoleTable = ({ data }: { data: Role[] }) => {
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
      render: () => <button onClick={() => console.log("Edit")}>Sửa</button>,
    },
  ];

  return <Table<Role> columns={data.length > 0 ? columns : []} data={data} />;
};

export default RoleTable;
