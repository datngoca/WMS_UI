import { create } from "zustand";
import type { Unit } from "../types/unit.interface";

interface UnitModalState {
    selectedUnit: Unit | null;
    isModalOpen: boolean;
    handleAddUnit: () => void;
    handleEditUnit: (unit: Unit) => void;
    handleCloseModal: () => void;
}

export const useUnitModal = create<UnitModalState>((set) => ({
    selectedUnit: null,
    isModalOpen: false,
    handleAddUnit: () => set({ selectedUnit: null, isModalOpen: true }),
    handleEditUnit: (unit: Unit) => set({ selectedUnit: unit, isModalOpen: true }),
    handleCloseModal: () => set({ selectedUnit: null, isModalOpen: false }),
}));