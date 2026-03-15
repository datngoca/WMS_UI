import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRole, deleteRole, updateRole } from "../services/roleService";
import type { RoleRequest } from "../types/role.interface";

export const useRoleMutations = () => {
  const queryClient = useQueryClient();

  // Thêm Role
  const addMutation = useMutation({
    mutationFn: createRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });

  // Sửa Role
  const editMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: RoleRequest }) =>
      updateRole({ id, data }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
      queryClient.invalidateQueries({ queryKey: ["roles", variables.id] });
    },
  });

  // Xoá Role
  const removeMutation = useMutation({
    mutationFn: deleteRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });

  //

  return {
    ...queryClient,
    addRole: addMutation.mutate,
    updateRole: editMutation.mutate,
    deleteRole: removeMutation.mutate,
    isMutating:addMutation.isPending || editMutation.isPending ||removeMutation.isPending
  };
};
