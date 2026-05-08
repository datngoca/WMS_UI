import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";
import FormInput from "@/utils/FormInput";
import type { Product } from "../../types/product.interface";
import type { Control } from "react-hook-form";
import { useFieldArray } from "react-hook-form";
import { FaTrash } from "react-icons/fa";
import { Fragment } from "react";
import Button from "@/components/common/Button";

const cx = classNames.bind(styles);

interface SectionOptionsProps {
  control: Control<Product>;
}

const OPTION_TYPES = [
  { id: 1, label: "Color", code: "color" },
  { id: 2, label: "Button", code: "button" },
];

const SectionOptions = ({ control }: SectionOptionsProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  return (
    <div className={cx("modal-product__card")}>
      <div className={cx("modal-product__card__title")}>Options</div>
      {fields.map((field, index) => (
        <OptionGroup
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
        onClick={() =>
          append({ name: "", type: "button", values: [{ label: "", value: "" }] })
        }
      >
        Add Option Group
      </Button>
    </div>
  );
};

interface OptionGroupProps {
  groupIndex: number;
  control: Control<Product>;
  onRemove: () => void;
}

const OptionGroup = ({ groupIndex, control, onRemove }: OptionGroupProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `options.${groupIndex}.values`,
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
          name={`options.${groupIndex}.name` as any}
          control={control}
          type="text"
          placeholder="Option name (e.g., Color, Storage)"
        />
        <FormInput<Product>
          name={`options.${groupIndex}.type` as any}
          control={control}
          type="select"
          options={OPTION_TYPES} //TODO: replace with cached options from api
          placeholder="Option Type"
          transformToInput={(val: string) => {
            const option = OPTION_TYPES.find((o) => o.code === val);
            return option ? { id: option.id, label: option.label } : undefined;
          }}
          transformToForm={(val: any) => {
            // val might be { id: 1, label: 'Color' } 
            return val ? OPTION_TYPES.find(o => o.id === val.id)?.code : "button";
          }}
          className={cx("modal-product__card__content__item", "modal-product__card__content__item--full-width")}
        />
      </div>

      <div
        className={cx(
          "modal-product__card__content",
          "modal-product__card__content--specs"
        )}
      >
        {fields.map((item, itemIndex) => (
          <Fragment key={item.id}>
            <FormInput<Product>
              name={`options.${groupIndex}.values.${itemIndex}.label` as any}
              control={control}
              type="text"
              placeholder="Label (e.g., Red, 128GB)"
            />
            <FormInput<Product>
              name={`options.${groupIndex}.values.${itemIndex}.value` as any}
              control={control}
              type="text"
              placeholder="Value (e.g., #ff0000, 128GB)"
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
          onClick={() => append({ label: "", value: "" })}
          className={cx("modal-product__card__content__action")}
        >
          Add Value
        </Button>
        <Button variant="ghost" color="destructive" onClick={onRemove} leftIcon={<FaTrash />} className={cx("modal-product__card__content__action")} >
          Delete Group
        </Button>
      </div>

    </div>
  );
};

export default SectionOptions;