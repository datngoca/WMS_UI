import classNames from "classnames/bind";
import styles from "./WarehousePage.module.scss";
import Filter from "../components/Filter";
import WarehouseTable from "../components/TableWarehouse";
import Button from "@/components/Common/Button";

import { useWarehouse } from "../hooks/useWarehouse";
import { useCallback, useState } from "react";
import type {
  ModalWarehouseAction,
  Warehouse,
} from "../types/warehouse.interface";
import ModalWarehouse from "../components/ModalWarehouse";

const cx = classNames.bind(styles);

const WarehousePage = () => {
  const { data: warehouses, isLoading, isError } = useWarehouse();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [action, setAction] = useState<ModalWarehouseAction>();

  const handleAdd = () => {
    setAction({ type: "add" });
    setIsOpenModal(true);
  };

  const handleEdit = (warehouse: Warehouse) => {
    setAction({ type: "edit", warehouse });
    setIsOpenModal(true);
  };

  const handleDelete = (warehouse: Warehouse) => {
    setAction({ type: "delete", warehouse });
    setIsOpenModal(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);
    setAction(undefined);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading warehouses.</div>;
  }
  return (
    <div className={cx("warehouse")}>
      <h1 className={cx("warehouse__title")}>Warehouses</h1>

      {/* Phần này sẽ chứa các bộ lọc để lọc danh sách kho hàng */}
      <div className={cx("warehouse__features")}>
        <div className={cx("warehouse__filter")}>
          <Filter />
        </div>
        <Button
          size="md"
          className={cx("warehouse__button")}
          onClick={handleAdd}
        >
          Add new Warehouse
        </Button>
      </div>

      <div className={cx("warehouse__table")}>
        <WarehouseTable
          data={warehouses || []}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
      <ModalWarehouse
        isOpen={isOpenModal}
        action={action}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default WarehousePage;
