import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";
import type { Product } from "../../types/product.interface";
import FormInput from "@/utils/FormInput";
import { FaTrash } from "react-icons/fa";
import { Fragment } from "react";
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
        type="button"
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
      </div>
      <div
        className={cx(
          "modal-product__card__content",
          "modal-product__card__content--specs",
        )}
      >
        {fields.map((item, itemIndex) => (
          <Fragment key={item.id}>
            <FormInput<Product>
              name={`detailedSpecs.${groupIndex}.items.${itemIndex}.label` as any}
              control={control}
              type="text"
              placeholder="Label"
            />
            <FormInput<Product>
              name={`detailedSpecs.${groupIndex}.items.${itemIndex}.value` as any}
              control={control}
              type="text"
              placeholder="Value"
            />
            <Button
              type="button"
              variant="ghost"
              color="destructive"
              onClick={() => remove(itemIndex)}
            >
              <FaTrash />
            </Button>
          </Fragment>
        ))}
      </div>
      <div className={cx("modal-product__card__content__footer")}>
        <Button
          type="button"
          variant="ghost"
          className={cx("modal-product__card__content__action")}
          onClick={() => append({ label: "", value: "" })}
        >
          Add row
        </Button>
        <Button variant="ghost" color="destructive" onClick={onRemove} leftIcon={<FaTrash />} className={cx("modal-product__card__content__action")} >
          Delete Group
        </Button>
      </div>
    </div>
  );
};

export default SectionDetailSpecification;
