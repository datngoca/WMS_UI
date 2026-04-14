import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUnit, updateUnit, deleteUnit } from "../services/unitService";
import type { UnitRequest } from "../types/unit.interface";
import { useToast } from "@/hooks/ToastContext/useToast";

export const useUnitMutations = () => {
    const queryClient = useQueryClient();
    const { showToast } = useToast();
    const createUnitMutation = useMutation({
        mutationFn: (unit: UnitRequest) => createUnit(unit),
        onSuccess: (res) => {
            showToast(res.message, "success");
            queryClient.invalidateQueries({ queryKey: ["units"] });
        },
    });
    const updateUnitMutation = useMutation({
        mutationFn: ({ id, unit }: { id: number; unit: UnitRequest }) => updateUnit(id, unit),
        onSuccess: (res) => {
            showToast(res.message, "success");
            queryClient.invalidateQueries({ queryKey: ["units"] });
        },
    });
    const deleteUnitMutation = useMutation({
        mutationFn: (id: number) => deleteUnit(id),
        onSuccess: (res) => {
            showToast(res.message, "success");
            queryClient.invalidateQueries({ queryKey: ["units"] });
        },
    });
    return {
        createUnit: createUnitMutation.mutate,
        updateUnit: updateUnitMutation.mutate,
        deleteUnit: deleteUnitMutation.mutate,
        isPending: createUnitMutation.isPending || updateUnitMutation.isPending || deleteUnitMutation.isPending,

    };
};
