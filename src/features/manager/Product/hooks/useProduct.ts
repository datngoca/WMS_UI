import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchProductById } from "../services/productService";

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });
};

export const useProduct = (id: number | null) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProductById(id as number),
        enabled: !!id,
        select(response) {
            return response.data
        },

    });
};