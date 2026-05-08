import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUnit, updateUnit, deleteUnit } from "../services/unitServices";
import type { UnitRequest } from "../types/unit.interface";
import { useToast } from "@/hooks/ToastContext/useToast";

export const useUnitMutation = () => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();
    const createMutation = useMutation({
        mutationFn: (data: UnitRequest) => createUnit(data),
        onSuccess: (res) => {
            showToast(res.message, "success");
            queryClient.invalidateQueries({ queryKey: ["units"] });
        },
    })

    const updateMutation = useMutation({
        mutationFn: ({ id, payload }: { id: number, payload: UnitRequest }) => updateUnit(id, payload),
        onSuccess: (res) => {
            showToast(res.message, "success");
            queryClient.invalidateQueries({ queryKey: ["units"] });
        },
    })

    const deleteMutation = useMutation({
        mutationFn: (id: number) => deleteUnit(id),
        onSuccess: (res) => {
            showToast(res.message, "success");
            queryClient.invalidateQueries({ queryKey: ["units"] });
        },
    })

    return {
        createUnit: createMutation.mutate,
        updateUnit: updateMutation.mutate,
        deleteUnit: deleteMutation.mutate,
        isPending: createMutation.isPending || updateMutation.isPending || deleteMutation.isPending,
    }
}
