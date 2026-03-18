import { useQuery } from "@tanstack/react-query";
import { fetchRoleById, fetchRoles } from "../services/roleService";

export const useRoles = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: fetchRoles,
    staleTime: 5 * 60 * 1000,
    select: (res) => res.data ?? [],
  });
};

// Lấy chi tiết theo ID
export const useRoleDetail = (id: number) => {
  return useQuery({
    queryKey: ["roles", id], // Key phải chứa id để phân biệt cache từng role
    queryFn: () => fetchRoleById(id),
    enabled: !!id, // Chỉ chạy khi có id (tránh lỗi khi id là undefined)
    staleTime: 5 * 60 * 1000,
    select: (res) => res.data
  });
};
