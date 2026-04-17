import classNames from "classnames/bind";
import styles from "./CategoryPage.module.scss";
import { useCategory } from "../hooks/useCategory";
import TreeCategory from "../components/TreeCategory";
import FormCategory from "../components/FormCategory";
import type { Category, CategoryRequest } from "../types/category.interface";
import { useState } from "react";
import { useCategoryMutations } from "../hooks/useCategoryMutations";
import { FaPlus } from "react-icons/fa";
import Button from "@/components/common/Button";
const cx = classNames.bind(styles);

const CategoryPage = () => {
    const { data: categories } = useCategory();
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(
        null,
    );
    const { createCategory, updateCategory, deleteCategory } = useCategoryMutations();

    const handleSelectCategory = (category: Category) => {
        setSelectedCategory(category);
    };

    const handleAddCategory = () => {
        setIsOpenForm(true);
        setSelectedCategory(null);
    };

    const handleCreateCategory = (category: CategoryRequest) => {
        createCategory(category);
    };

    const handleUpdateCategory = (id: number, category: CategoryRequest) => {
        updateCategory({ id, payload: category });
    };

    const handleDeleteCategory = (category: Category) => {
        deleteCategory(category.id);
    };

    return (
        <div className={cx("category")}>
            <div className={cx("category__header")}>
                <h1 className={cx("category__title")}>Category</h1>
                <Button
                    variant="outline"
                    color="primary"
                    size="sm"
                    onClick={handleAddCategory}
                    leftIcon={<FaPlus />}
                >
                    Add Category
                </Button>
            </div>
            <div className={cx("category__content")}>
                <div className={cx("category__content__left")}>
                    <TreeCategory
                        data={categories || []}
                        onSelectCategory={handleSelectCategory}
                        activeCategory={selectedCategory || null}
                        onDelete={handleDeleteCategory}
                        onOpenForm={() => setIsOpenForm(true)}
                    />
                </div>
                <div
                    className={cx("category__content__right", {
                        "category__content__right--hide": !isOpenForm,
                    })}
                >
                    <FormCategory
                        category={selectedCategory}
                        categories={categories || []}
                        onClose={() => setIsOpenForm(false)}
                        onCreate={handleCreateCategory}
                        onUpdate={handleUpdateCategory}
                    />
                </div>
            </div>
        </div>
    );
};
export default CategoryPage;