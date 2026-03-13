import axiosInstance from "@/api/axiosInstance";
import type { Role } from "../types/role.interface";

export const fetchRoles = async ():Promise<Role[]> =>{
    const response = await axiosInstance.get<Role[]>('/role');
    return response;
}
    