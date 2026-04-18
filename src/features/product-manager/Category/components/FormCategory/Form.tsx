import { useForm } from "react-hook-form";
import type { Category, CategoryRequest } from "../../types/category.interface";
import FormInput from "@/utils/FormInput";
import type { Value } from "@/components/common/Input";
import { getParentOptions } from "@/utils/formatData";

interface FormProps {
  id?: number;
  formState: CategoryRequest;
  categories: Category[];
  readOnly?: boolean;
  onSubmit: (data: CategoryRequest) => void;
}

const Form = ({ id, formState, categories, readOnly, onSubmit }: FormProps) => {
  const { control, handleSubmit } = useForm<CategoryRequest>({
    values: formState,
  });

  const handleSubmitForm = (data: CategoryRequest) => {
    onSubmit(data);
  };

  return (
    <form id="category-form" onSubmit={handleSubmit(handleSubmitForm)}>
      <FormInput<CategoryRequest>
        name="name"
        control={control}
        type="text"
        label="Name"
        readOnly={readOnly}
      />

      <FormInput<CategoryRequest>
        name="description"
        control={control}
        type="text"
        label="Description"
        readOnly={readOnly}
      />

      <FormInput<CategoryRequest>
        name="parent"
        control={control}
        type="tree"
        readOnly={readOnly}
        label="Parent"
        placeholder="Select parent"
        options={getParentOptions(categories, id || null)}
        transformToInput={(formValue) =>
          formValue ? { id: formValue.id, label: formValue.name } : undefined
        }
        transformToForm={(inputValue: Value) => ({
          id: inputValue.id,
          name: inputValue.label,
        })}
      />
    </form>
  );
};

export default Form;
