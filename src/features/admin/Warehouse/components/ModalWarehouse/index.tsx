import classNames from "classnames/bind";
import styles from "./ModalWarehouse.module.scss";
import type { ModalWarehouseProps } from "../../types/warehouse.interface";
import Modal from "@/components/common/Modal/Modal";
import { useWarehouseMutations } from "../../hooks/useWarehouseMutations";
import { type WarehouseRequest } from "../../types/warehouse.interface";
import Button from "@/components/common/Button";
import Form from "./Form";

const cx = classNames.bind(styles);

const DEFAULT_FORM: WarehouseRequest = {
  name: "",
  address: "",
  capacity: 0,
};

const getInitialData = (action: ModalWarehouseProps["action"]): WarehouseRequest => {
  if (action?.type === "edit") return structuredClone(action.warehouse);
  return DEFAULT_FORM;
};

const ModalWarehouse = ({ isOpen, action, onClose }: ModalWarehouseProps) => {
  const { createWarehouse, updateWarehouse, deleteWarehouse, isMutating } =
    useWarehouseMutations();

  const isDeleteMode = action?.type === "delete";
  const formState = getInitialData(action);

  const handleSubmit = (payload: WarehouseRequest) => {
    if (!action) return;

    const options = { onSuccess: onClose };

    if (action.type === "add") {
      createWarehouse(payload, options);
    } else if (action.type === "edit") {
      updateWarehouse({ id: action.warehouse.id, ...payload }, options);
    } else if (action.type === "delete") {
      deleteWarehouse(action.warehouse, options);
    }
  };

  const TITLES = {
    add: "Create New Warehouse",
    edit: "Edit Warehouse",
    delete: "Confirm Delete",
  };

  return (
    <Modal
      title={action ? TITLES[action.type] : ""}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <div className={cx("modal-warehouse__actions")}>
          <Button
            isLoading={isMutating}
            color={isDeleteMode ? "destructive" : "primary"}
            form="warehouse-form"
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
      <div className={cx("modal-warehouse__content")}>
        {action && (isDeleteMode ? (
          <p className={cx("modal-warehouse--full-width")}>
            Are you sure you want to delete warehouse: <b>{action.warehouse.name}</b>?
            This action cannot be undone.
          </p>
        ) : (
          <Form formState={formState} onSubmit={handleSubmit} />
        ))}
      </div>
    </Modal>
  );
};

export default ModalWarehouse;
