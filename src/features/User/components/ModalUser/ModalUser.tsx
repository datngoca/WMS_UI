import classNames from "classnames/bind";
import styles from "./ModalUser.module.scss";
import Modal from "@/components/Common/Modal/Modal";
import type { ModalUserProps } from "../../types/user.interface";
import Input from "@/components/Common/Input/Input";
import Button from "@/components/Common/Button";
import { FaUser } from "react-icons/fa";

const cx = classNames.bind(styles);

const ModalUser = ({ action, isOpen, onClose }: ModalUserProps) => {
  const handleSubmit = () => {
    if (action?.type === "add") {
      console.log("Thêm mới user");
    }
  };

  return (
    <div className={cx("modal-user")}>
      <Modal
        title={action?.type === "add" ? "Create User" : "Edit User"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className={cx("modal-user__content")}>
          <Input
            icon={<FaUser />}
            label="Username"
            type="text"
            placeholder="Username"
          />
          <Input label="Username" type="text" placeholder="Username" />

          <Input
            icon={<FaUser />}
            label="Username"
            type="text"
            placeholder="Username"
            errorMessage="Username is required"
          />

          <Input
            label="Username"
            type="text"
            placeholder="Username"
            errorMessage="Username is required"
            className={cx("modal-user__content--full-width")}
          />
        </div>

        <div className={cx("modal-user__actions")}>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button color="destructive" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalUser;
