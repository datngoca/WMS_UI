import { useQuery } from "@tanstack/react-query"
import { getUnitById, getUnits } from "../services/unitServices"

export const useUnits = () => {
    return useQuery({
        queryKey: ["units"],
        queryFn: getUnits,
        staleTime: 1000 * 60 * 5,
        select: (data) => data.data,
    })
}

export const useUnit = (id: number) => {
    return useQuery({
        queryKey: ["units", id],
        queryFn: () => getUnitById(id),
        select: (data) => data.data,
    })
}