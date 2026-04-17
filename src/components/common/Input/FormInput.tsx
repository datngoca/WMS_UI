import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";
import Input from "./Input";
import type { InputProps } from "./input.interface";

/**
 * Phân phối Omit qua từng thành viên của union type.
 * Omit<A | B, K> → chỉ giữ props chung → MẤT props riêng (options, prefixIcon...)
 * DistributiveOmit<A | B, K> → Omit<A, K> | Omit<B, K> → GIỮ props riêng
 */
type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

/**
 * FormInput — Wrapper tích hợp Input component với React Hook Form.
 *
 * Props:
 * - name, control: từ React Hook Form
 * - transformToInput: chuyển đổi value từ form state → Input value (hiển thị)
 * - transformToForm: chuyển đổi value từ Input → form state (lưu trữ)
 * - Các props còn lại truyền thẳng xuống Input
 */
type FormInputProps<T extends FieldValues> = DistributiveOmit<InputProps, "name" | "value" | "onChange"> & {
  name: Path<T>;
  control: Control<T>;
  transformToInput?: (formValue: any) => any;
  transformToForm?: (inputValue: any) => any;
};

const FormInput = <T extends FieldValues>({
  name,
  control,
  transformToInput,
  transformToForm,
  ...inputProps
}: FormInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <Input
          ref={ref}
          {...(inputProps as InputProps)}
          value={transformToInput ? transformToInput(value) : value}
          onChange={(val: any) => {
            const formValue = transformToForm ? transformToForm(val) : val;
            onChange(formValue);
          }}
          error={error?.message}
        />
      )}
    />
  );
};

export default FormInput;
