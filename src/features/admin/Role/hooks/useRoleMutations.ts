import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRole, deleteRole, updateRole } from "../services/roleService";
import type { RoleRequest } from "../types/role.interface";
import { useToast } from "@/hooks/ToastContext/useToast";

export const useRoleMutations = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  // Thêm Role
  const addMutation = useMutation({
    mutationFn: createRole,
    onSuccess: (res) => {
      showToast(res?.message, "success");
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });

  // Sửa Role
  const editMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: RoleRequest }) =>
      updateRole({ id, data }),
    onSuccess: (data, variables) => {
      showToast(data?.message, "success");
      queryClient.invalidateQueries({ queryKey: ["roles"] });
      queryClient.invalidateQueries({ queryKey: ["roles", variables.id] });
    },
  });

  // Xoá Role
  const removeMutation = useMutation({
    mutationFn: deleteRole,
    onSuccess: (res) => {
      showToast(res?.message, "success");
      queryClient.invalidateQueries({ queryKey: ["roles"] });
    },
  });

  //

  return {
    addRole: addMutation.mutate,
    updateRole: editMutation.mutate,
    deleteRole: removeMutation.mutate,
    isMutating:
      addMutation.isPending ||
      editMutation.isPending ||
      removeMutation.isPending,
  };
};
