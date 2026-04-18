import classNames from "classnames/bind";
import styles from "./RoleModal.module.scss";
import Modal from "@/components/common/Modal/Modal";
import type { ModalRoleProps, RoleRequest } from "../../types/role.interface";
import Button from "@/components/common/Button";
import { useRoleMutations } from "../../hooks/useRoleMutations";
import Form from "./Form";

const cx = classNames.bind(styles);

const getInitialData = (action: ModalRoleProps["action"]): RoleRequest => {
  if (action?.type === "edit") return structuredClone(action.role);
  return { name: "", description: "" };
};

const ModalRole = ({ action, isOpen, onClose }: ModalRoleProps) => {
  const { addRole, updateRole, deleteRole, isMutating } = useRoleMutations();

  const isDeleteMode = action?.type === "delete";
  const formState = getInitialData(action);

  const handleSubmit = (payload: RoleRequest) => {
    if (!action) return;

    const options = { onSuccess: onClose };

    if (action.type === "add") {
      addRole(payload, options);
    } else if (action.type === "edit") {
      updateRole({ id: action.role.id, data: payload }, options);
    } else if (action.type === "delete") {
      deleteRole(action.role.id, options);
    }
  };

  const TITLES = {
    add: "Create New Role",
    edit: "Edit Role",
    delete: "Confirm Delete",
  };

  return (
    <Modal
      title={action ? TITLES[action.type] : ""}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <div className={cx("modal-role__actions")}>
          <Button
            isLoading={isMutating}
            color={isDeleteMode ? "destructive" : "primary"}
            form="role-form"
            onClick={isDeleteMode ? () => handleSubmit(formState) : undefined}
          >
            {isDeleteMode ? "Delete" : "Save Changes"}
          </Button>
          <Button onClick={onClose} disabled={isMutating}>
            Cancel
          </Button>
        </div>
      }
    >
      <div className={cx("modal-role__content")}>
        {action && (isDeleteMode ? (
          <p className={cx("form-role--full-width")}>
            Are you sure you want to delete role: <b>{action.role.name}</b>?
            This action cannot be undone.
          </p>
        ) : (
          <Form formState={formState} onSubmit={handleSubmit} />
        ))}
      </div>
    </Modal>
  );
};

export default ModalRole;
