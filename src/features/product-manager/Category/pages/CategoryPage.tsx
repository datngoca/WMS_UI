import classNames from "classnames/bind";
import styles from "./CategoryPage.module.scss";
import { useCategory } from "../hooks/useCategory";
import TreeCategory from "../components/TreeCategory";
import FormCategory from "../components/FormCategory";
import type { Category } from "../types/category.interface";
import { useState } from "react";

const cx = classNames.bind(styles);

const CategoryPage = () => {
  const { data: categories } = useCategory();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };
  return (
    <div className={cx("category")}>
      <h1 className={cx("category__title")}>Category</h1>
      <div className={cx("category__content")}>
        <div className={cx("category__content__left")}>
          <TreeCategory
            data={categories || []}
            onSelectCategory={handleSelectCategory}
          />
        </div>
        <div className={cx("category__content__right")}>
          <FormCategory category={selectedCategory} />
        </div>
      </div>
    </div>
  );
};
export default CategoryPage;
