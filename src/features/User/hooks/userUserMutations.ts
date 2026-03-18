import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/ToastContext/useToast";
import { createUser, deleteUser, updateUser } from "../services/userService";
import type { UserRequest } from "../types/user.interface";

export const useUserMutations = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (res) => {
      showToast(res.message, "success");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const editMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: UserRequest }) =>
      updateUser(id, data),
    onSuccess: (res) => {
      showToast(res.message, "success");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: (res) => {
      showToast(res.message, "success");
    },
  });

  return {
    createUser: addMutation.mutate,
    updateUser: editMutation.mutate,
    deleteUser: removeMutation.mutate,
    isMutating:
      addMutation.isPending ||
      editMutation.isPending ||
      removeMutation.isPending,
  };
};
