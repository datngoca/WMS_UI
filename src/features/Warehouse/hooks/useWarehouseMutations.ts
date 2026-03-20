import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createWarehouse,
  updateWarehouse,
  deleteWarehouse,
} from "../services/warehouseService";
import type {
  WarehouseRequest,
  WarehouseRequestUpdate,
} from "../types/warehouse.interface";
import { useToast } from "@/hooks/ToastContext/useToast";

export const useWarehouseMutations = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  const useCreateWarehouse = useMutation({
    mutationFn: (warehouse: WarehouseRequest) => createWarehouse(warehouse),
    onSuccess: (res) => {
      showToast(res?.message, "success");
      queryClient.invalidateQueries({ queryKey: ["warehouses"] });
    },
  });

  const useUpdateWarehouse = useMutation({
    mutationFn: (warehouse: WarehouseRequestUpdate) =>
      updateWarehouse(warehouse),
    onSuccess: (res) => {
      showToast(res?.message, "success");
      queryClient.invalidateQueries({ queryKey: ["warehouses"] });
    },
  });
  const useDeleteWarehouse = useMutation({
    mutationFn: (warehouse: WarehouseRequestUpdate) =>
      deleteWarehouse(warehouse.id),
    onSuccess: (res) => {
      showToast(res?.message, "success");
      queryClient.invalidateQueries({ queryKey: ["warehouses"] });
    },
  });
  return {
    createWarehouse: useCreateWarehouse.mutate,
    updateWarehouse: useUpdateWarehouse.mutate,
    deleteWarehouse: useDeleteWarehouse.mutate,
    isMutating:
      useCreateWarehouse.isPending ||
      useUpdateWarehouse.isPending ||
      useDeleteWarehouse.isPending,
  };
};
