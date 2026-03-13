import classNames from "classnames/bind";
import styles from "./WarehouseTable.module.scss";

import type { TableProps } from "antd";
import { Space, Table } from "antd";

import type { Warehouse } from "../../types/warehouse.interface";


const cx = classNames.bind(styles);

const WarehouseTable = ({ data }: { data: Warehouse[] }) => {
  const columns: TableProps<Warehouse>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Table<Warehouse>
      columns={columns}
      dataSource={data}
      className={cx("table")}
    />
  );
};

export default WarehouseTable;
