import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/categoryService";

export const useCategory = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    staleTime: 1000 * 60 * 5,
    select: (data) => data.data,
  });
};
