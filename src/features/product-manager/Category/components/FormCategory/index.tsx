import classNames from "classnames/bind";
import styles from "./FormCategory.module.scss";
import type { Category } from "../../types/category.interface";
import Input from "@/components/Common/Input";
import { useState } from "react";

const cx = classNames.bind(styles);

interface FormCategoryProps {
  category: Category | null;
  onClose: () => void;
}

const FormCategory = ({ category, onClose }: FormCategoryProps) => {
  const [isRoot, setIsRoot] = useState(!category?.parentId);

  return (
    <div className={cx("form-category")}>
      <div className={cx("form-category__header")}>
        <h1>Category Information</h1>
        <button onClick={onClose}>Close</button>
      </div>
      <div className={cx("form-category__content")}>
        <div className={cx("form-category__content__item")}>
          <label htmlFor="name">Name</label>
          <Input type="text" value={category?.name} readOnly={true} />
        </div>
        <div className={cx("form-category__content__item")}>
          <label htmlFor="description">Description</label>
          <Input type="text" value={category?.description} readOnly={true} />
        </div>
        {category?.depth !== 0 && (
          <div className={cx("form-category__content__item")}>
            <label htmlFor="parent_id">Parent Category</label>
            <Input type="select" options={[]} value={category?.parentName} readOnly={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FormCategory;
