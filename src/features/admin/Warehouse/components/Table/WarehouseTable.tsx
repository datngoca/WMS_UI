import classNames from "classnames/bind";
import styles from "./WarehouseTable.module.scss";

import type {
  Warehouse,
  WarehouseTableProps,
} from "../../types/warehouse.interface";
import Table, { type TableColumn } from "@/components/Common/Table";
import Button from "@/components/Common/Button";

const cx = classNames.bind(styles);

const WarehouseTable = ({ data, onEdit, onDelete }: WarehouseTableProps) => {
  const coloumns: TableColumn<Warehouse>[] = [
    {
      header: "Name",
      key: "name",
    },
    {
      header: "Address",
      key: "address",
    },
    {
      header: "Capacity",
      key: "capacity",
    },
    {
      header: "Action",
      key: "action",
      render: (warehouse: Warehouse) => (
        <div className={cx("table__actions")}>
          <Button
            size="sm"
            variant="outline"
            color="secondary"
            onClick={() => onEdit && onEdit(warehouse)}
          >
            Sửa
          </Button>
          <Button
            size="sm"
            variant="outline"
            color="destructive"
            onClick={() => onDelete && onDelete(warehouse)}
          >
            Xóa
          </Button>
        </div>
      ),
    },
  ];
  return (
    <Table<Warehouse> columns={coloumns} data={data.length > 0 ? data : []} />
  );
};

export default WarehouseTable;
