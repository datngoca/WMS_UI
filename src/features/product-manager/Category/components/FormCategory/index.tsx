import classNames from "classnames/bind";
import styles from "./FormCategory.module.scss";
import type {
  CategoryFormProps,
  CategoryRequest,
} from "../../types/category.interface";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Button from "@/components/common/Button";
import { FaPencilAlt, FaSave } from "react-icons/fa";
const cx = classNames.bind(styles);
import Form from "./Form";

const FormCategory = ({
  categories,
  category,
  onClose,
  onCreate,
  onUpdate,
}: CategoryFormProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleCloseForm = () => {
    onClose();
    setIsEdit(false);
  };

  const isCreateMode = !category;

  useEffect(() => {
    // Nếu tạo mới -> tự động bật isEdit. Nếu view -> khóa isEdit chờ bấm Edit.
    setIsEdit(isCreateMode);
  }, [category, isCreateMode]);

  const formState: CategoryRequest = {
    name: category?.name || "",
    description: category?.description || "",
    parent: category?.parent || null,
  };

  return (
    <div className={cx("form-category")}>
      <div className={cx("form-category__header")}>
        <h1 className={cx("form-category__title")}>
          {isCreateMode ? "Add New Category" : "Category Information"}
        </h1>
        <button
          onClick={handleCloseForm}
          className={cx("form-category__header__close")}
        >
          <FaXmark />
        </button>
      </div>
      <Form
        id={category?.id}
        formState={formState}
        categories={categories}
        readOnly={!isEdit}
        onSubmit={(data) => {
          if (isCreateMode) {
            onCreate(data);
          } else if (category) {
            onUpdate(category.id, data);
          }
        }}
      />

      <div className={cx("form-category__footer")}>
        {isEdit ? (
          <>
            {!isCreateMode && (
              <Button
                variant="outline"
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                Cancel
              </Button>
            )}
            <Button
              variant="outline"
              leftIcon={<FaSave />}
              type="submit"
              form="category-form"
            >
              Save
            </Button>
          </>
        ) : (
          <Button
            variant="outline"
            onClick={() => setIsEdit(true)}
            rightIcon={<FaPencilAlt />}
          >
            Edit
          </Button>
        )}
      </div>
    </div>
  );
};

export default FormCategory;
