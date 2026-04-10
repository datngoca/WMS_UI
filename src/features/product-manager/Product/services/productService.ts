import axiosInstance from "@/api/axiosInstance";
import type { Product } from "../types";
import type { ApiResponse } from "@/type/apiResponse.interface";

export const fetchProducts = async (): Promise<ApiResponse<Product[]>> => {
    const response = await axiosInstance.get("/products");
    return response;
};

export const fetchProductById = async (id: string): Promise<ApiResponse<Product>> => {
    const response = await axiosInstance.get(`/products/${id}`);
    return response;
};

export const createProduct = async (product: Product): Promise<ApiResponse<Product>> => {
    const response = await axiosInstance.post("/products", product);
    return response;
};

export const updateProduct = async (product: Product): Promise<ApiResponse<Product>> => {
    const response = await axiosInstance.put(`/products/${product.id}`, product);
    return response;
};

export const deleteProduct = async (id: string): Promise<ApiResponse<void>> => {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response;
};