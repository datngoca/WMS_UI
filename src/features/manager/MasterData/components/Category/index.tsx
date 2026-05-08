import TableCategory from "./Table";
import { useCategory } from "./hooks/useCategory";
import CategoryModal from "./Modal";
import { useCategoryModal } from "./hooks/useCategoryModal";

const Category = () => {
    const { data: categories } = useCategory();
    const { selectedCategory, handleEditCategory, isModalOpen, handleCloseModal } = useCategoryModal();
    return (
        <div>
            <TableCategory categories={categories || []} onEdit={handleEditCategory} />
            <CategoryModal isOpen={isModalOpen} onClose={handleCloseModal} categories={categories || []} selectedCategory={selectedCategory} />
        </div>
    );
}

export default Category;