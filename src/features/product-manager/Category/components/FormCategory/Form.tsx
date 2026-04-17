import { useForm } from "react-hook-form";
import type { CategoryRequest } from "../../types/category.interface";
import InputTest from "@/components/common/Input/Input";

interface FormProps {
  name: string;
  description: string;
}

const Form = (formState: FormProps) => {
  const { setValue, handleSubmit, watch } = useForm<FormProps>({
    defaultValues: {
      name: formState.name,
      description: formState.description,
    },
  });

  const onSubmit = (data: FormProps) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputTest
        type="text"
        label="Name"
        value={watch("name")}
        onChange={(value) => setValue("name", value)}
      />
      <InputTest
        type="text"
        label="Description"
        value={watch("description")}
        onChange={(value) => setValue("description", value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
