import classNames from "classnames/bind";
import styles from "./UserPage.module.scss";
import Filter from "../components/Filter";
import { useUsers } from "../hooks/useUsers";
import Button from "@/components/Common/Button";
import { useState } from "react";
import ModalUser from "../components/ModalUser";
import TableUser from "../components/Table/UserTable";
import type { User } from "../types/user.interface";

const cx = classNames.bind(styles);

const UserPage = () => {
  const { data: users } = useUsers();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [type, setType] = useState<"add" | "edit">("add");
  const [user, setUser] = useState<User>();


  const handleOpenEdit = (user: User) => {
    setType("edit");
    setUser(user);
    setIsOpenModal(true);
    console.log("Edit user", user);
  };

  return (
    <div className={cx("user")}>
      <h1 className={cx("user__title")}>Users</h1>

      {/* Phần này sẽ chứa các bộ lọc để lọc danh sách người dùng */}
      <div className={cx("user__features")}>
        <div className={cx("user__filter")}>
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
      <div className={cx("user__table")}>
        <TableUser onEdit={handleOpenEdit} isOpenModal={isOpenModal} data={users || []} />
      </div>
      <ModalUser action={{ type: type , user: user}} isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </div>
  );
};

export default UserPage;
