import axiosInstance from "@/api/axiosInstance";
import type { Role, RoleRequest } from "../types/role.interface";

export const fetchRoles = async (): Promise<Role[]> => {
  const response = await axiosInstance.get<Role[]>("/roles");
  return response;
};

export const fetchRoleById = async (id: number): Promise<Role> => {
  const response = await axiosInstance.get<Role>(`/roles/${id}`);
  return response;
};

export const createRole = async (data: RoleRequest): Promise<Role> => {
  const response = await axiosInstance.post<Role>("/roles", data);
  return response;
};
export const updateRole = async ({
  id,
  data,
}: {
  id: number;
  data: RoleRequest;
}): Promise<Role> => {
  const response = await axiosInstance.post<Role>(`/roles/${id}`, data);
  return response;
};

export const deleteRole = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/roles/${id}`);
};
