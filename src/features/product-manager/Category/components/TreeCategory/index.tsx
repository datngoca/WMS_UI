import classNames from "classnames/bind";
import styles from "./TreeCategory.module.scss";
import type { Category } from "../../types/category.interface";
import CategoryItem from "./CategoryItem";

const cx = classNames.bind(styles);

interface TreeCategoryProps {
  data: Category[];
  onSelectCategory: (category: Category) => void;
  activeCategory: Category | null;
  onDelete: (category: Category) => void;
  onOpenForm: () => void;
}

const TreeCategory = ({ data, onSelectCategory, activeCategory, onDelete, onOpenForm }: TreeCategoryProps) => {
  return (
    <div className={cx("tree")}>
      {data.map((category) =>
        <CategoryItem
          key={category.id}
          category={category}
          onSelectCategory={onSelectCategory}
          activeCategory={activeCategory}
          onDelete={onDelete}
          onOpenForm={onOpenForm}
        />
      )}
    </div>
  );
};
export default TreeCategory;
