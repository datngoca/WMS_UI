import classNames from "classnames/bind";
import styles from "./Category.module.scss";
import Modal from "@/components/common/Modal";
import FormInput from "@/utils/FormInput";
import type { Category, CategoryRequest } from "@/features/manager/MasterData/components/Category/types/category.interface";
import { useForm } from "react-hook-form";
import Button from "@/components/common/Button";
import { getParentOptions } from "@/utils/formatData";
import type { Value } from "@/components/common/Input";
import { useCategoryMutations } from "./hooks/useCategoryMutations";

const cx = classNames.bind(styles);

interface CategoryModalProps {
    categories: Category[];
    isOpen: boolean;
    onClose: () => void;
    selectedCategory: Category | null;
}

const CategoryModal = ({ categories, isOpen, onClose, selectedCategory }: CategoryModalProps) => {
    const { createCategory, updateCategory } = useCategoryMutations();
    const formState: CategoryRequest = {
        name: selectedCategory?.name || "",
        description: selectedCategory?.description || "",
        parent: selectedCategory?.parent || null

    }
    const { control, handleSubmit } = useForm<CategoryRequest>({
        values: formState,
    });

    const onSubmit = (data: CategoryRequest) => {
        if (selectedCategory) {
            updateCategory({ id: selectedCategory.id, payload: data });
        } else {
            createCategory(data);
        }
        onClose();
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={selectedCategory ? "Edit Category" : "Add Category"} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput<CategoryRequest>
                    control={control}
                    name="name"
                    label="Name"
                    placeholder="Name"
                    type="text"
                    required
                />
                <FormInput<CategoryRequest>
                    control={control}
                    name="description"
                    label="Description"
                    placeholder="Description"
                    type="text"
                />
                <FormInput<CategoryRequest>
                    name="parent"
                    control={control}
                    type="tree"
                    label="Parent"
                    placeholder="Select parent"
                    options={getParentOptions(categories, null)}
                    transformToInput={(formValue) =>
                        formValue ? { id: formValue.id, label: formValue.name } : undefined
                    }
                    transformToForm={(inputValue: Value) => ({
                        id: inputValue.id,
                        name: inputValue.label,
                    })}
                />

                <div className={cx("category__modal__footer")}>
                    <Button type="button" color="secondary" onClick={onClose}>Cancel</Button>
                    <Button type="submit" color="primary" >Save</Button>
                </div>
            </form>
        </Modal>
    );
}
export default CategoryModal;
