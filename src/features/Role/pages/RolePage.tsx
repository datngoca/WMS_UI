import classNames from "classnames/bind";
import styles from "./RolePage.module.scss";
import Filter from "../components/Filter";
import TableRole from "../components/Table";
import { Skeleton } from "antd";

import { useRoles } from "../hooks/useRoles";
import Button from "@/components/Common/Button";
import type { Role } from "../types/role.interface";
import ModalRole from "../components/ModalRole";
import { useState } from "react";
const cx = classNames.bind(styles);

const RolePage = () => {
  const { data: roles, isLoading, isError } = useRoles();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [type, setType] = useState<"add" | "edit">("add");
  const [role, setRole] = useState<Role>();

  const handleOpenEdit = (role: Role) => {
    setType("edit");
    setRole(role);
    setIsOpenModal(true);
  };

  if (isLoading) {
    return <Skeleton />;
  }
  if (isError) {
    return <div>Error loading roles.</div>;
  }

  return (
    <div className={cx("role")}>
      <h1 className={cx("role__title")}>Roles</h1>

      {/* Phần này sẽ chứa các bộ lọc để lọc danh sách vai trò */}
      <div className={cx("role__features")}>
        <div className={cx("role__filter")}>
          <Filter />
        </div>
        <Button
          size="md"
          className={cx("user__button")}
          onClick={() => setIsOpenModal(true)}
        >
          Add new User
        </Button>
      </div>

      <div className={cx("role__table")}>
        <TableRole
          onEdit={handleOpenEdit}
          isOpenModal={isOpenModal}
          data={roles || []}
        />
      </div>
      <ModalRole
        action={{ type: type, role: role }}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </div>
  );
};

export default RolePage;
