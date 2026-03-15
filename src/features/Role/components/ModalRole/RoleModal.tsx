import classNames from "classnames/bind";
import styles from "./RoleModal.module.scss";
import Modal from "@/components/Common/Modal/Modal";
import type { ModalRoleProps, Role } from "../../types/role.interface";
import Input from "@/components/Common/Input/Input";
import Button from "@/components/Common/Button";
import { useState } from "react";
import { useRoleMutations } from "../../hooks/useRoleMutations";

const cx = classNames.bind(styles);

const ModalRole = ({ action, isOpen, onClose }: ModalRoleProps) => {
  const { addRole, updateRole, isMutating } = useRoleMutations();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const handleSubmit = () => {
    console.log(action);
    if (action?.type === "add") {
      addRole({
        name: name,
        description: description,
      });
      onClose();
    } else if (action?.type === "edit" && action.role) {
      const role: Role = action.role;
      updateRole({
        id: role.id,
        data: {
          name: name,
          description: description,
        },
      });
    }
  };

  return (
    <div className={cx("modal-role")}>
      <Modal
        title={action?.type === "add" ? "Create Role" : "Edit Role"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className={cx("modal-role__content")}>
          <Input
            label="Name"
            type="text"
            value={action?.type === "edit" ? action.role?.name : ""}
            placeholder="name"
            onChange={(value) => setName(value)}
          />
          <Input
            label="Description"
            type="text"
            value={action?.type === "edit" ? action.role?.description : ""}
            placeholder="description"
            onChange={(value) => setDescription(value)}
          />
        </div>

        <div className={cx("modal-role__actions")}>
          <Button onClick={handleSubmit} isLoading={isMutating}>
            Submit
          </Button>
          <Button color="destructive" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalRole;
