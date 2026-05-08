import axiosInstance from "@/api/axiosInstance";
import type { Product, ProductRequest } from "../types/product.interface";
import type { ApiResponse } from "@/types/apiResponse.interface";

export const fetchProducts = async (): Promise<ApiResponse<Product[]>> => {
    const response = await axiosInstance.get("/products");
    return response;
};

export const fetchProductById = async (id: number): Promise<ApiResponse<Product>> => {
    const response = await axiosInstance.get(`/products/${id}`);
    return response;
};

export const createProduct = async (product: ProductRequest): Promise<ApiResponse<Product>> => {
    const response = await axiosInstance.post("/products", product);
    return response;
};

export const updateProduct = async (id: number, product: ProductRequest): Promise<ApiResponse<Product>> => {
    const response = await axiosInstance.put(`/products/${id}`, product);
    return response;
};

export const deleteProduct = async (id: string): Promise<ApiResponse<void>> => {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response;
};