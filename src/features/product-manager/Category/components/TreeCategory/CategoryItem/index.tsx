import classNames from "classnames/bind";
import styles from "./CategoryItem.module.scss";
import type { Category } from "../../../types/category.interface";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import Button from "@/components/common/Button";

const cx = classNames.bind(styles);

interface CategoryItemProps {
  category: Category;
  onSelectCategory: (category: Category) => void;
  activeCategory: Category | null;
  className?: string;
  onDelete: (category: Category) => void;
  onOpenForm: () => void;
}

const CategoryItem = ({ category, onSelectCategory, activeCategory, className, onDelete, onOpenForm }: CategoryItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = category.children && category.children.length > 0;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleSelect = () => {
    onOpenForm();
    onSelectCategory(category);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(category);
  };

  return (
    <div className={cx("category-item", className, {
      "category-item--active": activeCategory?.id === category.id,
    })}>
      <div className={cx("category-item__content")} onClick={handleSelect}>
        <div className={cx("category-item__content__toggle")} onClick={handleToggle}>
          {hasChildren && (
            <FaAngleRight
              className={cx("category-item__content__toggle__icon", {
                "category-item__content__toggle__icon--open": isOpen,
              })}
            />
          )}
        </div>

        <div className={cx("category-item__content__info")}>
          <div className={cx("category-item__content__info__name")}>
            {category.name}
          </div>
          <div className={cx("category-item__content__info__description")}>
            {category.description}
          </div>
        </div>
        <div className={cx("category-item__content__action")}>
          <Button
            variant="ghost"
            color="destructive"
            size="sm"
            onClick={handleDelete}
          >
            <FaTrash />
          </Button>
        </div>
      </div>
      {isOpen && hasChildren && (
        <div className={cx("category-item__children")}>
          {category.children.map((child) => (
            <CategoryItem
              key={child.id}
              category={child}
              activeCategory={activeCategory}
              onSelectCategory={onSelectCategory}
              onDelete={onDelete}
              onOpenForm={onOpenForm}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default CategoryItem;
