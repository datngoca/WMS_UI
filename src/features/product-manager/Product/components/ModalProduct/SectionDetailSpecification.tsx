import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";
import type { Product } from "../../types/product.interface";
import FormInput from "@/utils/FormInput";
import { FaTrash } from "react-icons/fa";
import Button from "@/components/common/Button";
import { useFieldArray, type Control } from "react-hook-form";

const cx = classNames.bind(styles);

interface SectionDetailSpecificationProps {
  control: Control<Product>;
}

const SectionDetailSpecification = ({
  control,
}: SectionDetailSpecificationProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "detailedSpecs",
  });

  return (
    <div className={cx("modal-product__card")}>
      <div className={cx("modal-product__card__title")}>
        Detail Specification
      </div>
      {fields.map((field, index) => (
        <DetailGroup
          key={field.id}
          groupIndex={index}
          control={control}
          onRemove={() => remove(index)}
        />
      ))}
      <Button
        variant="ghost"
        className={cx("modal-product__card__action")}
        onClick={() => append({ groupName: "", items: [{ label: "", value: "" }] })}
      >
        Add Specification Group
      </Button>
    </div>
  );
};

const DetailGroup = ({ groupIndex, control, onRemove }: any) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `detailedSpecs.${groupIndex}.items`,
  });

  return (
    <div className={cx("modal-product__card__group")}>
      <div
        className={cx(
          "modal-product__card__content",
          "modal-product__card__content--specs",
        )}
      >
        <FormInput<Product>
          name={`detailedSpecs.${groupIndex}.groupName` as any}
          control={control}
          type="text"
          placeholder="Group name (e.g., Display, Performance)"
          className={cx(
            "modal-product__card__content__item",
            "modal-product__card__content__item--full-width",
          )}
        />
        <Button variant="ghost" color="destructive" onClick={onRemove}>
          <FaTrash />
        </Button>
      </div>

      {fields.map((item, itemIndex) => (
        <div
          key={item.id}
          className={cx(
            "modal-product__card__content",
            "modal-product__card__content--specs",
          )}
        >
          <FormInput<Product>
            name={`detailedSpecs.${groupIndex}.items.${itemIndex}.label` as any}
            control={control}
            type="text"
            placeholder="Label"
            className={cx("modal-product__card__content__item")}
          />
          <FormInput<Product>
            name={`detailedSpecs.${groupIndex}.items.${itemIndex}.value` as any}
            control={control}
            type="text"
            placeholder="Value"
            className={cx("modal-product__card__content__item")}
          />
          <Button
            variant="ghost"
            color="destructive"
            onClick={() => remove(itemIndex)}
          >
            <FaTrash />
          </Button>
        </div>
      ))}
      <Button
        variant="ghost"
        className={cx("modal-product__card__content__action")}
        onClick={() => append({ label: "", value: "" })}
      >
        Add row
      </Button>
    </div>
  );
};

export default SectionDetailSpecification;
