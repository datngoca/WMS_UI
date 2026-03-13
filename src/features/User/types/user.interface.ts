import { type Role } from "@/features/Role/types/role.interface";

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
