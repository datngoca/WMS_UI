import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Product } from "../types";
import { createProduct, deleteProduct, updateProduct } from "../services/productService";
import { useToast } from "@/hooks/ToastContext/useToast";

export const useProductMutations = () => {
    const { showToast } = useToast();
    const queryClient = useQueryClient();
    const createProductMutation = useMutation({
        mutationFn: (product: Product) => createProduct(product),
        onSuccess: (res) => {
            showToast(res?.message, "success");
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
    });
    const updateProductMutation = useMutation({
        mutationFn: (product: Product) => updateProduct(product),
        onSuccess: (res) => {
            showToast(res?.message, "success");
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
    });
    const deleteProductMutation = useMutation({
        mutationFn: (id: string) => deleteProduct(id),
        onSuccess: (res) => {
            showToast(res?.message, "success");
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
    });
    return {
        createProduct: createProductMutation.mutate,
        updateProduct: updateProductMutation.mutate,
        deleteProduct: deleteProductMutation.mutate,
        isMutating: createProductMutation.isPending || updateProductMutation.isPending || deleteProductMutation.isPending,
    };
};
