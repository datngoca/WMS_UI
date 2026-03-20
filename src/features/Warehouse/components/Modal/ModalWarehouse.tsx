import classNames from "classnames/bind";
import styles from "./ModalWarehouse.module.scss";
import type { ModalWarehouseProps } from "../../types/warehouse.interface";
import Modal from "@/components/Common/Modal/Modal";
import { useWarehouseMutations } from "../../hooks/useWarehouseMutations";
import { type WarehouseRequest } from "../../types/warehouse.interface";
import { useEffect, useState } from "react";
import Input from "@/components/Common/Input/Input";
import Button from "@/components/Common/Button";
import { normalizeFormValues, hasFormChanged } from "@/utils/form";

const cx = classNames.bind(styles);

const ENTRY_FORM: WarehouseRequest = {
  name: "",
  address: "",
  capacity: 0,
};
const getFormDataFromAction = (action: ModalWarehouseProps["action"]) => {
  if (action?.type === "edit") {
    return structuredClone(action.warehouse);
  }
  return ENTRY_FORM;
};

const ModalWarehouse = ({ isOpen, action, onClose }: ModalWarehouseProps) => {
  const { createWarehouse, updateWarehouse, deleteWarehouse, isMutating } =
    useWarehouseMutations();
  const initialFormData = getFormDataFromAction(action);
  const [formData, setFormData] = useState<WarehouseRequest>(initialFormData);

  const handleFormChange = (
    field: keyof WarehouseRequest,
    value: string | number,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    setFormData(getFormDataFromAction(action));
  }, [action]);

  const resetForm = () => {
    setFormData(ENTRY_FORM);
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
      add: () => createWarehouse(payload, options),
      edit: () =>
        action.type === "edit" &&
        updateWarehouse({ id: action.warehouse.id, ...payload }, options),
      delete: () =>
        action.type === "delete" && deleteWarehouse(action.warehouse, options),
    };

    handlers[action.type]?.();
  };

  const TITLES = {
    add: "Create New Warehouse",
    edit: "Edit Warehouse",
    delete: "Confirm Delete",
  };

  const isDeleteMode = action?.type === "delete";
  const hasChanged = hasFormChanged(formData, initialFormData);
  const isSubmitDisabled = !isDeleteMode && (!hasChanged || isMutating);

  return (
    <div className={cx("modal-warehouse")}>
      <Modal
        title={action ? TITLES[action.type] : ""}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className={cx("modal-warehouse__content")}>
          {isDeleteMode ? (
            <p className={cx("modal-warehouse__content--full-width")}>
              Are you sure you want to delete warehouse:{" "}
              <b>{action.warehouse.name}</b>? This action cannot be undone.
            </p>
          ) : (
            <>
              <Input
                label="Name"
                type="text"
                value={formData.name}
                placeholder="Enter warehouse name"
                onChange={(value) => handleFormChange("name", value as string)}
              />
              <Input
                label="Address"
                type="text"
                value={formData.address}
                placeholder="Enter address"
                onChange={(value) =>
                  handleFormChange("address", value as string)
                }
              />
              <Input
                label="Capacity"
                type="number"
                value={formData.capacity}
                placeholder="Enter capacity"
                onChange={(value) =>
                  handleFormChange("capacity", value as number)
                }
              />
            </>
          )}
        </div>
        <div className={cx("modal-warehouse__actions")}>
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
export default ModalWarehouse;
