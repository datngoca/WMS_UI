import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ProductRequest } from "../types/product.interface";
import { createProduct, deleteProduct, updateProduct } from "../services/productService";
import { useToast } from "@/hooks/ToastContext/useToast";

export const useProductMutations = () => {
    const { showToast } = useToast();
    const queryClient = useQueryClient();
    const createProductMutation = useMutation({
        mutationFn: (product: ProductRequest) => createProduct(product),
        onSuccess: (res) => {
            showToast(res?.message, "success");
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
    });
    const updateProductMutation = useMutation({
        mutationFn: (params: { id: number, product: ProductRequest }) => updateProduct(params.id, params.product),
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
