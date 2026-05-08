import { useForm } from "react-hook-form";
import type { Product } from "../../types/product.interface";
import SectionBasicInfo from "./SectionBasicInfo";
import SectionUnitAndPrice from "./SectionUnitAndPrice";
import SectionBasicSpecifications from "./SectionBasicSpecifications";
import SectionDetailSpecification from "./SectionDetailSpecification";
import SectionOptions from "./SectionOptions";
import TiptapEditor from "../TiptapEditor";
import { Controller } from "react-hook-form";
import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";

const cx = classNames.bind(styles);

interface FormProps {
  formState: Product;
  onSubmit: (data: Product) => void;
}

const Form = ({ formState, onSubmit }: FormProps) => {
  const { control, handleSubmit } = useForm<Product>({
    values: formState,
  });

  return (
    <form id="product-form" onSubmit={handleSubmit(onSubmit)} className={cx("modal-product")}>
      <SectionBasicInfo control={control} />
      <SectionUnitAndPrice control={control} />

      <div className={cx("modal-product__card")}>
        <div className={cx("modal-product__card__title")}>Description</div>
        <div className={cx("modal-product__card__content__item", "modal-product__card__content__item--full-width")}>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TiptapEditor value={field.value} onChange={field.onChange} />
            )}
          />
        </div>
      </div>

      <SectionOptions control={control} />

      <SectionBasicSpecifications control={control} />

      <SectionDetailSpecification control={control} />
    </form>
  );
};

export default Form;
