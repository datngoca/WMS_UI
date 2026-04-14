import classNames from "classnames/bind";
import styles from "./CascadingCategorySelect.module.scss";
import type { CategoryOption } from "../../types/category.interface";
import CascadingCategoryItem from "./CascadingCategoryItem";

const cx = classNames.bind(styles);

interface CascadingCategorySelectProps {
    categories: CategoryOption[];
    onSelectCategory: (category: CategoryOption) => void;
    className?: string;
}

const CascadingCategorySelect = ({ categories, onSelectCategory, className }: CascadingCategorySelectProps) => {
    const categoriesOption = [{ id: null, name: "Root", children: [] }, ...categories]
    return (
        <div className={cx("cascading-category-select", className)}>
            {categoriesOption.map((option) => (
                <CascadingCategoryItem
                    key={option.id}
                    category={option}
                    onSelectCategory={onSelectCategory}
                />
            ))}
        </div>
    );
};

export default CascadingCategorySelect;
