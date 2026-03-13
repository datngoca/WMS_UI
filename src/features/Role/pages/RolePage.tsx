import classNames from "classnames/bind";
import styles from "./RolePage.module.scss";
import Filter from "../components/Filter";
import RoleTable from "../components/Table";
import { Skeleton } from 'antd';

import { useRoles } from "../hooks/useRoles";
const cx = classNames.bind(styles);

const RolePage = () => {
  const { data: roles, isLoading, isError } = useRoles();

  if(isLoading) {
    return <Skeleton />;
  }
  if(isError) {
    return <div>Error loading roles.</div>;
  }

  return (
    <div className={cx("role")}>
      <h1 className={cx("role__title")}>Roles</h1>

      {/* Phần này sẽ chứa các bộ lọc để lọc danh sách vai trò */}
      <div className={cx("role__filter")}>
        <Filter />
      </div>

      <div className={cx("role__table")}>
        <RoleTable data={roles || []} />
      </div>
    </div>
  );
};

export default RolePage;
