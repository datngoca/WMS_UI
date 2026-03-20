import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./RoleModal.module.scss";
import Modal from "@/components/Common/Modal/Modal";
import type { ModalRoleProps, RoleRequest } from "../../types/role.interface";
import Input from "@/components/Common/Input/Input";
import Button from "@/components/Common/Button";
import { useRoleMutations } from "../../hooks/useRoleMutations";
import { normalizeFormValues, hasFormChanged } from "@/utils/form";

const cx = classNames.bind(styles);

const EMPTY_FORM: RoleRequest = {
  name: "",
  description: "",
};

const getFormDataFromAction = (
  action: ModalRoleProps["action"],
): RoleRequest => {
  if (action?.type === "edit") {
    return structuredClone(action.role);
  }

  return EMPTY_FORM;
};

const ModalRole = ({ action, isOpen, onClose }: ModalRoleProps) => {
  const { addRole, updateRole, deleteRole, isMutating } = useRoleMutations();
  const initialFormData = getFormDataFromAction(action);
  const [formData, setFormData] = useState<RoleRequest>(() => initialFormData);

  const handleFormChange = (field: keyof RoleRequest, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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

    // Callback dùng chung cho tất cả action thành công
    const options = {
      onSuccess: () => {
        onClose();
        resetForm();
      },
    };

    const handlers = {
      add: () => addRole(payload, options),
      edit: () =>
        action.role &&
        updateRole({ id: action.role.id, data: payload }, options),
      delete: () => action.role && deleteRole(action.role.id, options),
    };

    handlers[action.type]?.();
  };

  const TITLES = {
    add: "Create New Role",
    edit: "Edit Role",
    delete: "Confirm Delete",
  };

  const isDeleteMode = action?.type === "delete";
  const hasChanged = hasFormChanged(formData, initialFormData);
  const isSubmitDisabled = !isDeleteMode && (!hasChanged || isMutating);

  return (
    <div className={cx("modal-role")}>
      <Modal
        title={action ? TITLES[action.type] : ""}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className={cx("modal-role__content")}>
          {isDeleteMode ? (
            <p className={cx("modal-role__content--full-width")}>
              Are you sure you want to delete role: <b>{action.role.name}</b>?
              This action cannot be undone.
            </p>
          ) : (
            <>
              <Input
                label="Name"
                type="text"
                value={formData.name}
                placeholder="Enter role name"
                onChange={(value) => handleFormChange("name", value as string)}
              />
              <Input
                label="Description"
                type="text"
                value={formData.description}
                placeholder="Enter description"
                onChange={(value) =>
                  handleFormChange("description", value as string)
                }
              />
            </>
          )}
        </div>

        <div className={cx("modal-role__actions")}>
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
      </Modal>
    </div>
  );
};

export default ModalRole;
