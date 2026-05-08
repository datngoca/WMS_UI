import { create } from "zustand";
import type { Category } from "../types/category.interface";

interface CategoryModalState {
    selectedCategory: Category | null;
    isModalOpen: boolean;
    handleAddCategory: () => void;
    handleEditCategory: (category: Category) => void;
    handleCloseModal: () => void;
}

export const useCategoryModal = create<CategoryModalState>((set) => ({
    selectedCategory: null,
    isModalOpen: false,
    handleAddCategory: () => set({ selectedCategory: null, isModalOpen: true }),
    handleEditCategory: (category) => set({ selectedCategory: category, isModalOpen: true }),
    handleCloseModal: () => set({ isModalOpen: false, selectedCategory: null })
}));