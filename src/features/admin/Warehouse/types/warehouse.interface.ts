export interface Warehouse {
  id: number;
  name: string;
  address: string;
  capacity: number;
}

export interface WarehouseTableProps {
  data: Warehouse[];
  onEdit: (warehouse: Warehouse) => void;
  onDelete: (warehouse: Warehouse) => void;
}

export interface WarehouseRequest {
  name: string;
  address: string;
  capacity: number;
}
export type WarehouseRequestUpdate = Warehouse;

export type ModalWarehouseAction =
  | {
      type: "add";
    }
  | {
      type: "edit" | "delete";
      warehouse: Warehouse;
    };

export interface ModalWarehouseProps {
  action?: ModalWarehouseAction | null;
  isOpen: boolean;
  onClose: () => void;
}
