import axiosInstance from "@/api/axiosInstance";
import type {
  Warehouse,
  WarehouseRequest,
  WarehouseRequestUpdate,
} from "../types/warehouse.interface";
import type { ApiResponse } from "@/type/apiResponse.interface";
import { omitData } from "@/utils/helperData";

export const fetchWarehouses = async (): Promise<ApiResponse<Warehouse[]>> => {
  const response = await axiosInstance.get("/warehouses");
  return response;
};

export const fetchWarehouseById = async (
  id: number,
): Promise<ApiResponse<Warehouse>> => {
  const response = await axiosInstance.get(`/warehouses/${id}`);
  return response;
};

export const createWarehouse = async (
  data: WarehouseRequest,
): Promise<ApiResponse<Warehouse>> => {
  const response = await axiosInstance.post("/warehouses", data);
  return response;
};

export const updateWarehouse = async (
  data: WarehouseRequestUpdate,
): Promise<ApiResponse<Warehouse>> => {
  console.log("data", data);
  const response = await axiosInstance.put(
    `/warehouses/${data.id}`,
    omitData(data, ["id"]),
  );
  return response;
};

export const deleteWarehouse = async (
  id: number,
): Promise<ApiResponse<void>> => {
  const response = await axiosInstance.delete(`/warehouses/${id}`);
  return response;
};
