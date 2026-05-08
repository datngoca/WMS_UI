import axiosInstance from "@/api/axiosInstance";

export const getProductsBySlug = async (slug: string) => {
    const response = await axiosInstance.get(`/products/category/${slug}`);
    return response;
};