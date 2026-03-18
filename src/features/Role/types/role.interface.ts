export interface Role {
  id: number;
  name: string;
  description: string;
}
export interface RoleTableProps {
  isOpenModal?: boolean;
  data: Role[];
  onEdit?: (role: Role) => void;
  onDelete?: (role: Role) => void;
}

export type ModalRoleAction =
  | {
      type: "add";
      role?: undefined;
    }
  | {
      type: "edit" | "delete";
      role: Role;
    };

export interface ModalRoleProps {
  action?: ModalRoleAction | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface RoleRequest {
  name: string;
  description: string;
}
