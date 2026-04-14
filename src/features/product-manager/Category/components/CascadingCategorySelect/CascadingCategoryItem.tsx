import classNames from "classnames/bind";
import styles from "./CascadingCategorySelect.module.scss";
import type { CategoryOption } from "../../types/category.interface";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";

const cx = classNames.bind(styles);

interface CascadingCategoryItemProps {
    category: CategoryOption;
    onSelectCategory: (category: CategoryOption) => void;
}

const CascadingCategoryItem = ({ category, onSelectCategory }: CascadingCategoryItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = category.children && category.children.length > 0;

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleSelect = (e: React.MouseEvent) => {
        e.stopPropagation();
        onSelectCategory(category);
        setIsOpen(false);
    };

    return (
        <div className={cx("cascading-category-select__node")}>
            <div
                className={cx("cascading-category-select__item")}
                onClick={handleSelect}
            >
                <div
                    className={cx("cascading-category-select__item-icon", { "is-open": isOpen, "invisible": !hasChildren })}
                    onClick={handleToggle}
                >
                    {hasChildren && <FaAngleRight />}
                </div>
                <span className={cx("cascading-category-select__item-name")}>{category.name}</span>
            </div>

            {isOpen && hasChildren && (
                <div className={cx("cascading-category-select__children")}>
                    {category.children?.map((child) => (
                        <CascadingCategoryItem
                            key={child.id}
                            category={child}
                            onSelectCategory={onSelectCategory}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
export default CascadingCategoryItem;
