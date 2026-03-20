import { useQuery } from "@tanstack/react-query";
import {
  fetchWarehouses,
  fetchWarehouseById,
} from "../services/warehouseService";

export const useWarehouse = () => {
  return useQuery({
    queryKey: ["warehouses"],
    queryFn: fetchWarehouses,
    staleTime: 5 * 60 * 1000,
    select: (warehouses) => warehouses.data,
  });
};

export const useWarehouseById = (id: number) => {
  return useQuery({
    queryKey: ["warehouses", id],
    queryFn: () => fetchWarehouseById(id),
    staleTime: 5 * 60 * 1000,
    select: (warehouse) => warehouse.data,
  });
};
