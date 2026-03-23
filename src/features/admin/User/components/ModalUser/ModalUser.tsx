import classNames from "classnames/bind";
import styles from "./ModalUser.module.scss";
import Modal from "@/components/Common/Modal/Modal";
import type {
  ModalAction,
  ModalUserProps,
  UserRequest,
} from "../../types/user.interface";
import Input from "@/components/Common/Input/Input";
import Button from "@/components/Common/Button";
import { FaUser } from "react-icons/fa";
import { useRoles } from "@/features/admin/Role/hooks/useRoles";
import { useEffect, useState } from "react";
import { useUserMutations } from "../../hooks/userUserMutations";
import { hasFormChanged, normalizeFormValues } from "@/utils/form";

const cx = classNames.bind(styles);

const EMPTY_FORM: UserRequest = {
  fullName: "",
  username: "",
  password: "",
  email: "",
  roles: [],
};

const getFormDataFromAction = (action?: ModalAction): UserRequest => {
  if (action?.type === "edit") {
    return structuredClone(action.user);
  }
  return EMPTY_FORM;
};

const ModalUser = ({ action, isOpen, onClose }: ModalUserProps) => {
  const { createUser, updateUser, deleteUser, isMutating } = useUserMutations();
  const initialFormData = getFormDataFromAction(action);
  const [formData, setFormData] = useState<UserRequest>(() => initialFormData);
  const { data: roles } = useRoles();
  const handleFormChange = <K extends keyof UserRequest>(
    field: K,
    value: UserRequest[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const TITLES = {
    add: "Create New User",
    edit: "Edit User",
    delete: "Confirm Delete",
  };

  useEffect(() => {
    setFormData(getFormDataFromAction(action));
  }, [action]);

  const resetForm = () => {
    setFormData(EMPTY_FORM);
  };

  const handleSubmit = () => {
    if (!action) return;
    const payload = normalizeFormValues(formData);

    const options = {
      onSuccess: () => {
        onClose();
        resetForm();
      },
    };

    const handlers = {
      add: () => createUser(payload, options),
      edit: () =>
        action?.type === "edit" &&
        updateUser({ id: action.user?.id, data: payload }, options),
      delete: () =>
        action?.type === "delete" && deleteUser(action.user.id, options),
    };

    handlers[action.type]?.();
  };

  const isDeleteMode = action?.type === "delete";
  const hasChanged = hasFormChanged(formData, initialFormData);
  const isSubmitDisabled = !isDeleteMode && (!hasChanged || isMutating);

  return (
    <div className={cx("modal-user")}>
      <Modal
        title={action ? TITLES[action.type] : ""}
        isOpen={isOpen}
        onClose={onClose}
        footer={
          <div className={cx("modal-user__actions")}>
            <Button
              onClick={handleSubmit}
              isLoading={isMutating}
              disabled={isSubmitDisabled}
              color={isDeleteMode ? "destructive" : "primary"}
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
          {isDeleteMode ? (
            <p className={cx("modal-role__content--full-width")}>
              Are you sure you want to delete user:
              <b>{action?.user?.fullName}</b>? This action cannot be undone.
            </p>
          ) : (
            <>
              <Input
                icon={<FaUser />}
                label="Full Name"
                value={formData.fullName}
                type="text"
                placeholder="Full Name"
                onChange={(value) =>
                  handleFormChange("fullName", value as string)
                }
              />
              <Input
                icon={<FaUser />}
                label="User Name"
                value={formData.username}
                type="text"
                placeholder="Username"
                onChange={(value) =>
                  handleFormChange("username", value as string)
                }
              />
              <Input
                label="Email"
                value={formData.email}
                type="email"
                placeholder="Email"
                onChange={(value) => handleFormChange("email", value as string)}
              />

              {action?.type === "add" && (
                <Input
                  label="Password"
                  type="password"
                  placeholder="Password"
                  onChange={(value) =>
                    handleFormChange("password", value as string)
                  }
                />
              )}

              <Input
                type="select"
                isMultiple={true}
                value={formData.roles.map((role) => role.name)}
                options={roles?.map((role) => ({
                  label: role.name,
                  value: role.name,
                }))}
                label="Roles"
                placeholder="Roles"
                onChange={(selectedRoleNames) => {
                  const selectedRoles = roles?.filter((role) =>
                    selectedRoleNames.includes(role.name),
                  );
                  handleFormChange("roles", selectedRoles || []);
                }}
                className={cx("modal-user__content--full-width")}
              />
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ModalUser;
