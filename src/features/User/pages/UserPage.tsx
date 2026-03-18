import classNames from "classnames/bind";
import styles from "./UserPage.module.scss";
import Filter from "../components/Filter";
import { useUsers } from "../hooks/useUsers";
import Button from "@/components/Common/Button";
import { useState } from "react";
import ModalUser from "../components/ModalUser";
import TableUser from "../components/Table/UserTable";
import type { ModalAction, User } from "../types/user.interface";

const cx = classNames.bind(styles);

const UserPage = () => {
  const { data: users } = useUsers();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [action, setAction] = useState<ModalAction>({
    type: "add",
  });

  const handleEdit = (user: User) => {
    setAction({ type: "edit", user });
    setIsOpenModal(true);
  };

  const handleAdd = () => {
    setAction({ type: "add" });
    setIsOpenModal(true);
  };
  const handleDelete = (user: User) => {
    setAction({ type: "delete", user });
    setIsOpenModal(true);
  };

  return (
    <div className={cx("user")}>
      <h1 className={cx("user__title")}>Users</h1>

      {/* Phần này sẽ chứa các bộ lọc để lọc danh sách người dùng */}
      <div className={cx("user__features")}>
        <div className={cx("user__filter")}>
          <Filter />
        </div>
        <Button size="md" className={cx("user__button")} onClick={handleAdd}>
          Add new User
        </Button>
      </div>
      <div className={cx("user__table")}>
        <TableUser
          onEdit={handleEdit}
          onDelete={handleDelete}
          isOpenModal={isOpenModal}
          data={users || []}
        />
      </div>
      <ModalUser
        key={`${isOpenModal}-${action?.type ?? "closed"}-${action?.type !== "add" && action?.user ? action.user.id : "new"}`}
        action={action}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </div>
  );
};

export default UserPage;
