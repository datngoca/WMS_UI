import classNames from "classnames/bind";
import styles from "../Input.module.scss";
import type { Option, SelectFieldProps, Value } from "../input.interface";
import { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import Dropdown from "../Shared/Dropdown";
import Tag from "../Shared/Tag";
const cx = classNames.bind(styles);

const SelectField = (props: SelectFieldProps) => {
  const { options, value, onChange, placeholder, multiple } = props;
  const [isOpen, setIsOpen] = useState(false);

  // Xử lý value là array hay object
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: Option) => {
    if (multiple && Array.isArray(value)) {
      const isSelected = value.some((item: Value) => item.id === option.id);
      if (isSelected) {
        onChange?.(value.filter((item: Value) => item.id !== option.id));
      } else {
        onChange?.([...value, option]);
      }
    } else {
      onChange?.(option);
      setIsOpen(false);
    }
  };
  const handleRemove = (id: number) => {
    if (!Array.isArray(value)) return;
    onChange?.(value.filter((item: Option) => item.id !== id));
  };

  return (
    <div className={cx("select-field", "field")} onClick={handleToggle}>
      {/* Nếu có value thì hiện label/tags, không thì hiện placeholder */}
      <div className={cx("select-field__value")}>
        {multiple && Array.isArray(value)
          ? value.map((item: Value) => (
              <Tag
                key={item.id}
                tag={item.label}
                onRemove={() => handleRemove(item.id)}
              />
            ))
          : value
            ? !Array.isArray(value) && value.label
            : placeholder}
      </div>
      <div className={cx("select-field__suffix")}>
        <FaChevronDown />
      </div>
      <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ul className={cx("select-field__options")}>
          {options?.map((option: Option) => (
            <div
              className={cx("select-field__options__item")}
              onClick={() => handleSelect(option)}
            >
              {option.label}
              {multiple &&
                Array.isArray(value) &&
                value.some((item: Option) => item.id === option.id) && (
                  <FaCheck
                    className={cx("select-field__options__item__check")}
                  />
                )}
            </div>
          ))}
        </ul>
      </Dropdown>
    </div>
  );
};

export default SelectField;
