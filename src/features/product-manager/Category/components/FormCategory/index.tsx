import classNames from "classnames/bind";
import styles from "./FormCategory.module.scss";
import type { Category, CategoryFormProps, CategoryFormValues, CategoryOption } from "../../types/category.interface";
import Input from "@/components/common/Input";
import InputTest from "@/components/common/Input/Input";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Button from "@/components/common/Button";
import { FaAngleDown, FaPencilAlt, FaSave } from "react-icons/fa";
import CascadingCategorySelect from "../CascadingCategorySelect";
import { getParentOptions } from "@/utils/formatData";
import { CategoryMapper } from "@/utils/formatData";
const cx = classNames.bind(styles);
import type { TreeOption } from "@/components/common/Input/input.interface";

const mapToTreeOptions = (options: CategoryOption[]): TreeOption[] => {
  return options.map((opt) => ({
    id: opt.id as number,
    label: opt.name,
    children: opt.children ? mapToTreeOptions(opt.children) : [],
  }));
};



const ENTRY_FORM: CategoryFormValues = {
  name: "",
  description: "",
  parent: null,
}

const getFormDataFromCategory = (category: Category | null): CategoryFormValues => {
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

const FormCategory = ({ categories, category, onClose, onCreate, onUpdate }: CategoryFormProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [showCascading, setShowCascading] = useState(false);

  const initialFormData = getFormDataFromCategory(category);
  const [formState, setFormState] = useState<CategoryFormValues>(initialFormData);


  const handleFormChange = <K extends keyof CategoryFormValues>(
    field: K,
    value: CategoryFormValues[K],
  ) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectParentCategory = (selectedCategory: CategoryOption) => {
    setFormState((prev) => ({ ...prev, parent: { id: selectedCategory.id, name: selectedCategory.name } }));
    setShowCascading(false);
  };

  const handleCloseForm = () => {
    onClose();
    setIsEdit(false);
    setShowCascading(false);
  };

  const isCreateMode = !category;

  useEffect(() => {
    // Nếu tạo mới -> tự động bật isEdit. Nếu view -> khóa isEdit chờ bấm Edit.
    setIsEdit(isCreateMode);
    setShowCascading(false);
    setFormState(getFormDataFromCategory(category));
  }, [category, isCreateMode]);

  const handleSubmit = () => {
    const categoryRequest = CategoryMapper.toCategoryRequest(formState);
    if (category) {
      onUpdate(category.id, categoryRequest);
    } else {
      onCreate(categoryRequest);
    }
    setIsEdit(false);
  };

  return (
    <div className={cx("form-category")}>
      <div className={cx("form-category__header")}>
        <h1 className={cx("form-category__title")}>
          {isCreateMode ? "Add New Category" : "Category Information"}
        </h1>
        <button onClick={handleCloseForm} className={cx("form-category__header__close")}>
          <FaXmark />
        </button>
      </div>
      <div className={cx("form-category__content")}>
        <div className={cx("form-category__content__item")}>
          <InputTest type="text" label="Name" value={formState.name} readOnly={!isEdit} onChange={(value) => handleFormChange("name", value as string)} />
        </div>
        <div className={cx("form-category__content__item")}>
          <InputTest type="text" label="Description" value={formState.description} readOnly={!isEdit} onChange={(value) => handleFormChange("description", value as string)} />
        </div>
        {category?.depth !== 0 && (
          <div className={cx("form-category__content__item")} onClick={() => setShowCascading(!showCascading)}>
            {/* <label htmlFor="parent_id">Parent Category</label> */}
            {/* <div className={cx("form-category__content__item__input", {
              "form-category__content__item__input--readOnly": !isEdit
            })}>
              {formState?.parent?.name}
              <FaAngleDown />
            </div> */}
            <InputTest
              required
              label="Parent Category"
              readOnly={!isEdit}
              type="tree"
              value={formState.parent?.name}
              placeholder="Select parent category"
              options={mapToTreeOptions(getParentOptions(categories, category?.id ?? null))}
              onChange={(value) => handleSelectParentCategory(value as CategoryOption)}
            />
            {/* {isEdit && showCascading && (
              <CascadingCategorySelect
                categories={getParentOptions(categories, category?.id ?? null)}
                onSelectCategory={handleSelectParentCategory}
                className={cx("form-category__content__item__cascading")}
              />
            )} */}
          </div>
        )}
      </div>
      <div className={cx("form-category__footer")}>
        {isEdit ? (
          <>
            {!isCreateMode && (
              <Button variant="outline" onClick={() => {
                setIsEdit(false);
                setFormState(getFormDataFromCategory(category));
                setShowCascading(false);
              }}>
                Cancel
              </Button>
            )}
            <Button variant="outline" onClick={handleSubmit} leftIcon={<FaSave />}>
              Save
            </Button>
          </>
        ) : (
          <Button variant="outline" onClick={() => setIsEdit(true)} rightIcon={<FaPencilAlt />}>
            Edit
          </Button>
        )}
      </div>
    </div>
  );
};

export default FormCategory;
