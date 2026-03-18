import axiosInstance from "@/api/axiosInstance";
import type { Role, RoleRequest } from "../types/role.interface";
import type { ApiResponse } from "@/type/apiResponse.interface";

export const fetchRoles = async (): Promise<ApiResponse<Role[]>> => {
  const response = await axiosInstance.get("/roles");
  return response;
};

export const fetchRoleById = async (id: number): Promise<ApiResponse<Role>> => {
  const response = await axiosInstance.get(`/roles/${id}`);
  return response;
};

export const createRole = async (
  data: RoleRequest,
): Promise<ApiResponse<Role>> => {
  const response = await axiosInstance.post("/roles", data);
  return response;
};
export const updateRole = async ({
  id,
  data,
}: {
  id: number;
  data: RoleRequest;
}): Promise<ApiResponse<Role>> => {
  const response = await axiosInstance.put(`/roles/${id}`, data);
  return response;
};

export const deleteRole = async (id: number): Promise<ApiResponse<void>> => {
  return axiosInstance.delete(`/roles/${id}`);
};
