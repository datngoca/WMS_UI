import axiosInstance from "@/api/axiosInstance";
import type { ApiResponse } from "@/types/apiResponse.interface";
import type { Unit, UnitRequest } from "../types/unit.interface";
const UNIT_API_URL = "/units";

export const getUnits = async (): Promise<ApiResponse<Unit[]>> => {
    const response = await axiosInstance.get(UNIT_API_URL);
    return response;
};

export const getUnitById = async (id: number): Promise<ApiResponse<Unit>> => {
    const response = await axiosInstance.get(`${UNIT_API_URL}/${id}`);
    return response;
}

export const createUnit = async (unit: UnitRequest): Promise<ApiResponse<Unit>> => {
    const response = await axiosInstance.post(UNIT_API_URL, unit);
    return response;
}

export const updateUnit = async (id: number, unit: UnitRequest): Promise<ApiResponse<Unit>> => {
    const response = await axiosInstance.put(`${UNIT_API_URL}/${id}`, unit);
    return response;
}

export const deleteUnit = async (id: number): Promise<ApiResponse<Unit>> => {
    const response = await axiosInstance.delete(`${UNIT_API_URL}/${id}`);
    return response;
}
