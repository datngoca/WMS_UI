import axiosInstance from "@/api/axiosInstance";
import type { User, CreateUserRequest } from "../types/user.interface";

export const fetchUsers = async () => {
  const response = await axiosInstance.get<User[]>("/users");
  return response;
};

export const fetchUserById = async (id: number) => {
  const response = await axiosInstance.get<User>(`/users/${id}`);
  return response;
};

export const createUser = async (data: CreateUserRequest) => {
  const response = await axiosInstance.post<User>("/users", data);
  return response;
};

export const deleteUser = async (id: number) => {
  await axiosInstance.delete(`/users/${id}`);
}

export const updateUser = async (id: number, data: CreateUserRequest) => {
  const response = await axiosInstance.put<User>(`/users/${id}`, data);
  return response;
}
