import classNames from "classnames/bind";
import styles from "./RolePage.module.scss";
import Filter from "../components/Filter";
import TableRole from "../components/Table";
import { Skeleton } from "antd";

import { useRoles } from "../hooks/useRoles";
import Button from "@/components/Common/Button";
import type { ModalRoleAction, Role } from "../types/role.interface";
import ModalRole from "../components/ModalRole";
import { useState } from "react";
const cx = classNames.bind(styles);

const RolePage = () => {
  const { data: roles, isLoading, isError } = useRoles();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [modalAction, setModalAction] = useState<ModalRoleAction | null>(null);

  const handleEdit = (role: Role) => {
    setModalAction({ type: "edit", role });
    setIsOpenModal(true);
  };

  const handleAdd = () => {
    setModalAction({ type: "add" });
    setIsOpenModal(true);
  };

  const handleDelete = (role: Role) => {
    setModalAction({ type: "delete", role });
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setModalAction(null);
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
        <Button size="md" className={cx("role__button")} onClick={handleAdd}>
          Add new Role
        </Button>
      </div>

      <div className={cx("role__table")}>
        <TableRole
          onDelete={handleDelete}
          onEdit={handleEdit}
          data={roles ?? []}
        />
      </div>
      <ModalRole
        action={modalAction}
        isOpen={isOpenModal}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default RolePage;
