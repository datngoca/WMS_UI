import classNames from "classnames/bind";
import styles from "./FormCategory.module.scss";
import type { Category, CategoryOption, CategoryRequest } from "../../types/category.interface";
import Input from "@/components/Common/Input";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Button from "@/components/Common/Button";
import { FaAngleDown, FaPencilAlt, FaSave } from "react-icons/fa";
import CascadingCategorySelect from "../CascadingCategorySelect";
import { getParentOptions } from "@/utils/formatData";

const cx = classNames.bind(styles);

interface FormCategoryProps {
  categories: Category[];
  category: Category | null;
  onClose: () => void;
}

const ENTRY_FORM: CategoryRequest = {
  name: "",
  description: "",
  parent: {
    id: null,
    name: "",
  },
}

const getFormDataFromCategory = (category: Category | null): CategoryRequest => {
  if (!category) return ENTRY_FORM;
  return {
    name: category.name,
    description: category.description,
    parent: {
      id: category.parent?.id || null,
      name: category.parent?.name || "",
    },
  };
};

const FormCategory = ({ categories, category, onClose }: FormCategoryProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [showCascading, setShowCascading] = useState(false);

  const initialFormData = getFormDataFromCategory(category);
  const [formState, setFormState] = useState<CategoryRequest>(initialFormData);


  const handleFormChange = <K extends keyof Category>(
    field: K,
    value: Category[K],
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectParentCategory = (selectedCategory: CategoryOption) => {
    setFormState((prev) => ({ ...prev, parent: { id: selectedCategory.id, name: selectedCategory.name } }));
    setShowCascading(false);
  };

  useEffect(() => {
    setFormState(getFormDataFromCategory(category));
  }, [category]);

  return (
    <div className={cx("form-category")}>
      <div className={cx("form-category__header")}>
        <h1>Category Information</h1>
        <button onClick={onClose} className={cx("form-category__header__close")}>
          <FaXmark />
        </button>
      </div>
      <div className={cx("form-category__content")}>
        <div className={cx("form-category__content__item")}>
          <label htmlFor="name">Name</label>
          <Input type="text" value={formState.name} readOnly={!isEdit} onChange={(value) => handleFormChange("name", value as string)} />
        </div>
        <div className={cx("form-category__content__item")}>
          <label htmlFor="description">Description</label>
          <Input type="text" value={formState.description} readOnly={!isEdit} onChange={(value) => handleFormChange("description", value as string)} />
        </div>
        {category?.depth !== 0 && (
          <div className={cx("form-category__content__item")} onClick={() => setShowCascading(!showCascading)}>
            <label htmlFor="parent_id">Parent Category</label>
            <div className={cx("form-category__content__item__input", {
              "form-category__content__item__input--readOnly": !isEdit
            })}>
              {formState?.parent?.name}
              <FaAngleDown />
            </div>
            {isEdit && showCascading && (
              <CascadingCategorySelect
                categories={getParentOptions(categories, category?.id ?? null)}
                onSelectCategory={handleSelectParentCategory}
                className={cx("form-category__content__item__cascading")}
              />
            )}
          </div>
        )}
      </div>
      <div className={cx("form-category__footer")}>
        {isEdit ? (
          <Button variant="outline" onClick={() => setIsEdit(!isEdit)} leftIcon={<FaSave />}>Save</Button>
        ) : (
          <Button variant="outline" onClick={() => setIsEdit(!isEdit)} rightIcon={<FaPencilAlt />}>Edit</Button>
        )}
      </div>
    </div>
  );
};

export default FormCategory;
