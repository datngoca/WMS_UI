export interface Role {
  id: number;
  name: string;
  description: string;
}
export interface RoleTableProps {
  isOpenModal?: boolean;
  data: Role[];
  onEdit?: (role: Role) => void;
}

export interface ModalRoleProps {
  action?: {
    type: "add" | "edit";
    role?: Role;
  };
  isOpen: boolean;
  onClose: () => void;
}

export interface RoleRequest {
  name: string;
  description: string;
}
