import { useQuery } from "@tanstack/react-query";
import { getProductsBySlug } from "../services/product.service";

export const useGetProductsBySlug = (slug: string) => {
    return useQuery({
        queryKey: ["products", slug],
        queryFn: () => getProductsBySlug(slug),
        select: (response) => response.data,
    });
};