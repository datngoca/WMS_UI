import FormInput from "@/utils/FormInput";
import type { Value } from "@/components/common/Input";
import type { UserRequest } from "../../types/user.interface";
import { useForm } from "react-hook-form";
import type { ModalAction } from "../../types/user.interface";
import { useRoles } from "@/features/admin/Role/hooks/useRoles";
import classNames from "classnames/bind";
import styles from "./ModalUser.module.scss";

const cx = classNames.bind(styles);

interface FormProps {
  formState: UserRequest;
  readOnly?: boolean;
  action: ModalAction;
  onSubmit: (data: UserRequest) => void;
}

const Form = ({ formState, readOnly, action, onSubmit }: FormProps) => {
  const { data: roles } = useRoles();

  const { control, handleSubmit } = useForm<UserRequest>({
    values: formState,
  });

  const handleSubmitForm = (data: UserRequest) => {
    onSubmit(data);
  };
  return (
    <form
      id="user-form"
      onSubmit={handleSubmit(handleSubmitForm)}
      className={cx("form-user")}
    >
      <FormInput<UserRequest>
        name="fullName"
        control={control}
        type="text"
        label="Full Name"
        readOnly={readOnly}
        required
      />

      <FormInput<UserRequest>
        name="username"
        control={control}
        type="text"
        label="User Name"
        readOnly={readOnly}
        required
      />

      <FormInput<UserRequest>
        name="email"
        control={control}
        type="email"
        label="Email"
        readOnly={readOnly}
        required
      />

      {action?.type === "add" && (
        <FormInput<UserRequest>
          name="password"
          control={control}
          type="password"
          label="Password"
          readOnly={readOnly}
          required
        />
      )}

      <FormInput<UserRequest>
        name="roles"
        control={control}
        type="select"
        multiple={true}
        transformToInput={(formValue) =>
          formValue?.map((role: any) => ({
            id: role.id,
            label: role.name,
          }))
        }
        transformToForm={(inputValue: Value[]) =>
          inputValue?.map((item) => ({
            id: item.id,
            name: item.label,
          }))
        }
        options={
          roles?.map((role) => ({
            id: role.id,
            label: role.name,
          })) || []
        }
        label="Roles"
        placeholder="Select roles"
        className={cx("form-user--full-width")}
      />
    </form>
  );
};

export default Form;
