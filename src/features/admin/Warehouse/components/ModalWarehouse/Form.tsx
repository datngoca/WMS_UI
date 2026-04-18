import { useForm } from "react-hook-form";
import type { WarehouseRequest } from "../../types/warehouse.interface";
import FormInput from "@/utils/FormInput";
import styles from "./ModalWarehouse.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface FormProps {
  formState: WarehouseRequest;
  onSubmit: (data: WarehouseRequest) => void;
}

const Form = ({ formState, onSubmit }: FormProps) => {
  const { control, handleSubmit } = useForm<WarehouseRequest>({
    values: formState,
  });

  const handleSubmitForm = (data: WarehouseRequest) => {
    onSubmit(data);
  };

  return (
    <form
      id="warehouse-form"
      onSubmit={handleSubmit(handleSubmitForm)}
      className={cx("form-warehouse")}
    >
      <FormInput<WarehouseRequest>
        name="name"
        control={control}
        type="text"
        label="Name"
        required
      />

      <FormInput<WarehouseRequest>
        name="address"
        control={control}
        type="text"
        label="Address"
      />

      <FormInput<WarehouseRequest>
        name="capacity"
        control={control}
        type="number"
        label="Capacity"
      />
    </form>
  );
};

export default Form;
