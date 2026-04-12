import axiosInstance from "@/api/axiosInstance";
import type { Category } from "../types/category.interface";
import type { ApiResponse } from "@/types/apiResponse.interface";

export const getAllCategories = async (): Promise<ApiResponse<Category[]>> => {
  const response = await axiosInstance.get("/categories");
  return response;
};

export const getCategoryById = async (
  id: number,
): Promise<ApiResponse<Category>> => {
  const response = await axiosInstance.get(`/categories/${id}`);
  return response;
};

export const createCategory = async (
  category: Category,
): Promise<ApiResponse<Category>> => {
  const response = await axiosInstance.post("/categories", category);
  return response;
};

export const updateCategory = async (
  id: number,
  category: Category,
): Promise<ApiResponse<Category>> => {
  const response = await axiosInstance.put(`/categories/${id}`, category);
  return response;
};

export const deleteCategory = async (
  id: number,
): Promise<ApiResponse<Category>> => {
  const response = await axiosInstance.delete(`/categories/${id}`);
  return response;
};

export const moveCategory = async (
  id: number,
  parentId: number,
): Promise<ApiResponse<Category>> => {
  const response = await axiosInstance.put(`/categories/${id}/move`, {
    parentId,
  });
  return response;
};
