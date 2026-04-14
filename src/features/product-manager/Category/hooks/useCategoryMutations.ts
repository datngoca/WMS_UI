import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory, updateCategory, deleteCategory, moveCategory } from "../services/categoryService";
import type { Category, CategoryRequest } from "../types/category.interface";
import { useToast } from "@/hooks/ToastContext/useToast";
export const useCategoryMutations = () => {
    const { showToast } = useToast();
    const queryClient = useQueryClient();
    const createMutation = useMutation({
        mutationFn: (payload: CategoryRequest) => createCategory(payload),
        onSuccess: (res) => {
            showToast(res.message, "success");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        }
    });
    const updateMutation = useMutation({
        mutationFn: ({ id, payload }: { id: number; payload: CategoryRequest }) => updateCategory(id, payload),
        onSuccess: (res) => {
            showToast(res.message, "success");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
    });
    const deleteMutation = useMutation({
        mutationFn: (id: number) => deleteCategory(id),
        onSuccess: (res) => {
            showToast(res.message, "success");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
    });
    const moveMutation = useMutation({
        mutationFn: ({ id, parentId }: { id: number; parentId: number }) => moveCategory(id, parentId),
        onSuccess: (res) => {
            showToast(res.message, "success");
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
    });
    return {
        createCategory: createMutation.mutate,
        updateCategory: updateMutation.mutate,
        deleteCategory: deleteMutation.mutate,
        moveCategory: moveMutation.mutate,
        isPending: createMutation.isPending || updateMutation.isPending || deleteMutation.isPending || moveMutation.isPending,
        isError: createMutation.isError || updateMutation.isError || deleteMutation.isError || moveMutation.isError,
        error: createMutation.error || updateMutation.error || deleteMutation.error || moveMutation.error,
    };
};

