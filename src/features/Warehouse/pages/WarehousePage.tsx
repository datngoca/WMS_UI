import classNames from "classnames/bind";
import styles from "./WarehousePage.module.scss";
import Filter from "../components/Filter";
import WarehouseTable from "../components/Table";

import { useWarehouse } from "../hooks/useWarehouse";

const cx = classNames.bind(styles);

const WarehousePage = () => {
  const { data: warehouses, isLoading, isError } = useWarehouse();

  if(isLoading) {
    return <div>Loading...</div>;
  }
  if(isError) {
    return <div>Error loading warehouses.</div>;
  }
  return (
    <div className={cx("warehouse")}>
      <h1 className={cx("warehouse__title")}>Warehouses</h1>

      {/* Phần này sẽ chứa các bộ lọc để lọc danh sách kho hàng */}
      <div className={cx("warehouse__filter")}>
        <Filter />
      </div>

      <div className={cx("warehouse__table")}>
        <WarehouseTable data={warehouses || []} />
      </div>
    </div>
  );
};

export default WarehousePage;
