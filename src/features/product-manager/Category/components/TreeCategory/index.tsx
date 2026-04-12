import classNames from "classnames";
import styles from "./TreeCategory.module.scss";
import type { Category } from "../../types/category.interface";
import CategoryItem from "../CategoryItem";

const cx = classNames.bind(styles);

interface TreeCategoryProps {
  data: Category[];
  onSelectCategory: (category: Category) => void;
}

const TreeCategory = ({ data, onSelectCategory }: TreeCategoryProps) => {
  return (
    <div className={cx("tree")}>
      {data.map((category) => (
        <div
          key={category.id}
          className={cx("tree__item")}
          onClick={() => onSelectCategory(category)}
        >
          <CategoryItem category={category} />
        </div>
      ))}
    </div>
  );
};
export default TreeCategory;
