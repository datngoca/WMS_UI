import classNames from "classnames/bind";
import styles from "./FormCategory.module.scss";
import type {
  Category,
  CategoryFormProps,
  CategoryRequest,
} from "../../types/category.interface";
import InputTest from "@/components/common/Input/Input";
import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Button from "@/components/common/Button";
import { FaAngleDown, FaPencilAlt, FaSave } from "react-icons/fa";
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
  const [showCascading, setShowCascading] = useState(false);




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
      <Form formState={formState} categories={categories} />

      <div className={cx("form-category__footer")}>
        {isEdit ? (
          <>
            {!isCreateMode && (
              <Button
                variant="outline"
                onClick={() => {
                  setIsEdit(false);
                  setShowCascading(false);
                }}
              >
                Cancel
              </Button>
            )}
            <Button
              variant="outline"
              leftIcon={<FaSave />}
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
