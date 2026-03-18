import axiosInstance from "@/api/axiosInstance";
import type { User, UserRequest } from "../types/user.interface";
import type { ApiResponse } from "@/type/apiResponse.interface";

export const fetchUsers = async (): Promise<ApiResponse<User[]>> => {
  const response = await axiosInstance.get("/users");
  return response;
};

export const fetchUserById = async (id: number): Promise<ApiResponse<User>> => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response;
};

export const createUser = async (data: UserRequest): Promise<ApiResponse<User>> => {
  const response = await axiosInstance.post("/users", data);
  return response;
};

export const deleteUser = async (id: number): Promise<ApiResponse<void>> => {
  return await axiosInstance.delete(`/users/${id}`);
};

export const updateUser = async (
  id: number,
  data: UserRequest,
): Promise<ApiResponse<User>> => {
  const response = await axiosInstance.put(`/users/${id}`, data);
  return response;
};
