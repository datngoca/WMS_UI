import { type Role } from "@/features/admin/Role/types/role.interface";

export interface ModalUserProps {
  action?: ModalAction;
  isOpen: boolean;
  onClose: () => void;
}

export interface UserTableProps {
  isOpenModal?: boolean;
  data: User[];
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;
}

export type ModalAction =
  | { type: "add" }
  | { type: "edit"; user: User }
  | { type: "delete"; user: User };

export interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
  password: string;
  roles: Role[];
}

export interface UserRequest {
  fullName: string;
  username: string;
  email: string;
  password: string;
  roles: Role[];
}
