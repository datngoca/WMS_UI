import axiosInstance from "@/api/axiosInstance";
import type { ApiResponse } from "@/types/apiResponse.interface";
import type { Unit, UnitRequest } from "../types/unit.interface";

export const getUnits = async (): Promise<ApiResponse<Unit[]>> => {
    const response = await axiosInstance.get("/units");
    return response;
}

export const createUnit = async (data: UnitRequest): Promise<ApiResponse<Unit>> => {
    const response = await axiosInstance.post("/units", data);
    return response;
}

export const getUnitById = async (id: number): Promise<ApiResponse<Unit>> => {
    const response = await axiosInstance.get(`/units/${id}`);
    return response;
}

export const updateUnit = async (id: number, data: UnitRequest): Promise<ApiResponse<Unit>> => {
    const response = await axiosInstance.put(`/units/${id}`, data);
    return response;
}

export const deleteUnit = async (id: number): Promise<ApiResponse<Unit>> => {
    const response = await axiosInstance.delete(`/units/${id}`);
    return response;
}
