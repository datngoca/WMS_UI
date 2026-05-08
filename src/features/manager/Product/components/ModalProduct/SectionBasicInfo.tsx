import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";
import type { Product } from "../../types/product.interface";
import FormInput from "@/utils/FormInput";
import type { Control } from "react-hook-form";
import { useCategory } from "@/features/manager/MasterData";
import { getParentOptions } from "@/utils/formatData";

const cx = classNames.bind(styles);

interface SectionBasicInfoProps {
  control: Control<Product>;
}

const SectionBasicInfo = ({ control }: SectionBasicInfoProps) => {
  const { data: categories = [] } = useCategory();
  return (
    <div className={cx("modal-product__card")}>
      <div className={cx("modal-product__card__title")}>Basic Information</div>
      <div className={cx("modal-product__card__content")}>
        <div className={cx("modal-product__card__content__item")}>
          <FormInput<Product>
            name="sku"
            control={control}
            type="text"
            label="SKU"
            placeholder="Enter product SKU"
            required
          />
        </div>
        <div className={cx("modal-product__card__content__item")}>
          <FormInput<Product>
            name="name"
            control={control}
            type="text"
            label="Product Name"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className={cx("modal-product__card__content__item")}>
          <FormInput<Product>
            name="basePrice"
            control={control}
            type="number"
            label="Base Price"
            placeholder="Enter base price"
            required
          />
        </div>
        <div
          className={cx(
            "modal-product__card__content__item",
            "modal-product__card__content__item--full-width",
          )}
        >
          <FormInput<Product>
            name="categories"
            control={control}
            type="tree"
            label="Category"
            placeholder="Select product category"
            multiple={true}
            options={getParentOptions(categories, null)}
            transformToInput={(val) =>
              val?.map((c: any) => ({ id: c.id, label: c.name }))
            }
            transformToForm={(val) =>
              val?.map((v: any) => ({ id: v.id, name: v.label }))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SectionBasicInfo;
