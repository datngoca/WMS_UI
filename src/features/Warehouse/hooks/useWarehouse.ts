import { useQuery } from "@tanstack/react-query";
import { fetchWarehouses } from "../services/warehouseService";

export const useWarehouse = () => {
  return useQuery({
    queryKey: ["warehouses"],
    queryFn: fetchWarehouses,
    staleTime: 5 * 60 * 1000,
  });
};
