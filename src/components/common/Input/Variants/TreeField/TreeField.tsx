import classNames from "classnames/bind";
import styles from "../../Input.module.scss";
import { useState } from "react";
import Dropdown from "../../Shared/Dropdown";
import type { TreeFieldProps, TreeOption, Value } from "../../input.interface";
import Tag from "../../Shared/Tag";
import { FaAngleDown } from "react-icons/fa6";
import TreeNode from "./TreeNode";

const cx = classNames.bind(styles);

const TreeField = (props: TreeFieldProps) => {
  const {
    placeholder,
    options,
    multiple = false,
    value,
    onChange,
    cascade = false,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleRemove = (id: number) => {
    if (multiple) {
      const currentValues = Array.isArray(value) ? value : [];
      const nextValues = currentValues.filter((item: Value) => item.id !== id);
      onChange?.(nextValues);
    }
  };
  return (
    <div
      className={cx("tree-field", "field")}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={cx(`tree-field__${value ? "value" : "placeholder"}`)}>
        {multiple && Array.isArray(value)
          ? value.map((item: Value) => (
              <Tag
                key={item.id}
                tag={item.label}
                onRemove={() => handleRemove(item.id)}
                className={cx("tree-field__value__tag")}
              />
            ))
          : !Array.isArray(value) && value?.label
            ? value.label
            : placeholder}
      </div>
      <FaAngleDown />
      <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {options?.map((option: TreeOption) => (
          <TreeNode
            key={option.id}
            value={value}
            node={option}
            onChange={onChange}
            cascade={cascade}
            multiple={multiple}
          />
        ))}
      </Dropdown>
    </div>
  );
};
export default TreeField;
