import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";
import type { Product } from "../../types/product.interface";
import FormInput from "@/utils/FormInput";
import Button from "@/components/common/Button";
import { Fragment } from "react";
import { FaTrash } from "react-icons/fa";
import { useFieldArray, type Control } from "react-hook-form";

const cx = classNames.bind(styles);

interface SectionBasicSpecificationsProps {
  control: Control<Product>;
}

const SectionBasicSpecifications = ({
  control,
}: SectionBasicSpecificationsProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "specs",
  });

  return (
    <div className={cx("modal-product__card")}>
      <div className={cx("modal-product__card__title")}>
        Basic Specifications
      </div>

      <div
        className={cx(
          "modal-product__card__content",
          "modal-product__card__content--specs",
        )}
      >
        {fields.map((field, index) => (
          <Fragment key={field.id}>
            <FormInput<Product>
              name={`specs.${index}.label` as any}
              control={control}
              type="text"
              placeholder="Enter specification label"
            />
            <FormInput<Product>
              name={`specs.${index}.value` as any}
              control={control}
              type="text"
              placeholder="Enter specification value"
            />
            <Button
              type="button"
              variant="ghost"
              color="destructive"
              onClick={() => remove(index)}
            >
              <FaTrash />
            </Button>
          </Fragment>
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        onClick={() => append({ label: "", value: "" })}
        className={cx("modal-product__card__action")}
      >
        Add Specification
      </Button>
    </div>
  );
};

export default SectionBasicSpecifications;
