import { type Role } from "@/features/Role/types/role.interface";

export interface ModalUserProps{
  action?:{
    type:"add" | "edit";
    user?:User;
  };
  isOpen:boolean;
  onClose:()=>void;
}

export interface UserTableProps {
  isOpenModal?: boolean;
  data: User[];
  onEdit?: (user: User) => void;
}


export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  roles: Role[];
}

export interface CreateUserRequest {
  username: string;
  email: string;
  password: string;
  roleIds: number[];
}
