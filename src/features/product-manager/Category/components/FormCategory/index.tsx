import classNames from "classnames/bind";
import styles from "./FormCategory.module.scss";
import type { Category } from "../../types/category.interface";

const cx = classNames.bind(styles);

interface FormCategoryProps {
  category: Category | null;
}

const FormCategory = ({ category }: FormCategoryProps) => {
  return (
    <div>
      <h1>Form Category</h1>
    </div>
  );
};

export default FormCategory;
