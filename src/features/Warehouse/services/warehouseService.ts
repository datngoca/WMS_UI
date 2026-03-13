import axiosInstance from "@/api/axiosInstance";
import type { Warehouse } from "../types/warehouse.interface";

export const fetchWarehouses = async() :Promise<Warehouse[]> =>{
    const response = axiosInstance.get<Warehouse[]>("/warehouse");
    return response;
}