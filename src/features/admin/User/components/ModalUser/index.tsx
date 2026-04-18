import classNames from "classnames/bind";
import styles from "./ModalUser.module.scss";
import Modal from "@/components/common/Modal/Modal";
import type { ModalAction, ModalUserProps, UserRequest } from "../../types/user.interface";
import Button from "@/components/common/Button";
import { useUserMutations } from "../../hooks/useUserMutations";
import Form from "./Form";

const cx = classNames.bind(styles);

const getInitialData = (action?: ModalAction): UserRequest => {
  if (action?.type === "edit") return structuredClone(action.user);
  return {
    fullName: "",
    username: "",
    password: "",
    email: "",
    roles: [],
  };
};

const ModalUser = ({ action, isOpen, onClose }: ModalUserProps) => {
  const { createUser, updateUser, deleteUser, isMutating } = useUserMutations();

  const isDeleteMode = action?.type === "delete";
  const formState = getInitialData(action);

  const handleSubmit = (payload: UserRequest) => {
    if (!action) return;

    const options = { onSuccess: onClose };

    if (action.type === "add") {
      createUser(payload, options);
    } else if (action.type === "edit") {
      updateUser({ id: action.user.id, data: payload }, options);
    } else if (action.type === "delete") {
      deleteUser(action.user.id, options);
    }
  };

  const TITLES = {
    add: "Create New User",
    edit: "Edit User",
    delete: "Confirm Delete",
  };

  return (
    <Modal
      title={action ? TITLES[action.type] : ""}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <div className={cx("modal-user__actions")}>
          <Button
            isLoading={isMutating}
            color={isDeleteMode ? "destructive" : "primary"}
            form="user-form"
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
      <div className={cx("modal-user__content")}>
        {action && (isDeleteMode ? (
          <p className={cx("form-user--full-width")}>
            Are you sure you want to delete user: <b>{action.user.username}</b>?
            This action cannot be undone.
          </p>
        ) : (
          <Form
            formState={formState}
            readOnly={isDeleteMode}
            action={action}
            onSubmit={handleSubmit}
          />
        ))}
      </div>
    </Modal>
  );
};

export default ModalUser;
