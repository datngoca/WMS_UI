import { useForm } from "react-hook-form";
import type { Category, CategoryRequest } from "../../types/category.interface";
import FormInput from "@/components/common/Input/FormInput";
import type { TreeOption, Value } from "@/components/common/Input/input.interface";

interface FormProps {
  formState: CategoryRequest;
  categories: Category[];
}

const Form = ({ formState, categories }: FormProps) => {
  const { control, handleSubmit } = useForm<CategoryRequest>({
    values: formState,
  });

  const mapToTreeOptions = (options: Category[]): TreeOption[] => {
    return options.map((opt) => ({
      id: opt.id as number,
      label: opt.name,
      children: opt.children ? mapToTreeOptions(opt.children) : [],
    }));
  };

  const onSubmit = (data: CategoryRequest) => {
    console.log("Dữ liệu gửi đi:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput<CategoryRequest>
        name="name"
        control={control}
        type="text"
        label="Name"
      />

      <FormInput<CategoryRequest>
        name="description"
        control={control}
        type="text"
        label="Description"
      />

      <FormInput<CategoryRequest>
        name="parent"
        control={control}
        type="tree"
        label="Parent"
        options={mapToTreeOptions(categories)}
        transformToInput={(formValue) =>
          formValue
            ? { id: formValue.id, label: formValue.name }
            : undefined
        }
        transformToForm={(inputValue: Value) => ({
          id: inputValue.id,
          name: inputValue.label,
        })}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;