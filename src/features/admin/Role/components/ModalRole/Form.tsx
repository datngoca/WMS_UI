import { useForm } from "react-hook-form";
import type { RoleRequest } from "../../types/role.interface";
import FormInput from "@/utils/FormInput";
import styles from "./RoleModal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface FormProps {
  formState: RoleRequest;
  onSubmit: (data: RoleRequest) => void;
}

const Form = ({ formState, onSubmit }: FormProps) => {
  const { control, handleSubmit } = useForm<RoleRequest>({
    values: formState,
  });

  const handleSubmitForm = (data: RoleRequest) => {
    onSubmit(data);
  };

  return (
    <form
      id="role-form"
      onSubmit={handleSubmit(handleSubmitForm)}
      className={cx("form-role")}
    >
      <FormInput<RoleRequest>
        name="name"
        control={control}
        type="text"
        label="Name"
        required
      />

      <FormInput<RoleRequest>
        name="description"
        control={control}
        type="text"
        label="Description"
      />
    </form>
  );
};

export default Form;
